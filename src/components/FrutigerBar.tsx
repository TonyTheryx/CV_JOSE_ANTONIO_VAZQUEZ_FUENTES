import React from "react";

const navItems = [
  { label: "Contact", icon: "✉", href: "#contact" },
  { label: "Images", icon: "🖼", href: "#images" },
  { label: "3DModels", icon: "🧊", href: "#models" },
  { label: "Projects", icon: "⚙", href: "#projects" },
  { label: "Electronics", icon: "🎰", href: "#electronics" },
  { label: "Character Editor", icon: "👤", href: "#CharacterEditor" },
  { label: "IAAgent", icon: "🤖", href: "#IAAgent" }
];

export default function FrutigerBar(props: { isVisible: boolean }) {
  if (!props.isVisible) return null;
  return(
      <nav className="bg-linear-to-b from-white/100 via-purple-600/100 to-purple-400/100 border-gray-300 border-2 rounded-2xl px-6 py-3 flex items-center gap-6 ">
        {navItems.map((item) => (
          <a
          key={item.label}
          href={item.href}
          className="shine group relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                     text-white font-medium text-sm tracking-wide
                     bg-linear-to-b from-gray-100/40 via-gray-600/100 to-gray-100/100
                     hover:from-white/50 hover:to-purple-600/100
                     border border-blue-100/20 hover:border-blue-500/40
                     shadow-lg hover:shadow-xl
                     transition-all duration-300 ease-out
                     hover:-translate-y-0.5"
        >
          <span className="text-lg drop-shadow-lg">{item.icon}</span>
          <span className="drop-shadow-">{item.label}</span>
        </a>
      ))}
      <button className="bg-linear-to-b from-teal-300 to-white/5 rounded-full text-white font-medium text-sm tracking-wide px-5 py-2.5 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-0.5">
        Configuration
      </button>
      <input type="text" placeholder="Search..." className="bg-gray-800/50 text-white placeholder:text-gray-400 border border-gray-500/20 focus:border-blue-500/40 shadow-lg hover:shadow-xl transition-all duration-300 ease-out" />
    </nav>
  );
}
