"use client";
import { useRef } from "react";
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
import { useFormState, useFormStatus } from "react-dom";

import { signup } from "./action";
import { toast } from "@/components/ui/use-toast";

type OurSchema = z.infer<typeof SignUpFormSchema>;

export default function SignUpForm() {
  const [state, action] = useFormState(signup, undefined);

  const form = useForm<OurSchema>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const openToast = () => {
    if(state?.message)
    toast({
      title: "Success!",
      description: "Your account has been created.",
    });
  };

  openToast();
  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={action}
        // onSubmit={form.handleSubmit( () => formRef?.current?.requestSubmit())}
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
                <p className="text-red-500 text-sm">{state?.errors?.email}</p>
              )}
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
              {state?.errors?.password && (
                <div className="text-sm text-red-500">
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}
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
              {state?.errors?.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {state?.errors?.confirmPassword}
                </p>
              )}
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
