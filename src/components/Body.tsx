import { ReactNode } from "react";
import FallingBackground from "./FallingBackground";

interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <>
      <FallingBackground />
      <main className="pt-28 px-4 min-h-screen relative text-white overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-xl bg-white/10 backdrop-blur-md shadow-lg p-6 relative z-10">
          {children}
        </div>
      </main>
    </>
  );
};

export default Body;
