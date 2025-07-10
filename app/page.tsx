import SearchIcon from "@/public/assets/icons/search.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="bg-primary-b100 h-[82px] sm-[88px flex justify-between items-center">
      <Image
        src={"/assets/images/logo.png"}
        alt="logo-compony"
        width={127}
        height={69}
        className="w-[91px] h-[59px] mx-auto inline-block"
      />

      <ul className="hidden sm:flex gap-[32px] capitalize sm:text-[20px] text-poppins l1-b text-neutral-n700">
        <li>
          <Link href={""}>Home</Link>
        </li>
        <li>
          <Link href={""}>Variants</Link>
        </li>
        <li>
          <Link href={""}>Contact</Link>
        </li>
        <li>
          <Link href={""}>Testimonial</Link>
        </li>
      </ul>

      <div className="text-blue-500!">
        <SearchIcon stroke="#fff" width={20} height={20} />
      </div>
    </nav>
  );
}
