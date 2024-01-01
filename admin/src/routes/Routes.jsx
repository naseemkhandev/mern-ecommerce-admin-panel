import { Suspense, lazy } from "react";
import {
	BrowserRouter as Router,
	Routes as Routing,
	Route,
} from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Customers = lazy(() => import("../pages/Customers"));
const Products = lazy(() => import("../pages/Products"));
const Transactions = lazy(() => import("../pages/Transactions"));

import Loader from "../components/Loader";
import RootLayout from "../layout/RootLayout";
import NotFound from "../components/NotFound";

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routing>
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
					<Route path="*" element={<NotFound />} />
				</Routing>
			</Suspense>
		</Router>
	);
};

export default Routes;
