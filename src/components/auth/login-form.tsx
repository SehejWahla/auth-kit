"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { loginSchema } from "@/schemas";
import { Input } from "../ui/input";

import CardWrapper from "./card-wrapper";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
const LoginForm = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver : zodResolver(loginSchema),
        defaultValues : {
            email : "",
            password : ""
        }
    });
    const onSubmit = (values : z.infer<typeof loginSchema>)=>{
        console.log(values)
    }
    return <div className="w-full sm:w-1/2"><CardWrapper headerLabel="Welcome!" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
    <Form {...form}>
        <form  className="space-y-6"onSubmit={form.handleSubmit(onSubmit)} >
            <div className="space-y-4">
                <FormField 
                    control={form.control} 
                    name="email"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="fname@mail.com" type="email"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="password"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="***********" type="password"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
           <FormError message=""/>
           <FormSuccess message=""/>
            <Button type="submit" className="w-full">
              Login
            </Button>
           
            
        </form>
    </Form>
    </CardWrapper></div>
}

export default LoginForm;