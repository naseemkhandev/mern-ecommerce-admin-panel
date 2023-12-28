import { BiSolidDashboard, BiStore } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { BiLineChart, BiSolidCoupon } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import { TbCoinRupee, TbCoinRupeeFilled } from "react-icons/tb";
import { IoStorefront } from "react-icons/io5";
import {
	BsBarChart,
	BsBarChartFill,
	BsFillPieChartFill,
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
				icon: BiStore,
				activeIcon: IoStorefront,
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
				path: "/charts/bar",
			},
			{
				icon: BsPieChart,
				activeIcon: BsFillPieChartFill,
				label: "pie",
				path: "/charts/pie",
			},
			{
				icon: BiLineChart,
				activeIcon: GrLineChart,
				label: "line",
				path: "/charts/line",
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
				path: "/apps/dashboard",
			},
			{
				icon: RiCoupon3Line,
				activeIcon: BiSolidCoupon,
				label: "coupon",
				path: "/apps/product",
			},
			{
				icon: TbCoinRupee,
				activeIcon: TbCoinRupeeFilled,
				label: "toss",
				path: "/apps/customer",
			},
		],
	},
];