import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { isLoggedIn as isLoggedInAtom } from "../Atoms/atoms";
import NoPage from "../Components/NoPage";
import VocabTest1 from "../Components/VocabTest1";
import Home from "../Pages/Home";
import DashboardLayoutBasic from "../Pages/Dashboard";
import UserProfile from "../Pages/UserProfile";
import EnrolledCourses from "../Pages/EnrolledCourses";
import HelpCenter from "../Pages/HelpCenter";
import Welcome from "../Pages/Welcome";
import "./App.css";

function App() {
	const [isLoggedIn] = useAtom(isLoggedInAtom);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{isLoggedIn ? (
						<>
							<Route index element={<DashboardLayoutBasic />} />
							<Route path="home" element={<Home />} />
							<Route path="user-profile" element={<UserProfile />} />
							<Route path="enrolled-courses" element={<EnrolledCourses />} />
							<Route path="help-center" element={<HelpCenter />} />
							<Route
								path="english-a2/module1/lesson1/vocab-test"
								element={<VocabTest1 />}
							/>
						</>
					) : (
						<Route path="welcome" element={<Welcome />} />
					)}
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const Layout = () => {
	return <Outlet />;
};

export default App;
