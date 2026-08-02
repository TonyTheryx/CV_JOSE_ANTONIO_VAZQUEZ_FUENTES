import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import Tx from "../SVG/Tx";

const socialLinks = [
  {
    href: "https://www.youtube.com/@tonytheryx7577",
    icon: <FaYoutube size={24} />,
    classes: "bg-linear-to-b from-white via-red-500 to-red-400 hover:bg-red-400",
  },
  {
    href: "https://www.instagram.com/tonytheryx/",
    icon: <FaInstagram size={22} />,
    classes: "bg-linear-to-b from-white via-pink-500 to-pink-400 hover:bg-pink-400",
  },
  {
    href: "https://pin.it/A8pSQkhO0",
    icon: <FaPinterest size={22} />,
    classes: "bg-linear-to-b from-white via-pink-500 to-pink-400 hover:bg-pink-400",
  },
  {
    href: "https://www.tiktok.com/@tonytheryx?is_from_webapp=1&sender_device=pc",
    icon: <FaTiktok size={22} />,
    classes: "bg-linear-to-b from-white via-black to-gray-300 hover:bg-gray-800",
  },
];

export default function Footer() {
  return (
    <footer className="
         bg-linear-to-b from-gray-100/40 via-gray-600/100 to-gray-300/100
        backdrop-blur-xl
        border-t
        border-white/40
        px-10
        py-12
    ">
      <div className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-4
            gap-10
        ">
        <div>
          <h3 className="font-bold text-lg text-white">Contacto</h3>
          <p className="text-white">TonyTheryx@gmail.com</p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg text-white font-bold text-slate-800 mb-4">
            Redes Sociales
          </h3>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    w-12 h-12
                    rounded-full
                    ${social.classes}
                    text-white
                    flex
                    items-center
                    justify-center
                    transition
                    hover:scale-110
                `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Tx />
        </div>

        <div className="text-right">
          <p className="text-white">© 2026 Joseph TonyTheryx</p>
        </div>
      </div>
    </footer>
  );
}
