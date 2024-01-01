import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import data from "../data/data.json";

const Products = () => {
	const columns = ["photo", "name", "price", "stock", "action"];

	return (
		<section className="pt-4 pb-2 w-full flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-3 border-b flex items-center justify-between">
				<h2 className="font-semibold text-lg">All Products</h2>
				<Link
					to="/admin/product/new"
					className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg"
				>
					<span className="text-xl">
						<IoIosAddCircle />
					</span>
					<span>Add New</span>
				</Link>
			</div>

			<div className="flex flex-col gap-6 h-full overflow-auto">
				<table className="w-full select-none cursor-text text-left">
					<thead>
						<tr>
							{columns.map((column) => (
								<th
									key={column}
									className="font-semibold capitalize p-3 text-zinc-700"
								>
									{column}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{data.products.slice(0,8).map((item) => (
							<tr key={item.action} className="hover:bg-slate-300/10 w-full">
								<td className="py-1.5 px-3 text-sm border-b">
									<img
										src={item.photo}
										alt={item.name.slice(0, 10) + "..."}
										className="2xl:w-20 w-16 aspect-square object-cover object-center"
									/>
								</td>
								<td className="py-1.5 px-3 text-sm border-b">
									{item.name.length > 40
										? item.name.slice(0, 40) + "..."
										: item.name}
								</td>
								<td className="py-1.5 px-3 text-sm border-b">{item.price}</td>
								<td className="py-1.5 px-3 text-sm border-b">{item.stock}</td>
								<td className="border-b">
									<span className="flex items-center gap-2">
										<Link
											to={`/admin/product/${item.action}`}
											className="text-base p-2.5 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20"
										>
											<FiEdit />
										</Link>
										<Link
											to={`/admin/product/${item.action}`}
											className="text-base p-2.5 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20"
										>
											<FaTrashCan />
										</Link>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Products;
