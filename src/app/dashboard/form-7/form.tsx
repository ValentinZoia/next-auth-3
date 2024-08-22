"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input, InputPassword } from "@/components/ui/input";
import { LogoButton } from "@/components/ui/button-logo";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
 import { signup } from "./action";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

export default function SignUpForm() {
  const [state, action] = useFormState(signup, {
    message: "",
    errors: undefined,
    
  });
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.message,
        variant: "success", // Puedes cambiar el variant si tienes otros estilos
      });

      formRef.current?.reset();
    }
    
  }, [state?.message]);

  return (
    <form
        ref={formRef}
        action={action}       
        className="w-full sm:w-1/2  border-solid border-2 border-indigo-600 grid gap-4 p-4"
      >
          {state?.message && (
            <p className="text-sm text-green-500">{state?.message}</p>
          )}

        {/* Email*/}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </div>
        {state?.errors?.email && (
                <div className="text-sm text-red-500">
                  <p>Email must:</p>
                  <ul>
                    {state.errors.email.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}


        {/* Password*/}
        <div>
          <Label htmlFor="password">Password</Label>
          <InputPassword type="password" id="password" name="password" />
        </div>
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

        {/* Confirm Password*/}
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <InputPassword type="password" id="confirmPassword" name="confirmPassword"/>
        </div>
        {state?.errors?.confirmPassword && (
            <p className="text-sm text-red-500">{state.errors.confirmPassword}</p>
          )}

        {/* Submit button */}
        <SubmitButton />

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
  )
}

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" variant="blue">
          {pending ? 'Submitting...' : 'Sign up'}
    </Button>
  );
}