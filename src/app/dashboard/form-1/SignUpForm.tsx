"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpFormSchema } from "./definitions"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputPassword } from "@/components/ui/input";
import { LogoButton } from "@/components/ui/button-logo"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"

type OurSchema = z.infer<typeof SignUpFormSchema>

export default function SignUpForm() {
    const form = useForm<OurSchema>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
          email: "",
          password: "",
          
          
        },
      });
  
  
  const onSubmit = async (data: OurSchema) => {
    fetch("../../api/register",{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      toast({
        title: "User created with way 1",
        description: "We've created your account for you.",
        variant: "success",
      })
    })
  }
  
  
  
  
    return (
      <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-1/2  border-solid border-2 border-indigo-600 grid gap-4 p-4"
      >
        {/* Email*/}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field}/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password*/}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                {/* <Input type="password" {...field} /> */}
                <InputPassword type="password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password*/}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
              <InputPassword type="password" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button type="submit" variant="blue">
          Sign Up
        </Button>

          {/* --- or --- */}
        <div className="flex justify-center items-center gap-2">
          <hr className="w-1/2 " />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="w-1/2" />
        </div>

          {/*Github Login Button*/}
        <LogoButton type="button" variant={"outline"} logo={"github"}>
          Sign Up with Github
        </LogoButton>


          {/*Google Login Button*/}
        <LogoButton type="button" variant={"outline"} logo={"google"}>
          Sign Up with Google
        </LogoButton>
        
        
        <p className="text-sm text-center text-gray-400">Already have an account? <Link href={"/dashboard/form"} className="text-blue-500 font-bold">Log In</Link></p>
      </form>
    </Form>
  )
}
