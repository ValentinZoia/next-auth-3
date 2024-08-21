import { NextRequest, NextResponse } from "next/server";
import { SignUpFormSchema } from "@/app/registrationSchema";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
    
  
  // Parse the form data - convert it into a simple data object
  const data = Object.fromEntries(formData)
    

  const parsed = SignUpFormSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", errors: parsed.error },
      { status: 400 }
    );
  }

  // Add data to the database

  return NextResponse.json({ message: "User created" },{ status: 201 });
}
