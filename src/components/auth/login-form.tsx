"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { loginSchema } from "@/schemas";

import CardWrapper from "./card-wrapper";
const LoginForm = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver : zodResolver(loginSchema),
        defaultValues : {
            email : "",
            password : ""
        }
    });
    return <div><CardWrapper headerLabel="Welcome!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>Login Form!</CardWrapper></div>
}

export default LoginForm;