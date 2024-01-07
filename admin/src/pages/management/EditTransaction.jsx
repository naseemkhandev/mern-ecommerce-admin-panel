import { useSelector } from "react-redux";

import { selectTheme } from "../../store/slices/DarkModeSlice";

const EditTransaction = () => {
	const theme = useSelector(selectTheme);

	const status = "shipped";

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
				<h2 className="font-semibold text-lg">Edit Transaction</h2>
			</div>

			<div className="mt-2">
				<div className="px-5 flex gap-8">
					<div className="flex-1 w-full flex flex-col gap-5">
						<h2 className="uppercase text-center font-medium text-xl">
							order item
						</h2>

						<div className="w-full min-h-96 h-full">
							<img
								src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"
								alt="product"
								className="w-full rounded-lg mx-auto h-96 object-cover"
							/>
						</div>

						<div className="flex flex-col justify-between h-full gap-2">
							<h2 className="font-medium capitalize text-xl hover:underline hover:underline-offset-4 select-none cursor-pointer hover:text-indigo-600">
								nike shoes
							</h2>

							<div className="flex items-center justify-between">
								<p className="font-semibold">Total:</p>
								<p>
									$2000 x 4 <span className="font-semibold"> = $8000</span>
								</p>
							</div>
						</div>
					</div>

					<div className="flex-1 w-full flex flex-col gap-5">
						<h2 className="uppercase text-center font-medium text-xl">
							order info
						</h2>

						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-1">
								<h2 className="font-medium capitalize mb-1">product info:</h2>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium">ID: </span>
									<span>kalsfsjd903</span>
								</p>
								<p className="flex items-center capitalize gap-1 text-sm 2xl:text-base">
									<span className="font-medium">Name: </span>
									<span>puma shoes</span>
								</p>
							</div>

							<div className="flex flex-col gap-1">
								<h2 className="font-medium capitalize mb-1">user info:</h2>
								<p className="flex items-center capitalize gap-1 text-sm 2xl:text-base">
									<span className="font-medium">Name: </span>
									<span>naseem khan</span>
								</p>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium capitalize">Address:</span>
									<span>77 street no.9, Newyork, US 1293423</span>
								</p>
							</div>

							<div className="flex flex-col gap-1">
								<h2 className="font-medium capitalize mb-1">account info:</h2>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium capitalize">subtotal: </span>
									<span>$4000</span>
								</p>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium capitalize">
										shipping charges:
									</span>
									<span>$1.00</span>
								</p>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium capitalize">tax: </span>
									<span>$200.00</span>
								</p>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium capitalize">discount: </span>
									<span>$1200.00</span>
								</p>
								<p className="flex items-center gap-1 text-sm 2xl:text-base">
									<span className="font-medium capitalize">total: </span>
									<span>$30,000.00</span>
								</p>
							</div>

							<div className="flex flex-col gap-1">
								<h2 className="font-medium capitalize mb-1">status info:</h2>
								<p className="flex items-center capitalize gap-1 text-sm 2xl:text-base">
									<span className="font-medium">status: </span>
									<span
										className={`${
											status === "shipped"
												? "bg-indigo-500"
												: status === "delivered"
												? "bg-green-500"
												: "bg-red-500"
										} text-white px-4 py-1 rounded`}
									>
										{status}
									</span>
								</p>
							</div>

							<button
								type="button"
								className="capitalize p-4 text-sm w-full hover:bg-indigo-700 bg-indigo-600 text-white rounded-lg cursor-pointer font-medium"
							>
								process status
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EditTransaction;
