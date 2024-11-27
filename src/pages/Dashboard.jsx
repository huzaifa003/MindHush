import React, { useState } from "react";
import {
	Box,
	Input,
	Text,
	SimpleGrid,
	VStack,
	HStack,
	Flex,
	Badge,
	IconButton,
	useBreakpointValue,
} from "@chakra-ui/react";
import {
	LuArrowUp,
	LuBrain,
	LuBriefcase,
	LuDollarSign,
	LuHeart,
	LuPaperclip,
	LuSettings,
	LuUsers,
} from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import AuthButtons from "@/components/AuthButtons";
import { InputGroup } from "@/components/ui/input-group";
import Sidebar from "@/components/Sidebar";
import {
	DrawerRoot,
	DrawerBackdrop,
	DrawerTrigger,
	DrawerContent,
	DrawerCloseTrigger,
} from "@/components/ui/drawer";

const ChatInterface = () => {
	const [activeChat, setActiveChat] = useState(1);

	// Determine if the sidebar should be a drawer (on small screens)
	const isDrawer = useBreakpointValue({ base: true, md: false });

	const categories = [
		{ name: "Addiction", icon: <LuBrain />, isPro: false },
		{ name: "Parenting", icon: <LuUsers />, isPro: true },
		{ name: "Mental Health", icon: <LuBrain />, isPro: false },
		{ name: "Technology", icon: <LuSettings />, isPro: true },
		{ name: "Financial Worries", icon: <LuDollarSign />, isPro: true },
		{ name: "Confidence", icon: <LuHeart />, isPro: false },
		{ name: "Relationships", icon: <LuUsers />, isPro: true },
		{ name: "Workplace Conflicts", icon: <LuBriefcase />, isPro: false },
	];

	// Sample chat data
	const chatData = [
		{ id: 1, name: "Ai Chat", date: new Date() },
		{ id: 2, name: "Chat 1", date: new Date() },
		{ id: 5, name: "Chat 4", date: new Date(Date.now() - 86400000) }, // Yesterday
		{ id: 6, name: "Chat 5", date: new Date(Date.now() - 3 * 86400000) }, // 3 days ago
		{ id: 7, name: "Chat 6", date: new Date(Date.now() - 10 * 86400000) }, // 10 days ago
	];

	// Helper function to categorize chats by date
	const categorizeChats = (chats) => {
		const today = new Date();
		const yesterday = new Date(today);
		yesterday.setDate(today.getDate() - 1);

		const categories = {
			Today: [],
			Yesterday: [],
			"Previous 7 Days": [],
			"Previous 30 Days": [],
		};

		chats.forEach((chat) => {
			const chatDate = new Date(chat.date);
			if (chatDate.toDateString() === today.toDateString()) {
				categories.Today.push(chat);
			} else if (chatDate.toDateString() === yesterday.toDateString()) {
				categories.Yesterday.push(chat);
			} else if (chatDate > new Date(today.setDate(today.getDate() - 7))) {
				categories["Previous 7 Days"].push(chat);
			} else if (chatDate > new Date(today.setDate(today.getDate() - 30))) {
				categories["Previous 30 Days"].push(chat);
			}
		});

		return categories;
	};

	const categorizedChats = categorizeChats(chatData);

	return (
		<Box minH='100vh' color='white'>
			<HStack w='full' spacing={0}>
				{/* Sidebar or Drawer */}
				{!isDrawer && (
					<Sidebar
						categorizedChats={categorizedChats}
						activeChat={activeChat}
						setActiveChat={setActiveChat}
					/>
				)}

				{/* Main Content */}
				<VStack w='full' minH='100vh' gap={8} p={4}>
					{/* Header */}
					<Flex
						justifyContent={{ base: "space-between", md: "flex-end" }}
						w='full'>
						{isDrawer && (
							<DrawerRoot placement='start'>
								<DrawerBackdrop />
								<DrawerTrigger asChild>
									<IconButton
										aria-label='Open Sidebar'
										bg='secondary.50'
										color='white'
										size='xs'
										_hover={{ bg: "gray.700" }}
										zIndex={10}>
										<MdOutlineSpaceDashboard />
									</IconButton>
								</DrawerTrigger>
								<DrawerContent>
									<Sidebar
										isDrawer={isDrawer}
										categorizedChats={categorizedChats}
										activeChat={activeChat}
										setActiveChat={setActiveChat}
									/>
									<DrawerCloseTrigger />
								</DrawerContent>
							</DrawerRoot>
						)}

						<AuthButtons />
					</Flex>

					<VStack w='full' my='auto'>
						{/* Welcome Text */}
						<Text
							fontSize='3xl'
							fontWeight='light'
							textAlign='center'
							lineHeight={1.2}>
							How can I help you <br /> today?
						</Text>

						{/* Search Input */}
						<InputGroup
							flex='1'
							w='full'
							maxW={isDrawer ? "md" : "3xl"}
							mb={4}
							startElement={<LuPaperclip color='white' />}
							endElement={
								<LuArrowUp
									color='black'
									size={25}
									style={{
										backgroundColor: "#FAFAFA4D",
										padding: 5,
										borderRadius: "100%",
									}}
								/>
							}>
							<Input
								placeholder='Type your message ...'
								size='lg'
								maxW={{ base: "md", md: "3xl" }}
								rounded='full'
								bg='gray.800'
								border='1px solid'
								borderColor='#B55CFF'
								_hover={{ borderColor: "purple.400" }}
								_focus={{ borderColor: "purple.300" }}
							/>
						</InputGroup>

						<SimpleGrid
							columns={{ base: 2, md: 3, lg: 4 }}
							gapY={6}
							mt={2}
							pb={2}
							maxW={{ base: "xs", sm: "sm", md: "3xl" }}
							display={{ base: "flex", md: "grid" }}
							flexWrap='nowrap'
							overflowX={{ base: "auto", md: "unset" }}
							scrollSnapType='x mandatory'
							css={{
								"&::-webkit-scrollbar": {
									height: "4px",
								},
								"&::-webkit-scrollbar-thumb": {
									background: "#B55CFF",
									borderRadius: "10px",
								},
							}}>
							{categories.map((category) => (
								<Box
									key={category.name}
									minW={{ base: "30%", md: "unset" }}
									scrollSnapAlign='start'>
									<VStack gapY={2}>
										<Box
											bg='gray.800'
											p={4}
											borderRadius='xl'
											border='1px solid #424242'
											cursor='pointer'
											_hover={{ bg: "#1f1f1f" }}
											position='relative'>
											{category.isPro && (
												<Badge
													position='absolute'
													top={0}
													left={0}
													variant='solid'
													bg='#424242'
													fontSize='xx-small'
													roundedBottomLeft={0}
													roundedBottomRight='xl'
													roundedTopLeft='xl'
													roundedTopRight={0}>
													<Box
														display='inline-block'
														backgroundImage='linear-gradient(to right, #B55CFF, #5D8CFA)'
														backgroundClip='text'
														color='transparent'>
														Pro
													</Box>
												</Badge>
											)}
											{category.icon}
										</Box>
										<Text
											fontSize='sm'
											textAlign='center'
											textWrap={{ base: "wrap", md: "nowrap" }}>
											{category.name}
										</Text>
									</VStack>
								</Box>
							))}
						</SimpleGrid>
					</VStack>
				</VStack>
			</HStack>
		</Box>
	);
};

export default ChatInterface;
