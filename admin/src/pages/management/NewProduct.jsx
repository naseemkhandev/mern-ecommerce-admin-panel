import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TbPhotoPlus } from "react-icons/tb";

import data from "../../data/data.json";
import { selectTheme } from "../../store/slices/themeSlice";
import { useSelector } from "react-redux";

const NewProduct = () => {
	const { pathname } = useLocation();
	const { id } = useParams();

	const theme = useSelector(selectTheme);

	const [newProduct, setNewProduct] = useState({
		name: "",
		photo: "",
		price: "",
		stock: "",
	});

	useEffect(() => {
		setNewProduct(
			pathname.includes("new")
				? newProduct
				: data.products.find((item) => item.action === id)
		);
	}, [id, pathname, newProduct]);

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "stock" || name === "price") {
			setNewProduct((prev) => ({ ...prev, [name]: Math.max(0, +value) }));
		} else {
			setNewProduct((prev) => ({ ...prev, [name]: value }));
		}

		if (name === "photo" && files && files.length > 0) {
			const reader = new FileReader();

			reader.readAsDataURL(files[0]);

			reader.onloadend = () => {
				if (typeof reader.result === "string") {
					setNewProduct((prev) => ({ ...prev, photo: reader.result }));
				}
			};
		}
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
				<h2 className="font-semibold text-lg">
					{pathname.includes("new") ? "Add New Product" : "Edit Product"}
				</h2>
			</div>

			<div className="mt-2">
				<form className="px-5 flex flex-col gap-5">
					<div
						className={`relative w-full flex flex-col items-center justify-center gap-3 rounded-lg 
						${
							newProduct.photo
								? ""
								: "px-4 sm:px-10 py-20 border-secondary border-dashed border-2 text-center"
						}`}
					>
						<input
							type="file"
							name="photo"
							accept="image/png, image/pdf, image/jpg, image/jpeg"
							onChange={handleChange}
							className="absolute w-full z-10 h-full opacity-0 top-0 left-0 cursor-pointer"
						/>
						{newProduct.photo ? (
							<img
								src={newProduct.photo}
								alt={newProduct.name}
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

					{newProduct?.action && (
						<div className="flex flex-col gap-1 w-full">
							<label
								htmlFor="name"
								className="select-none font-medium text-sm pl-1"
							>
								Product ID:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Enter product name"
								value={newProduct?.action}
								onChange={handleChange}
								disabled
								className={`border disabled:cursor-not-allowed px-3 py-3.5 rounded-lg outline-none 2xl:text-base md:text-[.9rem] text-sm ${
									theme === "dark"
										? "disabled:opacity-15"
										: "disabled:opacity-50"
								}`}
							/>
						</div>
					)}
					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="name"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Product Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter product name"
							value={newProduct.name}
							onChange={handleChange}
							className={`border px-3 py-3.5 rounded-lg focus-within:border-indigo-300 outline-none 2xl:text-base md:text-[.9rem] text-sm ${
								theme === "dark" && "bg-darkColor text-white"
							}`}
						/>
					</div>

					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="price"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Product Price:
						</label>
						<input
							type="number"
							id="price"
							name="price"
							placeholder="Enter product price"
							value={newProduct.price}
							onChange={handleChange}
							className={`border px-3 py-3.5 rounded-lg focus-within:border-indigo-300 outline-none 2xl:text-base text-sm
							${theme === "dark" && "bg-darkColor text-white"}
							`}
						/>
					</div>

					<div className="flex flex-col gap-1 w-full">
						<label
							htmlFor="stock"
							className="select-none cursor-pointer font-medium text-sm pl-1"
						>
							Product Stock:
						</label>
						<input
							type="number"
							id="stock"
							name="stock"
							placeholder="Enter product stock"
							value={newProduct.stock}
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
						add product
					</button>
				</form>
			</div>
		</section>
	);
};

export default NewProduct;
