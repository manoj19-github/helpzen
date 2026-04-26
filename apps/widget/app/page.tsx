import Image from "next/image";
import { add } from "@workspace/math/add";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     hi this is widget
     {
       add(54541,4242)
     }
    </div>
  );
}
