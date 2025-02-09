import { Icon } from "@iconify/react/dist/iconify.js";
import Education from "../Components/Education";
import LoginModal from "../Components/LoginModal";
import SignupModal from "../Components/SignupModal";
import React from "react";

export default function Welcome() {
  return (
    <div className="flex justify-between bg-[#f5f5f5]">
      <div className="w-1/2 flex flex-col items-center mt-5">
        <div className="flex flex-col justify-center items-center ml-10 self-start">
          <Education dimensions={20} />
          <h1 className="text-2xl text-[#003366] font-bold">Knowva</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-16 p-8 max-w-xl">
          <h1 className="text-5xl mb-2 font-semibold">Knowva</h1>
          <p>Where Learning Meets Innovation</p>
          <div className="h-[1px] w-72 mt-5 mb-5 bg-[#ababab]"></div>
          <p className="text-xl">
            We transform your text into captivating presentations, interactive
            explanations, and lifelike avatars. Whether teaching or learning,
            Knowva makes your experience smarter and more engaging.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <LoginModal />
          <SignupModal />
        </div>
      </div>
      <div className="w-1/2 h-screen">
        <img
          src="../src/assets/welcome.jpg"
          alt="Welcome Image"
          className="h-full w-full object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
}
