
import { Hometypewriter } from "@/components/Hometypewriter";
import { LampDemo } from "@/components/LampDemo";


export default function Home() {
  return (
    <>
    <main className="rounded-3xl w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
      <div>
        <Hometypewriter />
      </div>
    </main>
    <LampDemo />
    </>
  );
}
