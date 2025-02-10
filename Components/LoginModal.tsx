import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "@iconify/react";
import Input from "./Input";
import { useNavigate, Link } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import { isLoggedIn, email, password } from "../Atoms/atoms";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function LoginModal() {
  const setLoggedIn = useSetAtom(isLoggedIn);
  const [Email, setEmail] = useAtom(email);
  const [Password, setPassword] = useAtom(password);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!Email || !Password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("//localhost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      const { token, firstName, lastName } = data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("email", Email);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("isLoggedIn", "true");
      setSuccess("Login successful! Redirecting to Homepage...");
      setError("");

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
        Login
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="flex flex-col justify-center items-center relative w-md p-8 bg-white rounded-2xl"
          sx={style}
        >
          <Icon
            icon="majesticons:close-circle"
            className="absolute top-6 right-6 w-6 h-6 text-[#003366] hover:opacity-90 transition cursor-pointer"
            onClick={handleClose}
          ></Icon>
          <Icon
            icon="tdesign:education"
            className={`w-16 h-16 text-[#003366]`}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome Back
          </Typography>
          <h2 className="text-4xl font-bold text-center my-6 text-gray-800">
            Login
          </h2>
          <form
            className="flex flex-col items-center w-[90%] mx-auto max-w-[500px]"
            onSubmit={handleLogin}
          >
            <div className="mb-4 w-full">
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
            <button className="cursor-pointer text-white bg-[#003366] mt-5 w-48 rounded p-1 hover:opacity-90 transition">
              Login
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
