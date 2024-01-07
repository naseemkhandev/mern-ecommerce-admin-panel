import { useSelector } from "react-redux";

import { selectTheme } from "../../store/slices/DarkModeSlice";
import { TbPhotoPlus } from "react-icons/tb";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
	const theme = useSelector(selectTheme);
	const { id } = useParams();
	const [customer, setCustomer] = useState({
		photo: "",
		name: "",
		email: "",
		gender: "",
		isAdmin: "",
	});

	useEffect(() => {
		setCustomer(data.customers.find((item) => item.action === id));
	}, [customer, id]);

	const handleChange = (e) => {
		const { value, name } = e.target;
		setCustomer({ ...customer, [name]: value });
	};

	return (
		<section
			className={`py-6 transition-all duration-500 w-full flex flex-col gap-4 rounded-lg ${
				theme === "dark"
					? "bg-darkColor text-white"
					: "bg-white shadow-lg shadow-slate-400/5"
			}
	`}
		>
			<div className="px-5 pb-5 border-b">
				<h2 className="font-semibold text-lg">Edit Customer</h2>
			</div>

			<div className="mt-2">
				<form className="px-5 flex flex-col gap-5">
					<div
						className={`relative w-full flex flex-col items-center justify-center gap-3 rounded-lg 
						${
							customer.photo
								? ""
								: "px-5 sm:px-10 py-20 border-secondary border-dashed border-2 text-center"
						}`}
					>
						<input
							type="file"
							name="photo"
							accept="image/png, image/pdf, image/jpg, image/jpeg"
							onChange={handleChange}
							className="absolute w-full z-10 h-full opacity-0 top-0 left-0 cursor-pointer"
						/>
						{customer.photo ? (
							<img
								src={customer.photo}
								alt={customer.name}
								className="w-full h-[18.5rem] object-center rounded-lg object-contain"
							/>
						) : (
							<>
								<span
									className={`text-[3.5rem] md:text-6xl ${
										theme !== "dark" && "opacity-60"
									}`}
								>
									<TbPhotoPlus />
								</span>
								<h4 className="font-semibold text-indigo-500 gilroy-semibold">
									Drag your image here, or Browse
								</h4>
								<p className="text-dark-gray">Support JPG, PNG, PDF</p>
							</>
						)}
					</div>

					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="name"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Your Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
							value={customer.name}
							onChange={handleChange}
							className={`border px-3 py-3.5 rounded-lg focus-within:border-indigo-300 outline-none 2xl:text-base md:text-[.9rem] text-sm ${
								theme === "dark" && "bg-darkColor text-white"
							}`}
						/>
					</div>

					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="email"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Your Email:
						</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="Enter your email"
							value={customer.email}
							onChange={handleChange}
							className={`border lowercase px-3 py-3.5 rounded-lg focus-within:border-indigo-300 outline-none 2xl:text-base text-sm
							${theme === "dark" && "bg-darkColor text-white"}
							`}
						/>
					</div>

					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="gender"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Your Gender:
						</label>
						<input
							type="text"
							id="gender"
							name="gender"
							placeholder="Enter your gender"
							value={customer.gender}
							onChange={handleChange}
							className={`border px-3 py-3.5 rounded-lg focus-within:border-indigo-300 outline-none 2xl:text-base text-sm ${
								theme === "dark" && "bg-darkColor text-white"
							}`}
						/>
					</div>

					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="role"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Your Role:
						</label>
						<input
							type="text"
							id="role"
							name="role"
							placeholder="Enter your Role"
							value={customer.role}
							onChange={handleChange}
							className={`border px-3 py-3.5 rounded-lg focus-within:border-indigo-300 outline-none 2xl:text-base text-sm ${
								theme === "dark" && "bg-darkColor text-white"
							}`}
						/>
					</div>

					<button
						type="submit"
						className="bg-indigo-600 text-white hover:bg-indigo-700 py-3 px-5 rounded-lg capitalize"
					>
						Update
					</button>
				</form>
			</div>
		</section>
	);
};

export default EditCustomer;
