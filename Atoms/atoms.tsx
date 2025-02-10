import { atom } from "jotai";

export const isLoggedIn = atom(true);
// export const isLoggedIn = atom(
//   localStorage.getItem("isLoggedIn") === "true" ? true : false
// );

export const name = atom(localStorage.getItem("name") || "");
export const email = atom(localStorage.getItem("email") || "");
export const password = atom(localStorage.getItem("password") || "");
export const gender = atom(localStorage.getItem("gender") || "");
export const age = atom(localStorage.getItem("age") || "");
export const lang = atom(localStorage.getItem("lang") || "");
