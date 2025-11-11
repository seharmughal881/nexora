import { Mail, Phone, Linkedin, Facebook, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
 <div className="hidden md:flex w-full bg-gradient-to-r from-[#390c59] via-purple-900 to-[#390c59] text-white text-sm py-2 px-4 items-center justify-center gap-6 overflow-x-auto whitespace-nowrap">

      {/* Email */}
      <div className="flex items-center gap-2">
        <Mail size={16} />
        <Link href="mailto:nexorafs369@gmail.com" className="hover:text-purple-300 transition">
          nexorafs369@gmail.com
        </Link>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2">
        <Phone size={16} />
        <Link href="tel:123456789" className="hover:text-purple-300 transition">
          123456789
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-[15px]">

        <Link href="#" className="hover:text-purple-300 transition">
          <Linkedin size={16} />
        </Link>

        <Link href="#" className="hover:text-purple-300 transition">
          <Facebook size={16} />
        </Link>

        <Link href="#" className="hover:text-purple-300 transition">
          <Instagram size={16} />
        </Link>

        <Link href="#" className="hover:text-purple-300 transition">
          <Youtube size={16} />
        </Link>

        <Link href="#" className="hover:text-purple-300 transition">
          <Twitter size={16} />
        </Link>

        {/* Future WhatsApp Chat */}
        <Link href="#" className="hover:text-green-400 transition">
          <MessageCircle size={16} />
        </Link>
      </div>
    </div>
  );
}
