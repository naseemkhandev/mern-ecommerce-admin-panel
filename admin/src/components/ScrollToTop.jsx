import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from "react-icons/bs";

const ScrollTop = () => {
	return (
		<ScrollToTop
			smooth
			component={
				<span className="flex justify-center text-2xl dark:text-black">
					<BsArrowUp />
				</span>
			}
		/>
	);
};

export default ScrollTop;
