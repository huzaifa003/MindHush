import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router";

export default function Logo() {
	return (
		<Box alignSelf='flex-start' w='120px'>
			<Link to='/'>
				<Image src='/logo.png' alt='Company Logo' />
			</Link>
		</Box>
	);
}
