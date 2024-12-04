import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import PricingPlans from "./pages/PricingPlans";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import BlogPost from "./pages/BlogPost";

const App = () => {
	return (
		<Flex direction='column' height='100vh' overflow='hidden'>
			{/* <Header /> */}
			<Box as='main' flex='1' overflow='hidden'>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/c/new' element={<Dashboard isNewChart={true} />} />
					<Route path='/c/:id' element={<Dashboard />} />
					<Route path='/login' element={<SignInPage />} />
					<Route path='/signup' element={<SignUpPage />} />
					<Route path='/pricing-plans' element={<PricingPlans />} />
					<Route path='/blogs/:id' element={<BlogPost />} />
				</Routes>
			</Box>
		</Flex>
	);
};

export default App;
