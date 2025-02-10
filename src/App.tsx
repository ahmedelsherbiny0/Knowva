import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { isLoggedIn } from "../Atoms/atoms";
import NoPage from "../Components/NoPage";
import VocabTest1 from "../Components/VocabTest1";
import Home from "../Pages/Home";
import DashboardLayoutBasic from "../Pages/Dashboard";
import UserProfile from "../Pages/UserProfile";
import EnrolledCourses from "../Pages/EnrolledCourses";
import HelpCenter from "../Pages/HelpCenter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardLayoutBasic />} />
          <Route path="home" element={<Home />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="enrolled-courses" element={<EnrolledCourses />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="english-a2/module1/lesson1/vocab-test"
            element={<VocabTest1 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return(

    <>
    <Outlet />;
  </>
  )
};

export default App;
