import Hero from "@/components/Hero";
import Image from "next/image";
import LogoImage from '../asset/Blog-logo.png'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="-mt-[35rem]">
      <Image className="ml-10" src={LogoImage} alt="logo" width={100} height={100}/>
      <h1 className="text-black font-semibold">Modern Blog Website</h1>
      </div>
      <div className="-mt-[35rem]">
      <Hero/>
      </div>
    </div>
  );
}
  