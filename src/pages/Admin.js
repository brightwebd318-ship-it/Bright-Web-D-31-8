import React, { useState, useEffect } from 'react';

export default function Admin(){
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(token) fetchMessages();
    // eslint-disable-next-line
  }, [token]);

  function login(e){
    e.preventDefault();
    fetch('/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ password }) })
      .then(r => r.json())
      .then(j => {
        if(j.token){
          setToken(j.token);
          localStorage.setItem('adminToken', j.token);
          setPassword('');
        }else{
          alert(j.error || 'Login failed');
        }
      }).catch(() => alert('Network error'));
  }

  function fetchMessages(){
    setLoading(true);
    fetch('/api/admin/messages', { headers: { Authorization: 'Bearer ' + token }})
      .then(r => r.json())
      .then(j => { setMessages(j.messages || []); setLoading(false); })
      .catch(() => { alert('Failed to load messages'); setLoading(false); });
  }

  function removeMessage(id){
    if(!window.confirm('Delete this message?')) return;
    fetch('/api/admin/messages/' + id, { method: 'DELETE', headers: { Authorization: 'Bearer ' + token }})
      .then(r => r.json())
      .then(j => { if(j.ok) fetchMessages(); else alert(j.error || 'Failed'); })
      .catch(() => alert('Network error'));
  }

  if(!token){
    return (
      <div className="page">
        <h2>Admin Login</h2>
        <form onSubmit={login} style={{maxWidth:420, marginTop:12}}>
          <div className="form-group">
            <label>Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
          </div>
          <button className="btn primary" type="submit">Sign In</button>
        </form>
      </div>
    );
  }

  return (
    <div className="page">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2>Admin — Messages</h2>
        <div>
          <button className="btn ghost" onClick={() => { localStorage.removeItem('adminToken'); setToken(''); setMessages([]); }}>Sign Out</button>
        </div>
      </div>

      <div style={{marginTop:18}}>
        <button className="btn ghost" onClick={fetchMessages} disabled={loading}>{loading ? 'Loading...' : 'Refresh'}</button>
      </div>

      <div style={{marginTop:18}}>
        {messages.length === 0 ? <p>No messages yet.</p> : (
          <div style={{display:'grid', gap:12}}>
            {messages.map(m => (
              <div key={m.id} className="testimonial-card">
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div>
                    <div className="client-info"><div className="name">{m.name}</div><div className="role">{m.email}</div></div>
                    <div style={{fontSize:12, color:'rgba(240,244,248,0.7)'}}>{new Date(m.createdAt).toLocaleString()}</div>
                  </div>
                  <div>
                    <button className="btn ghost" onClick={() => removeMessage(m.id)}>Delete</button>
                  </div>
                </div>
                <p style={{marginTop:12, whiteSpace:'pre-wrap', color:'rgba(240,244,248,0.9)'}}>{m.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
