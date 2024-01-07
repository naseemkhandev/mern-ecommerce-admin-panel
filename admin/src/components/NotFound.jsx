import { Link, useNavigate } from "react-router-dom";

import { IoInformationOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { selectTheme } from "../store/slices/DarkModeSlice";
import { useSelector } from "react-redux";

const PageNotFound = () => {
	const navigate = useNavigate();
	const theme = useSelector(selectTheme);

	return (
		<section
			className={`z-[1000] fixed top-0 left-0 w-full h-screen ${
				theme === "dark" ? "bg-darkBg" : "bg-white"
			}`}
		>
			<div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
				<div className="flex flex-col items-center max-w-sm mx-auto text-center">
					<p
						className={`p-2 text-3xl font-medium rounded-full ${
							theme === "dark"
								? "text-white bg-darkColor"
								: "bg-indigo-600/5 text-indigo-600"
						}`}
					>
						<IoInformationOutline />
					</p>
					<h1
						className={`mt-3 text-2xl font-semibold md:text-3xl ${
							theme === "dark" ? "text-white" : "text-gray-800"
						}`}
					>
						Page not found
					</h1>
					<p
						className={`mt-4 ${
							theme === "dark" ? "text-gray-400" : "text-gray-500"
						}`}
					>
						The page you are looking for doesn&apos;t exist. Here are some
						helpful links:
					</p>
					<div className="flex md:items-center flex-col md:flex-row w-full mt-6 gap-x-3 shrink-0 gap-2.5">
						<button
							onClick={() => navigate(-1)}
							className={`flex items-center justify-center md:w-1/2 px-6 py-3.5 text-sm transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto w-full ${
								theme === "dark"
									? "text-white hover:bg-darkColor border-white/30"
									: "text-indigo-600 hover:bg-indigo-600/5"
							}`}
						>
							<BsArrowLeft className="text-lg" />
							<span>Go back</span>
						</button>

						<Link
							to={"/"}
							className="w-full md:w-1/2 px-6 py-3.5 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-600 rounded-lg shrink-0 sm:w-auto hover:bg-indigo-500"
						>
							Take me home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageNotFound;
