import React from "react";
import SignUpForm from "./form";

export default function FormPage() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" w-0 sm:w-full">
          <img
            src="https://img.freepik.com/foto-gratis/paisaje-suroeste-arte-digital_23-2151785612.jpg?t=st=1724447018~exp=1724450618~hmac=2e5acd25bbac0b026ea01e862582927c6402351a9db15f3671681991d6760570&w=1380"
            alt="paisaje con atardecer, pajaros y montañas"
            className="w-full h-screen object-cover"
          />
        </div>
        
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mb-16">
            <h1 className="text-3xl font-bold font-kanit">LOGO</h1>
          </div>
          <div className="w-full  lg:w-[440px] px-8">
            <h1 className="text-3xl font-bold">Create your account</h1>
          </div>
          
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
