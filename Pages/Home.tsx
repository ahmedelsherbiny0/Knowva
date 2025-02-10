import React from "react";
import TextField from "@mui/material/TextField";

function Home() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl px-8">
        <div
          className="w-full h-[300px] bg-black bg-opacity-20 rounded-2xl 
                     flex flex-col justify-center items-center gap-5 p-8 z-10"
        >
          <h1 className="text-white text-2xl font-semibold">
            What do you want to learn?
          </h1>
          <TextField
            id="outlined-multiline-flexible"
            label="Search"
            multiline
            maxRows={2}
            className="w-64 bg-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
