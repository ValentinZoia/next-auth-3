import { NextRequest, NextResponse } from "next/server";
import { SignUpFormSchema } from "@/app/registrationSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parsed = SignUpFormSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", errors: parsed.error },
      { status: 400 }
    );
  }

  // Add data to the database

  return NextResponse.json({ message: "User created" }, { status: 201 });
}
