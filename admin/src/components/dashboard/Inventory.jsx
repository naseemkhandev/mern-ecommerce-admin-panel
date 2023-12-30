const CategoryItem = ({ item, value, color }) => {
	return (
		<div className="flex items-center gap-5 justify-between">
			<p className="capitalize font-medium">{item}</p>
			<div className="flex items-center justify-end gap-2 w-full">
				<div className="w-36 h-2.5 relative">
					<span className="bg-black/5 h-full w-full rounded-full block" />
					<span
						style={{ background: `${color}`, width: `${value}%` }}
						className="h-full rounded-full block absolute top-0 left-0"
					/>
				</div>
				<p>{value}%</p>
			</div>
		</div>
	);
};

const Inventory = () => {
	return (
		<section className="p-5 flex flex-col gap-8 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg cursor-text">
			<div>
				<h2 className="font-semibold">Inventory</h2>
			</div>

			<div className="flex flex-col gap-6">
				<CategoryItem item="laptop" value={80} color="#06b6d4" />
				<CategoryItem item="shoes" value={54} color="#2563eb" />
				<CategoryItem item="cameras" value={72} color="#e11d48" />
				<CategoryItem item="jeans" value={30} color="#7c3aed" />
				<CategoryItem item="mobiles" value={90} color="#c026d3" />
			</div>
		</section>
	);
};

export default Inventory;
