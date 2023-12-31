const TopTransaction = () => {
	return (
		<section className="pt-5 pb-2 lg:h-full w-full xl:max-h-[24rem] xl:h-full 2xl:max-h-max flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-4 border-b">
				<h2 className="font-semibold">Top Transaction</h2>
			</div>

			<div className="flex flex-col gap-6 px-5 h-full overflow-y-auto"></div>
		</section>
	);
};

export default TopTransaction;
