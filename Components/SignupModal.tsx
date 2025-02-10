import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "@iconify/react";
import Input from "./Input";
import { countries } from "../src/Countries";
import { useNavigate, Link } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import {
  isLoggedIn,
  name,
  email,
  password,
  gender,
  age,
  country,
} from "../Atoms/atoms";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};



export default function SignupModal() {
  const setLoggedIn = useSetAtom(isLoggedIn);
  const [Name, setName] = useAtom(name);
  const [Email, setEmail] = useAtom(email);
  const [Password, setPassword] = useAtom(password);
  const [Gender, setGender] = useAtom(gender);
  const [Age, setAge] = useAtom(age);
  const [Country, setCountry] = useAtom(country);

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!Name || !Email || !Password || !Gender || !Age || !Country) {
      setError("Please complete all fields.");
      return;
    }

    try {
      const response = await fetch("//localhost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          email: Email,
          password: Password,
          gender: Gender,
          age: Age,
          country: Country,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please check your credentials.");
      }

      const data = await response.json();
      const { token } = data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("name", Name);
      localStorage.setItem("email", Email);
      localStorage.setItem("gender", Gender);
      localStorage.setItem("age", Age);
      localStorage.setItem("country", Country);
      localStorage.setItem("isLoggedIn", "true");

      setSuccess("Login successful! Redirecting to Homepage...");

      setError("");
      setName("");
      setEmail("");
      setPassword("");
      setLoggedIn(true);

      navigate("/");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during login.");
    }
  };

  return (
    <div>
      <button
        className="cursor-pointer text-white bg-[#003366] w-48 rounded p-1 hover:opacity-90 transition"
        onClick={handleOpen}
      >
        Signup
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col justify-center items-center w-md p-8 bg-white rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icon
            icon="majesticons:close-circle"
            className="absolute top-6 right-6 w-6 h-6 text-[#003366] hover:opacity-90 transition cursor-pointer"
            onClick={handleClose}
          />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome
          </Typography> */}
          <h2 className="text-4xl font-bold text-center mt-3 mb-3 text-gray-800">
            Signup
          </h2>
          <form
            className="flex flex-col items-center w-[90%] mx-auto max-w-[500px]"
            onSubmit={handleLogin}
          >
            <div className="mb-3 w-full">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Write your name"
              ></Input>
            </div>
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              ></Input>
            </div>
            <div className="mb-3 w-full">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              ></Input>
            </div>
            <div className="mb-3 w-full">
              <label
                htmlFor="age"
                className="block text-gray-700 font-medium mb-2"
              >
                Age
              </label>
              <Input
                type="number"
                id="age"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              ></Input>
            </div>
            <div className="mb-3 w-full">
              <h2 className="text-gray-700 font-medium mb-2">
                Select Country:
              </h2>
              <select
                className="w-full px-4 py-2 bg-gray-200 rounded-lg outline-gray-400 transition"
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 w-full flex justify-between">
              <h2 className="text-gray-700 font-medium mb-2">
                Select your gender:
              </h2>
              <div className="flex gap-5">
                <div className="flex">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={Gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label
                    htmlFor="male"
                    className="flex justify-center items-center"
                  >
                    Male
                  </label>
                </div>
                <div className="flex">
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={Gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label
                    htmlFor="female"
                    className="flex justify-center items-center"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            <button className="cursor-pointer text-white bg-[#003366] mt-5 w-48 rounded p-1 hover:opacity-90 transition">
              Signup
            </button>
            {error && (
              <p className="text-[#cb2f2f] text-center mt-4">{error}</p>
            )}
            {success && (
              <p className="text-[#28a745] text-center mt-4">{success}</p>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
}
