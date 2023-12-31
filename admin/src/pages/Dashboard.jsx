import { HiMiniChartBarSquare } from "react-icons/hi2";
import { FaUserPlus } from "react-icons/fa6";
import { RiShoppingBagFill } from "react-icons/ri";

import {
	Card,
	GenderRatio,
	Inventory,
	RevenueTransaction,
	TopTransaction,
} from "../components/dashboard";

const Dashboard = () => {
	return (
		<main className="flex flex-col gap-3">
			<section className="rounded-md grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
				<Card
					icon={<HiMiniChartBarSquare />}
					iconBg="bg-orange-500"
					title="revenue"
					value={5000}
					amount={true}
					percent={46}
					barColor="#f97316"
				/>
				<Card
					icon={<FaUserPlus />}
					iconBg="bg-purple-500"
					title="users"
					value={400}
					percent={14}
					barColor="#a855f7"
				/>
				<Card
					icon={<RiShoppingBagFill />}
					iconBg="bg-cyan-500"
					title="transactions"
					value={23000}
					percent={80}
					barColor="#06b6d4"
				/>
				<Card
					icon={<RiShoppingBagFill />}
					iconBg="bg-blue-500"
					title="products"
					value={1000}
					percent={72}
					barColor="#3b82f6"
				/>
			</section>

			<div className="flex flex-col xl:flex-row w-full gap-3">
				<div className="flex-[2] w-full">
					<RevenueTransaction />
				</div>
				<div className="flex-[1] w-full">
					<Inventory />
				</div>
			</div>

			<div className="flex flex-col xl:flex-row w-full gap-3">
				<div className="flex-[1] w-full">
					<GenderRatio />
				</div>
				<div className="flex-[2] w-full">
					<TopTransaction />
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
