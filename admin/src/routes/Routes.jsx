import { Suspense, lazy } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Customers = lazy(() => import("../pages/Customers"));
const Products = lazy(() => import("../pages/Products"));
const Transactions = lazy(() => import("../pages/Transactions"));

import Loader from "../components/Loader";
import RootLayout from "../layout/RootLayout";

const Routes = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Router>
					<Route
						path="/admin/dashboard"
						element={
							<RootLayout>
								<Dashboard />
							</RootLayout>
						}
					/>
					<Route
						path="/admin/customer"
						element={
							<RootLayout>
								<Customers />
							</RootLayout>
						}
					/>
					<Route
						path="/admin/product"
						element={
							<RootLayout>
								<Products />
							</RootLayout>
						}
					/>
					<Route
						path="/admin/transaction"
						element={
							<RootLayout>
								<Transactions />
							</RootLayout>
						}
					/>
				</Router>
			</Suspense>
		</BrowserRouter>
	);
};

export default Routes;
