"use client";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema } from "@/app/registrationSchema";
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
import { LogoButton } from "@/components/ui/button-logo";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signup } from "./action";
import { toast } from "@/components/ui/use-toast";

type OurSchema = z.infer<typeof SignUpFormSchema>;

export default function SignUpForm() {
  const [state, formAction] = useFormState(signup, {
    message: "",
  });

  const form = useForm<OurSchema>({
    resolver: zodResolver(SignUpFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  

  
   // Mostrar el mensaje en un toast cuando cambie el state.message
   useEffect(() => {
    if (state?.message) {
      toast({
        title: state.message,
        variant: "success", // Puedes cambiar el variant si tienes otros estilos
      });
      form.reset({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [state?.message]);
  
  return (
    <Form {...form}>
      
      <form
        action={formAction}       
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
                <Input type="email" {...field} />
              </FormControl>

              <FormMessage />
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state?.errors?.email[0]}</p>
              )}

              {/* {state?.errors?.email && (
                <div className="text-sm text-red-500">
                  <p>Email must:</p>
                  <ul>
                    {state.errors.email.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )} */}

              
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
              {state?.errors?.password && (
                <p className="text-sm text-red-500">{state?.errors?.password[0]}</p>
              )}

              {/* {state?.errors?.password && (
                <div className="text-sm text-red-500">
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )} */}
              
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
              {state?.errors?.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {state?.errors?.confirmPassword}
                </p>
              )}
              
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

        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link href={"/dashboard/form"} className="text-blue-500 font-bold">
            Log In
          </Link>
        </p>
      </form>
    </Form>
  );
}
