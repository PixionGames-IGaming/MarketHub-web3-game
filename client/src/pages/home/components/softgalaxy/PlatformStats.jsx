import { FaUsers, FaGamepad, FaCoins, FaTrophy } from "react-icons/fa6";
const icons = [FaUsers, FaGamepad, FaCoins, FaTrophy];
const PlatformStats = ({ data }) => {
  const stats = data?.stats || [
    { value: "24.8K", label: "ACTIVE PLAYERS" },
    { value: "128", label: "DIGITAL ITEMS" },
    { value: "7.8M", label: "CPX REWARDS" },
    { value: "42", label: "SEASON TROPHIES" },
  ];
  return <section className="soft-section sg-overview"><div className="container"><div className="sg-section-heading"><span>02</span><div><h2 className="soft-section-title">LIVE GAME WORLD</h2><p className="soft-section-sub">Your progression, inventory, and achievements in one place.</p></div></div><div className="sg-stats-grid">{stats.map((s,i)=>{const Icon=icons[i%icons.length];return <div className="sg-stat-card" key={s.label}><div className="sg-stat-icon"><Icon /></div><div className="sg-stat-value">{s.value}</div><div className="sg-stat-label">{s.label}</div><div className="sg-stat-bar"><i style={{width:`${55+i*10}%`}} /></div></div>})}</div></div></section>;
};
export default PlatformStats;
