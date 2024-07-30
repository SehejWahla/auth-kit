import {Poppins} from "next/font/google"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppinsFont = Poppins({
  subsets : ['latin'],
  weight : ['600']
})


export default function Home() {
  return (
   <main className= {cn("flex h-full flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 ", poppinsFont.className)}>
    <div className="space-y-6 text-center">
      <h1 className="text-6xl font-semibold text-white drop-shadow-md">
        🔑Auth Kit
      </h1>
      <p className="text-xl text-white drop-shadow-md">Simplify auth flow in your NextJs Applications</p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
        
      </div>
    </div>
   </main>
  );
}
