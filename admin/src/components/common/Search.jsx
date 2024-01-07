import { FiSearch } from "react-icons/fi";
import { selectTheme } from "../../store/slices/themeSlice";
import { useSelector } from "react-redux";

const Search = ({ className }) => {
	const theme = useSelector(selectTheme);

	return (
		<div className="relative">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search here..."
				className={`border-none outline-none py-3 text-[.9rem] 2xl:text-base pr-4 pl-10 w-72 rounded-md ${className} ${
					theme === "dark" ? "bg-darkBg text-white placeholder:text-white" : "bg-[#F7F8F9]"
				}`}
			/>
			<span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-600 text-xl 2xl:text-2xl">
				<FiSearch />
			</span>
		</div>
	);
};

export default Search;
