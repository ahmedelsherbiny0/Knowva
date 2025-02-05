import { atom } from 'jotai';

export const isLoggedIn = atom(localStorage.getItem("isLoggedIn") === "true" ? true : false);

// export const firstName = atom("")