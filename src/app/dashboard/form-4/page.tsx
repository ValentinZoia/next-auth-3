import React from 'react'
import SignUpForm from "./SignUpForm4"
import { z } from "zod"
import { SignUpFormSchema } from "@/app/registrationSchema"
type OurSchema = z.infer<typeof SignUpFormSchema>

export default function Form4() {

  const onFormAction = async (prevState:{
    message: string;
    user?: OurSchema;
    issues?: string[];
  },formData: FormData) =>{
    "use server"
    const data = Object.fromEntries(formData)
    const parsed = SignUpFormSchema.safeParse(data)

    if(!parsed.success){
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message)
      }
    }


    console.log(parsed)
    return {message: "User registered", user: parsed.data}
  }


  return (
    <div>
      <h1 className='text-2xl'>Fourth Way to do Form</h1>
      <p>Implement a Server Action for Handling Form Data</p>
      <SignUpForm  onFormAction={onFormAction}/>
    </div>
  )
}
