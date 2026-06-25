const navItems = [
  { label: "Contact", icon: "✉", href: "#contact" },
  { label: "Images", icon: "🖼", href: "#images" },
  { label: "3DModels", icon: "🧊", href: "#models" },
  { label: "Projects", icon: "⚙", href: "#projects" },
];

const FrutigerBar = () => {
  return (
    <nav className="glass-strong rounded-2xl px-6 py-3 flex items-center gap-6 frutiger-glow">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="shine group relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                     text-white font-medium text-sm tracking-wide
                     bg-gradient-to-br from-white/20 to-white/5
                     hover:from-white/30 hover:to-white/10
                     border border-white/20 hover:border-white/40
                     shadow-lg hover:shadow-xl
                     transition-all duration-300 ease-out
                     hover:-translate-y-0.5"
        >
          <span className="text-lg drop-shadow-lg">{item.icon}</span>
          <span className="drop-shadow-lg">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default FrutigerBar;
