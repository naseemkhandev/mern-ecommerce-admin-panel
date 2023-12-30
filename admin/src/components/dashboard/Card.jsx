import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Card = ({ icon, iconBg, title, amount, value, percent, barColor }) => {
	return (
		<div className="p-5 flex flex-col gap-3 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg select-none cursor-text">
			<span
				className={`cursor-pointer text-white p-2.5 rounded-full text-xl 2xl:text-2xl w-fit ${iconBg}`}
			>
				{icon}
			</span>

			<div className="flex items-center gap-1 justify-between">
				<div className="flex flex-col gap-1">
					<h3 className="text-2xl text-blue-900 font-semibold">
						{amount && "$"}{value}
					</h3>
					<p className="text-black/50 capitalize text-sm 2xl:text-base font-medium">
						{title}
					</p>

					<div
						className={`flex items-center ${
							percent > 20 ? "text-green-500" : "text-red-500"
						}`}
					>
						<span className="text-xl">
							{percent > 20 ? <HiTrendingUp /> : <HiTrendingDown />}
						</span>
						<span className="font-medium">
							{percent > 20 ? `+${percent}` : `-${percent}`}%
						</span>
					</div>
				</div>

				<div
					style={{
						background: `conic-gradient(${barColor} ${percent}%,white 0)`,
					}}
					className="w-24 sm:w-28 xl:w-24 2xl:w-28 aspect-square rounded-full flex items-center justify-center"
				>
					<p
						style={{ color: barColor }}
						className="font-semibold w-[90%] aspect-square flex items-center justify-center z-[1] bg-white rounded-full"
					>
						{percent > 20 ? `+${percent}` : `-${percent}`}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
