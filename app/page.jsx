import About from "@/components/About";
import Jobs from "@/components/Jobs";
import Projects from "@/components/projetcs";

export default function Home() {
  return (
    <>
    <main className="mx-auto min-h-screen  text-left">
      <div
        className="px-8 py-64 sm:px-28 md:px-64
      md:py-52"
      >
        <h2 className="text-green-400 tracking-widest text-lg mb-2">Hi, my name is</h2>
        <h1 className="pb-4 text-4xl font-semibold text-white md:text-6xl tracking-wide">
          Barry Anil.
        </h1>
        <p className="pb-4 text-4xl mb-6 text-gray-500 md:text-6xl decoration-transparent font-medium">I build things for the web.</p>
        <p className="text-xl font-semibold text-white md:pb-1 md:text-3xl">
          Software Engineer & YouTube Content Creator
        </p>
        <p className="text-lg  text-neutral-300  md:text-xl max-w-xl ">
          Passionate about developing software for an easier and meaningful
          living.
       
          Passionate about developing software for an easier and meaningful
          living.
        </p>
      </div>
   
      <About />
      <Jobs/>
      <Projects />
    </main>
  
    </>
  )
}
