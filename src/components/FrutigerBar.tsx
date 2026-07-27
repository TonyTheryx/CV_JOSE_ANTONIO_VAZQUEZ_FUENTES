import React from "react";
import {FaMusic, FaFilePdf, FaBook, FaGraduationCap, FaMicrochip, FaUser, FaCube, FaRobot, FaCog} from "react-icons/fa";


const navItems = [
  { label: "Music", icon: <FaMusic className="text-purple-300"/>, href: "/MusicPlayer" },
  { label: "PDF", icon: <FaFilePdf className="text-purple-300"/>, href: "/PDF" },
  { label: "Catalog", icon: <FaBook className="text-purple-300"/>, href: "/catalog" },
  { label: "CV", icon: <FaGraduationCap className="text-purple-300"/>, href: "/cv" },
  { label: "Electronics", icon: <FaMicrochip className="text-purple-300"/>, href: "/electronics" },
  { label: "Character Editor", icon: <FaUser className="text-purple-300"/>, href: "/CharacterEditor" },
  { label: "3D Laboratory", icon: <FaCube className="text-purple-300"/>, href: "/3DLaboratory" },
  { label: "ChatBot", icon: <FaRobot className="text-purple-300"/>, href: "/ChatBot" }
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
      <details className="relative">
  <summary
    className="list-none cursor-pointer bg-linear-to-b from-teal-300 to-white/5
               rounded-full text-white px-4 py-2.5
               border border-white/20 hover:border-white/40
               shadow-lg hover:shadow-xl
               transition-all duration-300 ease-out
               hover:-translate-y-0.5 flex items-center justify-center"
  >
    <FaCog className="text-lg" />
  </summary>

  <div
    className="absolute right-0 mt-2 w-48 rounded-xl
               bg-gray-800 border border-white/20
               shadow-xl overflow-hidden z-50"
  >
    <a
      href="/settings/profile"
      className="block px-4 py-2 text-white hover:bg-purple-600"
    >
      Perfil
    </a>

    <a
      href="/settings/theme"
      className="block px-4 py-2 text-white hover:bg-purple-600"
    >
      Tema
    </a>

    <a
      href="/settings/account"
      className="block px-4 py-2 text-white hover:bg-purple-600"
    >
      Cuenta
    </a>
  </div>
</details>
    </nav>
  );
}
