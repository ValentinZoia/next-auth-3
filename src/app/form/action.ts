"use server"

import { SignUpFormSchema, FormState } from "@/app/registrationSchema"

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function signup(prevState:FormState, formData: FormData): Promise<FormState>{
       // 1. Validate form fields
        // await sleep(2000)
       const validatedFields = SignUpFormSchema.safeParse({
         email: formData.get("email"),
         password: formData.get("password"),
         confirmPassword: formData.get("confirmPassword"),
       });

       //if any form fields are invalid, return
       if (!validatedFields.success) {
         return {
            message: "",
            errors: validatedFields.error.flatten().fieldErrors , 
         };
       }

       

       // 2. Create user
       console.log(validatedFields.data)
       
       return{
         message: "User created successfully",
         errors: undefined,
       }

}