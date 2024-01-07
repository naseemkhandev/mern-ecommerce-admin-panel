import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { selectTheme } from "../../store/slices/DarkModeSlice";
import { useSelector } from "react-redux";

const Card = ({ icon, iconBg, title, amount, value, percent, barColor }) => {
	const theme = useSelector(selectTheme);

	return (
		<div
			className={`p-5 flex flex-col gap-3 transition-all duration-500 rounded-lg select-none cursor-text ${
				theme === "dark"
					? "bg-darkColor text-white placeholder:text-white"
					: "bg-white shadow-lg shadow-slate-400/5"
			}`}
		>
			<span
				className={`cursor-pointer text-white p-2.5 rounded-full text-xl 2xl:text-2xl w-fit ${iconBg}`}
			>
				{icon}
			</span>

			<div className="flex items-center gap-1 transition-all duration-500 justify-between">
				<div className="flex flex-col gap-1">
					<h3
						className={`text-2xl font-semibold ${
							theme === "dark" ? "text-indigo-500" : "text-indigo-900"
						}`}
					>
						{amount && "$"}
						{value}
					</h3>
					<p
						className={`capitalize text-sm 2xl:text-base font-medium ${
							theme === "dark" ? "text-white" : "text-black/50"
						}`}
					>
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
						background: `conic-gradient(${barColor} ${percent}%, ${
							theme === "dark" ? "#111C44" : "white"
						} 0)`,
					}}
					className="transition-all duration-500 w-24 sm:w-28 xl:w-24 2xl:w-28 aspect-square rounded-full flex items-center justify-center"
				>
					<p
						style={{ color: barColor }}
						className={`font-semibold w-[87%] aspect-square flex items-center justify-center z-[1] rounded-full 
						${theme === "dark" ? "bg-darkColor" : "bg-white"}
						`}
					>
						{percent > 20 ? `+${percent}` : `-${percent}`}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
