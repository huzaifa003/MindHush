import React from "react";
import { Circle, Float, HStack, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "./ui/avatar";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@/components/ui/menu";
import { FaCaretDown } from "react-icons/fa";
import { LuLogOut, LuUser } from "react-icons/lu";
import UserProfileModal from "./UserProfileModal";

export default function AuthButtons() {
	const { isAuthenticated, logout } = useAuth();
	return (
		<HStack>
			{isAuthenticated ? (
				<>
					<Avatar name='Linda Blair' src='/avatar.png'>
						<Float placement='bottom-end' offsetX='2' offsetY='1'>
							<Circle
								bg='green.500'
								size='8px'
								outline='1px solid'
								outlineColor='white'
							/>
						</Float>
					</Avatar>
					<Text>Linda Blair</Text>
					<MenuRoot>
						<MenuTrigger asChild>
							<Button variant='plain' size='sm'>
								<FaCaretDown />
							</Button>
						</MenuTrigger>
						<MenuContent minW='10rem'>
							<UserProfileModal />
							<MenuItem value='logout' cursor='pointer' onClick={logout} py={2}>
								<LuLogOut />
								Logout
							</MenuItem>
						</MenuContent>
					</MenuRoot>
				</>
			) : (
				<>
					<Link to='/signup'>
						<Button size='xs' bg='primary' color='white' rounded='lg'>
							Sign Up
						</Button>
					</Link>
					<Link to='/login'>
						<Button size='xs' bg='primary' color='white' rounded='lg'>
							Login
						</Button>
					</Link>
				</>
			)}
		</HStack>
	);
}
