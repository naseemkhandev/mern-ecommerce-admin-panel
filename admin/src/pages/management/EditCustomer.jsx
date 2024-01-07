import { useSelector } from "react-redux";

import { selectTheme } from "../../store/slices/themeSlice";

const EditCustomer = () => {
	const theme = useSelector(selectTheme);

	return (
		<section
			className={`py-6 w-full flex flex-col gap-4 rounded-lg ${
				theme === "dark"
					? "bg-darkColor text-white"
					: "bg-white shadow-lg shadow-slate-400/5"
			}
	`}
		>
			<div className="px-5 pb-5 border-b">
				<h2 className="font-semibold text-lg">Edit Customer</h2>
			</div>
		</section>
	);
};

export default EditCustomer;
