import { BiMaleFemale } from "react-icons/bi";

import { DoughnutChart } from "../common/Charts";

const GenderRatio = () => {
	return (
		<section className="relative pt-5 pb-2 lg:h-full w-full xl:max-h-[24rem] xl:h-full 2xl:max-h-[36rem] flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5 pb-4 border-b">
				<h2 className="font-semibold">Gender Ratio</h2>
			</div>

			<div className="relative px-5 h-full flex items-center justify-center">
				<DoughnutChart
					labels={["Male", "Female"]}
					data={[12, 8]}
					backgroundColor={["#3b82f6", "#f43f5e"]}
					cutout={90}
				/>
			</div>

			<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-zinc-500">
				<BiMaleFemale />
			</span>
		</section>
	);
};

export default GenderRatio;
