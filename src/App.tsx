import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { isLoggedIn } from "../Atoms/atoms";
import { useAtom } from "jotai";
import Welcome from "../Pages/Welcome";
import Home from "../Pages/Home";
import NoPage from "../Components/NoPage"
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useAtom(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const Layout = () => {
  const [loggedIn, setLoggedIn] = useAtom(isLoggedIn);
  return (
    <>

      <Outlet />
    </>
  );
};

export default App;
