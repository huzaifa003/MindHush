import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";

const App = () => {
	return (
		<Flex direction='column' height='100vh' overflow='hidden'>
			{/* <Header /> */}
			<Box as='main' flex='1' overflow='hidden'>
				<Routes>
					<Route path='/' element={<>Hello</>} />
				</Routes>
			</Box>
		</Flex>
	);
};

export default App;
