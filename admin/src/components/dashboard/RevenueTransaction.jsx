import { BarChart } from "../common/Charts";

const RevenueTransaction = () => {
	return (
		<section className="p-5 flex flex-col gap-5 h-full bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg cursor-text">
			<div>
				<h2 className="font-semibold">Revenue & Transaction</h2>
			</div>

			<BarChart
				data_1={[300, 400, 123, 433, 500, 903, 239, 129, 923, 432]}
				data_2={[600, 100, 923, 123, 210, 123, 439, 929, 802, 823]}
				title_1="Revenue"
				title_2="Transaction"
				bgColor_1="rgb(0,115,255)"
				bgColor_2="rgba(53,162,235,0.8)"
			/>
		</section>
	);
};

export default RevenueTransaction;
