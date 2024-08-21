import React from 'react'
import SignUpForm from './SignUpForm3'
import { z } from "zod"
import { SignUpFormSchema } from "@/app/registrationSchema"
type OurSchema = z.infer<typeof SignUpFormSchema>

export default function Form3() {
  const onDataAction = async (data:OurSchema) =>{
    "use server"
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
      <h1 className='text-2xl'>Third Way to do Form</h1>
      <p>Creating a Server Action for Form Data</p>
      <SignUpForm  onDataAction={onDataAction}/>
    </div>
  )
}
