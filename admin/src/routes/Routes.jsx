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
						path="/"
						element={
							<RootLayout>
								<Dashboard />
							</RootLayout>
						}
					/>
					<Route
						path="/customer"
						element={
							<RootLayout>
								<Customers />
							</RootLayout>
						}
					/>
					<Route
						path="/product"
						element={
							<RootLayout>
								<Products />
							</RootLayout>
						}
					/>
					<Route
						path="/transaction"
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
