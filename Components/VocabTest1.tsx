import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const VocabTest1 = () => {
  const navigate = useNavigate();
  const questions = [
    {
      questionText: "Where can you go to relax, have a picnic, or take a walk?",
      answerOptions: [
        { answerText: "Library", isCorrect: false },
        { answerText: "Mall", isCorrect: false },
        { answerText: "Park", isCorrect: true },
        { answerText: "School", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is an outdoor area with swings, slides, and other play equipment called?",
      answerOptions: [
        { answerText: "Theater", isCorrect: false },
        { answerText: "Playground", isCorrect: true },
        { answerText: "Classroom", isCorrect: false },
        { answerText: "Kitchen", isCorrect: false },
      ],
    },
    {
      questionText: "What do children use to go down quickly in a playground?",
      answerOptions: [
        { answerText: "Slide", isCorrect: true },
        { answerText: "Ladder", isCorrect: false },
        { answerText: "Bridge", isCorrect: false },
        { answerText: "Tunnel", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which piece of playground equipment moves back and forth when you sit on it?",
      answerOptions: [
        { answerText: "See-saw", isCorrect: false },
        { answerText: "Swing", isCorrect: true },
        { answerText: "Slide", isCorrect: false },
        { answerText: "Trampoline", isCorrect: false },
      ],
    },
    {
      questionText: "What do you feel when you need a drink?",
      answerOptions: [
        { answerText: "Hungry", isCorrect: false },
        { answerText: "Sleepy", isCorrect: false },
        { answerText: "Thirsty", isCorrect: true },
        { answerText: "Tired", isCorrect: false },
      ],
    },
    {
      questionText: "What is a refreshing drink made from lemons?",
      answerOptions: [
        { answerText: "Soda", isCorrect: false },
        { answerText: "Milkshake", isCorrect: false },
        { answerText: "Lemonade", isCorrect: true },
        { answerText: "Tea", isCorrect: false },
      ],
    },
    {
      questionText: "Which sport is played with a round ball and goals?",
      answerOptions: [
        { answerText: "Tennis", isCorrect: false },
        { answerText: "Basketball", isCorrect: false },
        { answerText: "Soccer", isCorrect: true },
        { answerText: "Baseball", isCorrect: false },
      ],
    },
    {
      questionText: "Who do you spend time with and share experiences with?",
      answerOptions: [
        { answerText: "Teachers", isCorrect: false },
        { answerText: "Strangers", isCorrect: false },
        { answerText: "Friends", isCorrect: true },
        { answerText: "Neighbors", isCorrect: false },
      ],
    },
    {
      questionText: "What do you sit on in a park?",
      answerOptions: [
        { answerText: "Bench", isCorrect: true },
        { answerText: "Chair", isCorrect: false },
        { answerText: "Swing", isCorrect: false },
        { answerText: "Rock", isCorrect: false },
      ],
    },
    {
      questionText: "What is a tall plant with leaves and branches?",
      answerOptions: [
        { answerText: "Tree", isCorrect: true },
        { answerText: "Bush", isCorrect: false },
        { answerText: "Flower", isCorrect: false },
        { answerText: "Grass", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (answer, index) => {
    setSelectedAnswer(index);
    if (answer.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const percentage = (score / questions.length) * 100;

  return (
    <div className="flex justify-center min-h-screen text-white bg-[#121212]">
      <div className="flex flex-col gap-7 mt-36">
        <h1 className="text-3xl">Module 1 - Lesson 1 - Vocabulary Quiz</h1>
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl shadow-neutral-950 max-w-lg w-full">
          {showScore ? (
            <div className="flex flex-col gap-10">
              <div className="text-center text-2xl font-semibold ">
                <div>
                  You got{" "}
                  <span
                    className={`${percentage < 50 ? "text-red-600" : "text-green-600"}`}
                  >
                    {percentage}%
                  </span>{" "}
                  in this quiz
                </div>
                {percentage < 50 ? (
                  <div className="text-red-600">Failed</div>
                ) : (
                  <div className="text-green-600">Passed</div>
                )}
              </div>
              <button
                onClick={() =>
                  percentage < 50
                    ? window.location.reload()
                    : navigate("/english-a2/module1/lesson1/vocab-test")
                }
                className="flex flex-row justify-between items-center gap-3 mx-auto w-fit bg-[#42a5f5] hover:opacity-80 transition-all cursor-pointer px-6 py-4 rounded-2xl text-lg"
              >
                {percentage < 50 ? (
                  <p>Repeat the quiz</p>
                ) : (
                  <p>Back to Lesson 1</p>
                )}

                <KeyboardArrowRightIcon />
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4 text-lg font-medium">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="mb-4 text-xl">
                {questions[currentQuestion].questionText}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {questions[currentQuestion].answerOptions.map(
                  (answer, index) => {
                    const isCorrect = answer.isCorrect;
                    const isSelected = selectedAnswer === index;
                    const isWrong = isSelected && !isCorrect;
                    const isCorrectAnswer =
                      !isSelected && isCorrect && selectedAnswer !== null;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(answer, index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full py-2 rounded-lg text-white text-center transition-all
                      ${isSelected ? (isCorrect ? "bg-green-500" : "bg-red-500") : "bg-blue-500"}
                      ${isCorrectAnswer ? "bg-green-500" : ""}
                      ${selectedAnswer !== null ? "cursor-not-allowed" : "hover:bg-blue-600"}`}
                      >
                        {answer.answerText}
                      </button>
                    );
                  }
                )}
              </div>
              {selectedAnswer !== null && (
                <button
                  onClick={handleNextQuestion}
                  className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800"
                >
                  Next
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VocabTest1;
