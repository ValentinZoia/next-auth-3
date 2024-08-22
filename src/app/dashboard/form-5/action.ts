"use server"

import { SignUpFormSchema, FormState } from "@/app/registrationSchema"


export async function signup(state:FormState, formData: FormData): Promise<FormState>{
       // 1. Validate form fields

       const validatedFields = SignUpFormSchema.safeParse({
         email: formData.get("email"),
         password: formData.get("password"),
         confirmPassword: formData.get("confirmPassword"),
       });

       //if any form fields are invalid, return
       if (!validatedFields.success) {
         return {
            errors: validatedFields.error.flatten().fieldErrors
         };
       }

       // 2. Create user
       console.log(validatedFields.data)
       
       return{
         message: "User registered"
       }

}