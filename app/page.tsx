import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-8 px-6 md:flex-row md:items-center max-w-5xl">
         <Image
          src="/professional.png"
          width={400}
          height={400}
          alt="Photo of ME"
          className="rounded-full shrink-0"
        />
        <p className="text-lg max-w-md">
          Hello my name is Patrick Schaeffer. I am building this website for fun
          to share all my projects. Please stay tuned and enjoy!
        </p>
       
      </div>
    </div>
  );
}
