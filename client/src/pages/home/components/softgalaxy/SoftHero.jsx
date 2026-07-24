import { Link } from "react-router-dom";
import { HiSparkles, HiOutlineCube, HiOutlineTrophy } from "react-icons/hi2";
import { FaPlay, FaWallet } from "react-icons/fa6";

const orbit = [
  { title: "Play", icon: FaPlay, to: "/models", className: "sg-hero-node--top" },
  { title: "Rewards", icon: HiOutlineTrophy, to: "/collect", className: "sg-hero-node--left" },
  { title: "Inventory", icon: HiOutlineCube, to: "/account", className: "sg-hero-node--right" },
];

const SoftHero = ({ data }) => {
  const hero = data?.Hero || {};
  return (
    <section className="sg-hero">
      <div className="container">
        <div className="sg-hero-grid">
          <div className="sg-hero-copy">
            <div className="sg-hero-badge"><HiSparkles /> WEB3 ARCADE • ON-CHAIN REWARDS</div>
            <h1 className="sg-hero-title">PLAY. OWN. <span>EARN.</span></h1>
            <p className="sg-hero-desc">
              {hero.description || "Enter a living Web3 game hub where your heroes, items, achievements, and rewards are yours. Jump into games, build your inventory, and connect your wallet."}
            </p>
            <div className="sg-hero-actions">
              <Link to="/models" className="btnTemp px-4 py-3"><FaPlay className="me-2" /> PLAY NOW</Link>
              <Link to="/account" className="btnTemp-outLine px-4 py-3"><FaWallet className="me-2" /> CONNECT WALLET</Link>
            </div>
            <div className="sg-quick-stats">
              {(hero.quickStats || [
                { value: "24K+", label: "PLAYERS" },
                { value: "128", label: "GAME ITEMS" },
                { value: "7.8M", label: "REWARDS" },
              ]).map((stat) => (
                <div key={stat.label} className="sg-stat-card sg-quick-card">
                  <div className="sg-stat-value">{stat.value}</div>
                  <div className="sg-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sg-hero-visual">
            <div className="sg-hero-orbit">
              <div className="sg-hero-ring" />
              <div className="sg-hero-ring sg-hero-ring-2" />
              <div className="sg-hero-core" aria-label="ChainPlayX core">
                <div className="sg-core-inner"><span>CPX</span><small>GAME HUB</small></div>
              </div>
              {orbit.map(({ title, icon: Icon, to, className }) => (
                <Link key={title} to={to} className={`sg-hero-node ${className}`} title={title} aria-label={title}>
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SoftHero;
