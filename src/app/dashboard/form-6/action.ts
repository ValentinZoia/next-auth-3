"use server"

import { SignUpFormSchema, FormState } from "@/app/registrationSchema"


export async function signup(prevState: FormState, formData: FormData): Promise<FormState>{
       // 1. Validate form fields
       const data = Object.fromEntries(formData)
       const validatedFields = SignUpFormSchema.safeParse(data);

       console.log(validatedFields)

       //if any form fields are invalid, return
       if (!validatedFields.success) {
         return {
            errors: validatedFields.error.flatten().fieldErrors
         };
       }

       // 2. Create user
       console.log(validatedFields.data)
       
       return{
         message: "User created successfully"
       }

}