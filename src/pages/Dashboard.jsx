import React, { useState } from "react";
import {
	Box,
	VStack,
	HStack,
	Flex,
	IconButton,
	useBreakpointValue,
} from "@chakra-ui/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import AuthButtons from "@/components/AuthButtons";
import Sidebar from "@/components/Sidebar";
import {
	DrawerRoot,
	DrawerBackdrop,
	DrawerTrigger,
	DrawerContent,
	DrawerCloseTrigger,
} from "@/components/ui/drawer";
import NewChatArea from "@/components/NewChatArea";
import ChattingArea from "@/components/ChattingArea";

const Dashboard = ({ isNewChart = false }) => {
	const [activeChat, setActiveChat] = useState(1);

	// Determine if the sidebar should be a drawer (on small screens)
	const isDrawer = useBreakpointValue({ base: true, md: false });

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

					{/* Chat Area */}
					{isNewChart ? <NewChatArea isDrawer={isDrawer} /> : <ChattingArea />}
				</VStack>
			</HStack>
		</Box>
	);
};

export default Dashboard;
