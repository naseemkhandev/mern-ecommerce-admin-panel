import { FiSearch } from "react-icons/fi";

const Search = ({ className }) => {
	return (
		<div className="relative">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search here..."
				className={`border-none outline-none bg-[#F7F8F9] py-3 text-[.9rem] 2xl:text-base pr-4 pl-10 w-72 rounded-md ${className}`}
			/>
			<span className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-600 text-xl 2xl:text-2xl">
				<FiSearch />
			</span>
		</div>
	);
};

export default Search;
