import { BiSolidDashboard } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { BiLineChart, BiSolidCoupon } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import { TbCoinRupee, TbCoinRupeeFilled } from "react-icons/tb";

import {
	BsBarChart,
	BsBarChartFill,
	BsFillHandbagFill,
	BsFillPieChartFill,
	BsHandbag,
	BsPieChart,
	BsStopwatch,
	BsStopwatchFill,
} from "react-icons/bs";
import {
	HiMiniBanknotes,
	HiOutlineBanknotes,
	HiOutlineUsers,
	HiUsers,
} from "react-icons/hi2";

export const sidebar = [
	{
		title: "dashboard",
		links: [
			{
				icon: RxDashboard,
				activeIcon: BiSolidDashboard,
				label: "dashboard",
				path: "/admin/dashboard",
			},
			{
				icon: BsHandbag,
				activeIcon: BsFillHandbagFill,
				label: "products",
				path: "/admin/product",
			},
			{
				icon: HiOutlineUsers,
				activeIcon: HiUsers,
				label: "customers",
				path: "/admin/customer",
			},
			{
				icon: HiOutlineBanknotes,
				activeIcon: HiMiniBanknotes,
				label: "transactions",
				path: "/admin/transaction",
			},
		],
	},
	{
		title: "charts",
		links: [
			{
				icon: BsBarChart,
				activeIcon: BsBarChartFill,
				label: "bar",
				path: "/admin/charts/bar",
			},
			{
				icon: BsPieChart,
				activeIcon: BsFillPieChartFill,
				label: "pie",
				path: "/admin/charts/pie",
			},
			{
				icon: BiLineChart,
				activeIcon: GrLineChart,
				label: "line",
				path: "/admin/charts/line",
			},
		],
	},
	{
		title: "apps",
		links: [
			{
				icon: BsStopwatch,
				activeIcon: BsStopwatchFill,
				label: "stopwatch",
				path: "/admin/apps/stopwatch",
			},
			{
				icon: RiCoupon3Line,
				activeIcon: BiSolidCoupon,
				label: "coupon",
				path: "/admin/apps/coupon",
			},
			{
				icon: TbCoinRupee,
				activeIcon: TbCoinRupeeFilled,
				label: "toss",
				path: "/admin/apps/toss",
			},
		],
	},
];
