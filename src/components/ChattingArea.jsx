import React, { useMemo, useState } from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import InputArea from "./InputArea";
import { useLocation } from "react-router";

const ChattingArea = () => {
	const { state } = useLocation();
	const [messages, setMessages] = useState([]);
	// Predefined AI responses
	const aiResponses = useMemo(
		() => [
			"I'm here to help. Could you share more about how you're feeling?",
			"That's understandable. Let me guide you through some options.",
			"You're not alone in this. Take small steps to feel better.",
			"I hear you. Have you considered reaching out to a friend or family?",
			"Take a deep breath. You're doing great by opening up.",
		],
		[]
	);

	const onSubmitClick = (newMessage) => {
		setMessages((prev) => [...prev, { message: newMessage, isUser: true }]);

		setTimeout(() => {
			const randomResponse =
				aiResponses[Math.floor(Math.random() * aiResponses.length)];
			setMessages((prev) => [
				...prev,
				{ message: randomResponse, isUser: false },
			]);
		}, 1000);
	};

	// Initialize with state only once
	useMemo(() => {
		if (state) {
			onSubmitClick(state);
		}
	}, [state]);

	return (
		<Flex flexDirection='column' h='100vh' w='full' color='white' p={4}>
			{/* Messages Container */}
			<VStack
				spacing={4}
				overflowY='auto'
				w='full'
				h='80%'
				pr={2}
				pb={5}
				css={{
					"&::-webkit-scrollbar-thumb": {
						// background: "#B55CFF",
						background: "transparent",
						borderRadius: "10px",
					},
				}}>
				{messages.map((msg, index) => (
					<ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
				))}
			</VStack>

			{/* Message Input */}
			<Box w='full' pt={4} zIndex={10}>
				<InputArea
					widthOnSS='full'
					widthOnLS='full'
					onSubmitClick={onSubmitClick}
				/>
			</Box>
		</Flex>
	);
};

export default ChattingArea;
