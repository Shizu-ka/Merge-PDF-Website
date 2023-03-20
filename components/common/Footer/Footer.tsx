import Image from "next/image";

export function Footer() {
  return (
    <a
      href="http://shizuka.my.id/"
      className="flex flex-row justify-center items-center lg:space-x-4 space-x-2"
    >
      <p className="lg:text-lg text-xs">Thanks to debbyalmadea | © Shizuka 2023</p>
      <div className="lg:w-6 w-4 lg:h-6 h-4 relative">
        <Image src="/github-logo.png" alt="github-logo" fill />
      </div>
    </a>
  );
}
