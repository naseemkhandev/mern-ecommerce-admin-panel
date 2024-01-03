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

// management
const NewProduct = lazy(() => import("../pages/management/NewProduct"));
const EditCustomer = lazy(() => import("../pages/management/EditCustomer"));
const EditTransaction = lazy(() =>
	import("../pages/management/EditTransaction")
);

import Loader from "../components/Loader";
import RootLayout from "../layout/RootLayout";
import NotFound from "../components/NotFound";

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<RootLayout>
					<Routing>
						<Route path="/" element={<Dashboard />} />
						<Route path="/customer" element={<Customers />} />
						<Route path="/product" element={<Products />} />
						<Route path="/transaction" element={<Transactions />} />

						{/* management */}
						<Route path="/product/new" element={<NewProduct />} />
						<Route path="/product/:id" element={<NewProduct />} />
						<Route path="/customer/:id" element={<EditCustomer />} />
						<Route path="/transaction/:id" element={<EditTransaction />} />

						<Route path="*" element={<NotFound />} />
					</Routing>
				</RootLayout>
			</Suspense>
		</Router>
	);
};

export default Routes;
