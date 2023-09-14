import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import Image from "next/image";

const navigation = {
  social: [
    {
      icon: ImFacebook2,
      href: "#",
    },
    {
      icon: FiInstagram,
      href: "#",
    },
    {
      icon: BsTwitter,
      href: "#",
    },
    {
      icon: ImYoutube,
      href: "#",
    },
  ],
  legal: [
    { name: "Conditions of Use", href: "#" },
    { name: "Privacy & Policy", href: "#" },
    { name: "Press Room", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mxauto px-4 lg:pb20 lg:py-16 lg:px-20">
        <div className="font-bold text-center ">
          <ul className="flex items-center justify-center ">
            {navigation.social.map((item) => (
              <li key={item.name} className="mx-4 lg:mx-10 py-1">
                {item.icon && (
                  <item.icon className="w-6 h-6 text-deepGray hover:cursor-pointer" />
                )}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col md:flex-row items-center justify-center py-4 md:py-10 px-3">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base py-2 md:py-0 md:text-lg text-black px-2 lg:mx-6 md:tracking-wide hover:text-deepGray font-dmsans md:font-semibold "
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <p className="flex items-center justify-center text-[#6B7280] font-dmsans text-lg py-2 pb-6 ">
            <span>© 2021 MovieBox by Adriana Eka Prayudha </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
