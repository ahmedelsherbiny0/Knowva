import React from "react";
import Carousel from "./Carousel";
import slides from "../data/carouselData.json";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

export default function Module1Lesson1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-5xl font-bold mt-8 mb-12">Module 1 - Lesson 1</h1>
      <ol className="list-decimal ml-4 mb-8 text-left">
        <li className="text-4xl font-bold">
          <h1 className="text-left text-4xl font-bold">Vocabulary Section:</h1>
        </li>
      </ol>
      <h2 className="font-bold text-3xl mt-7 text-left ml-20 mb-5">
        1.1 Vocabulary Clarifications:
      </h2>
      <Carousel data={slides.vocab_words} />
      <br />
      <br />
      <br />
      <h2 className="font-bold text-3xl mt-7 text-left ml-20 mb-5">
        1.2 Vocabulary Explanation:
      </h2>
      <Carousel data={slides.vocab_slides} />
      <br />
      <br />
      <br />
      <h2 className="font-bold text-3xl mt-7 text-left ml-20 mb-5">
        1.3 Vocabulary Test:
      </h2>
      <button
        onClick={() => navigate("/english-a2/module1/lesson1/vocab-test")}
        className="flex flex-row justify-between items-center gap-3 mx-auto w-fit bg-[#42a5f5] hover:opacity-80 transition-all cursor-pointer px-6 py-4 rounded-2xl text-2xl"
      >
        <p>Go to Vocabulary Test</p>
        <KeyboardArrowRightIcon />
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carousel data={slides.grammer_slides} />
    </div>
  );
}
