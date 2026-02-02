require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MESSAGES_FILE = path.join(__dirname, 'messages.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'change_this_to_secure_password';
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'dev_secret_change_me';

function readMessages(){
  try{
    const raw = fs.readFileSync(MESSAGES_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  }catch(e){
    return [];
  }
}

function writeMessages(data){
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(data, null, 2), 'utf8');
}

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  const messages = readMessages();
  const entry = { id: Date.now(), name, email, message, createdAt: new Date().toISOString() };
  messages.unshift(entry);
  try{
    writeMessages(messages);
    return res.json({ ok: true });
  }catch(err){
    return res.status(500).json({ error: 'Could not save message' });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body || {};
  if(!password) return res.status(400).json({ error: 'Missing password' });
  if(password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ role: 'admin' }, ADMIN_SECRET, { expiresIn: '6h' });
  res.json({ token });
});

function authMiddleware(req, res, next){
  const auth = req.headers.authorization;
  if(!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  const token = auth.split(' ')[1];
  try{
    const payload = jwt.verify(token, ADMIN_SECRET);
    req.user = payload;
    next();
  }catch(e){
    return res.status(401).json({ error: 'Invalid token' });
  }
}

app.get('/api/admin/messages', authMiddleware, (req, res) => {
  const messages = readMessages();
  res.json({ messages });
});

app.delete('/api/admin/messages/:id', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  let messages = readMessages();
  const before = messages.length;
  messages = messages.filter(m => m.id !== id);
  if(messages.length === before) return res.status(404).json({ error: 'Not found' });
  writeMessages(messages);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
