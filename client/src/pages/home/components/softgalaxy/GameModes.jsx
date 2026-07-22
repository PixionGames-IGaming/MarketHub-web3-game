import { Link } from "react-router-dom";
import { FaChessKnight, FaCrosshairs, FaDragon, FaFistRaised, FaCoins, FaTrophy } from "react-icons/fa6";

const defaultModules = [
  { name: "BATTLE ARENA", desc: "Compete in fast on-chain matches and climb the arena.", icon: FaFistRaised, link: "/models" },
  { name: "QUEST RUN", desc: "Complete quests, discover drops, and unlock progression.", icon: FaDragon, link: "/collect" },
  { name: "PVP RANKED", desc: "Test your build against other players and chase trophies.", icon: FaCrosshairs, link: "/rankings" },
  { name: "STRATEGY", desc: "Build your loadout and make every item count.", icon: FaChessKnight, link: "/dashboard" },
  { name: "REWARDS", desc: "Claim earned rewards from your connected inventory.", icon: FaCoins, link: "/collect" },
  { name: "LEADERBOARD", desc: "Track season points, wins, and achievement milestones.", icon: FaTrophy, link: "/rankings" },
];

const GameModes = ({ data }) => {
  const modules = Array.isArray(data?.games) && data.games.length ? data.games : defaultModules;
  return (
    <section className="soft-section">
      <div className="container">
        <div className="sg-section-heading"><span>01</span><div><h2 className="soft-section-title">CHOOSE YOUR MODE</h2><p className="soft-section-sub">Different worlds. Different ways to play. One player-owned economy.</p></div></div>
        <div className="sg-games-grid">
          {modules.map((module) => { const Icon = module.icon || FaDragon; return <Link key={module.name} to={module.link || "/dashboard"} className="sg-game-card"><div className="sg-game-icon"><Icon /></div><div className="sg-card-arrow">↗</div><h3>{module.name}</h3><p>{module.desc}</p><span className="sg-card-cta">ENTER MODE</span></Link>; })}
        </div>
      </div>
    </section>
  );
};
export default GameModes;
