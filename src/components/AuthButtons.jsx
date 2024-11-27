import React from "react";
import { HStack } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function AuthButtons() {
	return (
		<HStack>
			<Link to='/signup'>
				<Button size='xs' bg='primary' color='white'>
					Sign up
				</Button>
			</Link>
			<Link to='/signin'>
				<Button size='xs' bg='primary' color='white'>
					Sign in
				</Button>
			</Link>
		</HStack>
	);
}
