import data from "../../data/data.json";

const CategoryItem = ({ item, value, color }) => {
	return (
		<div className="flex items-center gap-5 justify-between">
			<p className="capitalize font-medium">{item}</p>
			<div className="flex items-center justify-end gap-2 w-full">
				<div className="w-36 h-2.5 relative">
					<span className="bg-black/5 h-full w-full rounded-full block" />
					<span
						style={{
							background: `${color}`,
							width: `${value}%`,
						}}
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
		<section className="pt-5 pb-2 lg:h-full w-full xl:max-h-[24rem] xl:h-full 2xl:max-h-max flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-4 border-b">
				<h2 className="font-semibold">Inventory</h2>
			</div>

			<div className="flex flex-col text-sm gap-6 px-5 h-full overflow-y-auto">
				{data.categories.map((category) => (
					<CategoryItem
						key={category.item}
						item={category.item}
						value={category.value}
						color={`hsl(${category.value * 92},${category.value}%,50%)`}
					/>
				))}
			</div>
		</section>
	);
};

export default Inventory;
