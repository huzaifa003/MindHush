import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
	DialogContent,
	DialogHeader,
	DialogRoot,
	DialogBody,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FiMoreVertical } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { useAuth } from "@/context/AuthContext";
import { MenuItem } from "./ui/menu";

const UserProfileModal = () => {
	const { logout } = useAuth();
	return (
		<DialogRoot size='md' placement='center'>
			<DialogTrigger asChild>
				<MenuItem value='profile' cursor='pointer' py={0}>
					<Button variant='plain' p={0} fontWeight='normal'>
						<LuUser />
						Profile
					</Button>
				</MenuItem>
			</DialogTrigger>
			<DialogContent
				bg='linear-gradient(180deg, #6B4177 0%, #3A3A3A 100%)'
				borderRadius='3xl'
				p={0}
				overflow='hidden'>
				<DialogHeader p={0}>
					<Box position='relative' w='full'>
						{/* Profile Image and Name Section */}
						<HStack spacing={4} pt={8} pb={6} px={6} alignItems='flex-end'>
							<Box
								borderRadius='full'
								border='2px'
								borderColor='purple.300'
								overflow='hidden'
								w='120px'
								h='120px'>
								<Image src='/avatar.png' alt='Profile' w='full' />
							</Box>
							<Text fontSize='2xl' color='white' fontWeight='semibold'>
								Linda Blair
							</Text>
						</HStack>

						{/* More Options Button */}
						<Box position='absolute' top={4} right={4}>
							<Button variant='ghost' p={2}>
								<FiMoreVertical size={24} color='white' />
							</Button>
						</Box>
					</Box>
				</DialogHeader>

				<DialogBody p={0}>
					{/* User Info Content */}
					<Box p={6} border='1px solid white' borderLeft={0} borderRight={0}>
						<HStack spacing={0} mb={4} gap={10}>
							<Text color='whiteAlpha' fontSize='lg'>
								User Info
							</Text>
							<Text color='whiteAlpha' fontSize='lg'>
								Pricing Plan
							</Text>
						</HStack>
						<Text color='whiteAlpha.700' mb={2} fontSize='xs' fontWeight='bold'>
							ABOUT ME
						</Text>

						<VStack align='start' spacing={4}>
							<HStack alignItems='center'>
								<Text color='whiteAlpha' fontWeight='bold' fontSize='xs'>
									Username:
								</Text>
								<Text color='white' fontSize='xs'>
									Linda Blair
								</Text>
							</HStack>

							<HStack alignItems='center'>
								<Text color='whiteAlpha' fontWeight='bold' fontSize='xs'>
									Password:
								</Text>
								<Text color='white' fontSize='xs'>
									********
								</Text>
							</HStack>
						</VStack>
					</Box>

					{/* Log Out Button */}
					<Box p={6} pt={0}>
						<Button
							variant='link'
							color='whiteAlpha.600'
							px={0}
							_hover={{ color: "white" }}
							onClick={logout}>
							Log Out
						</Button>
					</Box>
				</DialogBody>
			</DialogContent>
		</DialogRoot>
	);
};

export default UserProfileModal;
