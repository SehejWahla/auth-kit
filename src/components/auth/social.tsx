"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () =>{
    return <div className="flex justify-center items-center  gap-x-2 ">
        <Button size="lg" onClick={()=>{}}>
            <FcGoogle className="h-5 w-5"/>
        </Button>
        <Button size="lg"  onClick={()=>{}}>
            <FaGithub className="h-5 w-5"/>
        </Button>
    </div>
}