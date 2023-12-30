import { HiMiniChartBarSquare } from "react-icons/hi2";
import { FaUserPlus } from "react-icons/fa6";
import { RiShoppingBagFill } from "react-icons/ri";

import Card from "../components/dashboard/Card";

const Dashboard = () => {
	return (
		<main>
			<div className="rounded-md grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
				<Card
					icon={<HiMiniChartBarSquare />}
					iconBg="bg-orange-500"
					title="revenue"
					amount="$5000"
					percent="46"
					barColor="#f97316"
				/>
				<Card
					icon={<FaUserPlus />}
					iconBg="bg-purple-500"
					title="users"
					amount="400"
					percent="14"
					barColor="#a855f7"
				/>
				<Card
					icon={<RiShoppingBagFill />}
					iconBg="bg-cyan-500"
					title="transactions"
					amount="23000"
					percent="80"
					barColor="#06b6d4"
				/>
				<Card
					icon={<RiShoppingBagFill />}
					iconBg="bg-blue-500"
					title="products"
					amount="1000"
					percent="30"
					barColor="#3b82f6"
				/>
			</div>
		</main>
	);
};

export default Dashboard;
