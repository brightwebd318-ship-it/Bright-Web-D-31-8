import SEO from '../components/SEO';

export default function Services(){
  const items = [
    {
      title: 'Website Development',
      desc: 'Fast, secure, and scalable websites tailored for your business.',
      benefits: ['Modern tech stack (React/Next/static sites)', 'Fast loading and secure hosting', 'Scalable setup to grow with you']
    },
    {
      title: 'Web3 & Decentralized Apps',
      desc: 'Innovative Web3 solutions including blockchain integration and smart contracts.',
      benefits: ['Ethereum & Solana development', 'NFT marketplaces & DAO setup', 'Secure wallet integrations']
    },
    {
      title: 'AI Integration (Sarvam AI / Meta)',
      desc: 'Leverage the power of AI with Sarvam AI and Meta technologies to automate your business.',
      benefits: ['Custom AI chatbots & virtual assistants', 'Predictive analytics & data processing', 'NLP using Sarvam AI & Meta Llama']
    },
    {
      title: 'Cloud Dev (Google Colab / Replit)',
      desc: 'Speed up your development cycle with cloud-based environments like Google Colab and Replit.',
      benefits: ['Zero-setup dev environments', 'Collaborative coding & GPU acceleration', 'Automatic deployments and hosting']
    },
    {
      title: 'Web Design (UI/UX)',
      desc: 'Clean, modern, and user-friendly interfaces that convert.',
      benefits: ['User-first layouts', 'Accessible design (WCAG-aware)', 'Clickable prototypes for quick feedback']
    },
    {
      title: 'E-commerce Websites',
      desc: 'Sell products online with confidence — carts, payments, and inventory.',
      benefits: ['Secure payment integration', 'Inventory & order workflows', 'Conversion-focussed product pages']
    },
    {
      title: 'Landing Pages',
      desc: 'High-conversion pages for promotions & ads.',
      benefits: ['A/B ready layouts', 'Fast FCP for ad traffic', 'Clear CTA and tracking setup']
    },
    {
      title: 'Website Redesign',
      desc: 'Refresh your old site with a modern look and improved performance.',
      benefits: ['Visual refresh and UX improvements', 'SEO-friendly migrations', 'Performance uplift']
    },
    {
      title: 'Maintenance & Support',
      desc: 'Keep your website updated and running smoothly.',
      benefits: ['Regular backups & updates', 'Uptime and performance monitoring', 'Fast support SLAs']
    },
    {
      title: 'SEO / Performance Optimization',
      desc: 'Improve discoverability and speed to bring more traffic and conversions.',
      benefits: ['Technical SEO fixes', 'Performance audits & fixes', 'Analytics and ranking guidance']
    }
  ];

  return (
    <div className="page services-page">
      <SEO 
        title="Our Services" 
        description="Explore our range of services: Web3 development, AI integration (Sarvam AI, Meta), Cloud solutions (Google Colab, Replit), and premium web design in Kochi."
        keywords="Web3 development kochi, Sarvam AI integration, Meta AI solutions, Google Colab web services, Replit hosting Kochi, affordable web dev"
      />
      <h2>What We Do at Bright Web D 31:8</h2>
      <p className="muted">Key services tailored to startups, small shops, and growing businesses.</p>

      <div className="services-list">
        {items.map((s) => (
          <div className="service-item" key={s.title}>
            <div className="service-icon">{s.title.split(' ').slice(0,2).map(w=>w[0]).join('')}</div>
            <div className="service-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="benefits">
                {s.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

