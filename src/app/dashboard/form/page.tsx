"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input, InputPassword } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import GoogleIcon from "@/lib/GoogleIcon";
import Link from "next/link";


const exampleFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .max(20)
    .trim(),
  email: z.string().email({message: "Please enter a valid email address"}).trim(),
  type: z.enum(["all", "mentions", "none"], {
    required_error: "Please select an option",
  }),
});

const SignupFormSchema = z.object({
  email: z.string().min(1, { message: 'Email field must not be empty.' }).email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(1, { message: 'Password field must not be empty.' })
    .min(8,{message:'Be at least 8 characters long'})
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .trim(),

  confirmPassword: z.string().trim(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const LoginFormSchema = z.object({
  email: z.string().min(1, { message: 'Email field must not be empty.' }).email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(1, { message: 'Password field must not be empty.' }),
  
});





export default function FormPage() {
  



  // 1. Define your form.
  const exampleForm = useForm<z.infer<typeof exampleFormSchema>>({
    resolver: zodResolver(exampleFormSchema),
    defaultValues: {
      username: "",
      email: "",
      
      
    },
  });

  const signupForm = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      
      
    },
  });

  const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof exampleFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
      variant: "success",
    });

    console.log({ values });
  }

  {/* LOGIN - ONSUBMIT*/}
  function onSubmit2(values: z.infer<typeof LoginFormSchema>) {
    toast({
      title: "Login Successfully 🚀", 
      variant: "success",
    });

    console.log({ values });
  }

   {/* SIGNUP - ONSUBMIT*/}
   function onSubmit3(values: z.infer<typeof SignupFormSchema>) {
    toast({
      title: "User Created Successfully 🚀", 
      variant: "success",
    });

    console.log({ values });
  }




  return (
    <div className="grid gap-4">
      <Form {...exampleForm}>
        <form
          onSubmit={exampleForm.handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Username */}
          <FormField
            control={exampleForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email*/}
          <FormField
            control={exampleForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Type - Radio Group */}
          <FormField
            control={exampleForm.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Notify me about...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        All new messages
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="mentions" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Direct messages and mentions
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal">Nothing</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <div className="col-span-2">
            <Button type="submit" variant="blue">
              Submit
            </Button>
          </div>
        </form>
      </Form>


      {/* LOGIN FORM - GITHUB - GOOGLE */}
      
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onSubmit2)}
          className="w-full sm:w-1/2  border-solid border-2 border-indigo-600 grid gap-4 p-4"
        >
          
          {/* Email*/}
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password*/}
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                <InputPassword type="password" {...field} />
                </FormControl>
                <FormMessage />
                <Link href={"/dashboard/form"}><p className="mt-2 text-sm text-right col-end-2 text-blue-500">Forgot Password?</p> </Link>
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button type="submit" variant="blue">
            Log In
          </Button>

            {/* --- or --- */}
          <div className="flex justify-center items-center gap-2">
            <hr className="w-1/2 " />
            <span className="text-sm text-gray-400">OR</span>
            <hr className="w-1/2" />
          </div>

            {/*Github Login Button*/}
          <Button variant="outline" type="button">
            <GitHubLogoIcon  className="mr-2 h-5 w-5" /> Log in with Github
          </Button>

            {/*Google Login Button*/}
          <Button  variant="outline" type="button">
            <GoogleIcon /> Log in with Google
          </Button>
          <p className="text-sm text-center  text-gray-400">Dont have an account yet? <Link href={"/dashboard/form"} className="text-blue-500 font-bold">Sign Up</Link></p>
        </form>
      </Form>



      {/* SIGNUP FORM - EMAIL - PASSWORD - CONFIRM PASSWORD */}
      <Form {...signupForm}>
        <form
          onSubmit={signupForm.handleSubmit(onSubmit3)}
          className="w-full sm:w-1/2  border-solid border-2 border-indigo-600 grid gap-4 p-4"
        >
          {/* Email*/}
          <FormField
            control={signupForm.control}
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
            control={signupForm.control}
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
            control={signupForm.control}
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
          <Button variant="outline" type="button">
            <GitHubLogoIcon  className="mr-2 h-5 w-5" /> Sign Up with Github
          </Button>

            {/*Google Login Button*/}
          <Button  variant="outline" type="button">
            <GoogleIcon /> Sign Up with Google
          </Button>
          
          
          <p className="text-sm text-center text-gray-400">Already have an account? <Link href={"/dashboard/form"} className="text-blue-500 font-bold">Log In</Link></p>
        </form>
      </Form>



      
    </div>
  );
}
