import { BarChart } from "../common/Charts";

const RevenueTransaction = () => {
	return (
		<section className="pt-5 pb-2 lg:h-full w-full xl:max-h-[24rem] xl:h-full 2xl:max-h-max flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-4 border-b">
				<h2 className="font-semibold">Revenue & Transaction</h2>
			</div>

			<div className="flex flex-col gap-6 px-5 h-full overflow-y-auto w-full">
				<BarChart
					data_1={[300, 400, 123, 433, 500, 903, 239, 129, 923, 432, 733, 732]}
					data_2={[600, 100, 923, 123, 210, 123, 439, 929, 802, 823, 823, 212]}
					title_1="Revenue"
					title_2="Transaction"
					bgColor_1="rgb(0,115,255)"
					bgColor_2="rgba(53,162,235,0.8)"
				/>
			</div>
		</section>
	);
};

export default RevenueTransaction;
