import React, { useState, useEffect, useRef } from "react";
import { VStack, Flex, Box, Text } from "@chakra-ui/react";
import { useParams, useLocation, useNavigate } from "react-router";
import ChatMessage from "./ChatMessage";
import InputArea from "./InputArea";
import { apiCallerAuthPost, apiCallerAuthGet } from "@/api/ApiCaller";
import { useAuth } from "@/context/AuthContext";

const ChattingArea = () => {
	const { id } = useParams(); // Extract the chatId from the URL
	const { state } = useLocation(); // Access the first prompt passed during navigation
	const navigate = useNavigate();
	const { token } = useAuth(); // Get the authorization token
	const [messages, setMessages] = useState([]);
	const [chatId, setChatId] = useState(null); // Store the current chat ID
	const hasFetchedMessages = useRef(false); // Track if messages have already been fetched
	console.log("id", id, state);
	// Fetch all messages for a chat
	const fetchMessages = async (chatId) => {
		try {
			const response = await apiCallerAuthGet(`/api/chats/${chatId}/messages/`, token);
			
			if (response.status === 200) {
				const formattedMessages = response.data.map((msg) => ({
					message: msg.content,
					isUser: !msg.is_system_message,
				}));
				setMessages(formattedMessages);
			} else {
				throw new Error("Failed to fetch messages");
			}
		} catch (error) {
			console.error("Error fetching messages:", error);
			alert("Error fetching messages. Please try again later.");
		}
	};

	// Handle new chat creation when navigating to `/c/new`
	useEffect(() => {
		const createChat = async () => {
			if (!state || chatId) return; // Skip if no state or chat already exists

			try {
				// Step 1: Create Chat
				const createChatResponse = await apiCallerAuthPost(
					"/api/chats/create/",
					{ name: state.substring(0, 50) }, // Use the first 50 characters of the prompt as the chat name
					token
				);

				if (createChatResponse.status === 201) {
					const newChatId = createChatResponse.data.id;
					setChatId(newChatId);

					// Step 2: Add First Message to Chat
					const addMessageResponse = await apiCallerAuthPost(
						`/api/chats/${newChatId}/messages/add/`,
						{ content: state }, // First prompt as the message content
						token
					);

					// Update chat with user's message and AI response
					setMessages([
						{ message: addMessageResponse.data.content, isUser: true },
						{ message: addMessageResponse.data.ai_response, isUser: false },
					]);

					alert("Chat created successfully!");
					navigate(`/c/${newChatId}`); // Redirect to the newly created chat
				} else {
					throw new Error(createChatResponse.data?.detail || "Failed to create chat");
				}
			} catch (error) {
				console.error("Error creating chat:", error);
				alert(`Error: ${error.message || "Please try again later."}`);
			}
		};

		if (!id) createChat(); // Only create a new chat if `id` is not in the URL
	}, [id, state, chatId, token, navigate]);

	// Fetch messages for an existing chat
	useEffect(() => {
		if (id) {
			setChatId(id); // Set the chatId from the URL
			fetchMessages(id);
			hasFetchedMessages.current = true; // Prevent duplicate fetching
		}
	}, [id]);

	// Handle user messages
	const onSubmitClick = async (newMessage) => {
		setMessages((prev) => [...prev, { message: newMessage, isUser: true }]);

		if (chatId) {
			try {
				const addMessageResponse = await apiCallerAuthPost(
					`/api/chats/${chatId}/messages/add/`,
					{ content: newMessage },
					token
				);

				setMessages((prev) => [
					...prev,
					{ message: addMessageResponse.data.ai_response, isUser: false },
				]);
			} catch (error) {
				console.error("Error adding message to chat:", error);
				alert(`Error: ${error.message || "Unable to add message."}`);
			}
		}
	};

	return (
		<Flex flexDirection="column" h="100vh" w="full" color="white" p={4}>
			{/* Messages Container */}
			<VStack
				spacing={4}
				overflowY="auto"
				w="full"
				h="78%"
				pr={2}
				pb={5}
				css={{
					"&::-webkit-scrollbar-thumb": {
						background: "transparent",
						borderRadius: "10px",
					},
				}}>
				{messages.map((msg, index) => (
					<ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
				))}
			</VStack>

			{/* Message Input */}
			<Box w="full" pt={0} zIndex={10}>
				<InputArea
					widthOnSS="full"
					widthOnLS="full"
					onSubmitClick={onSubmitClick}
				/>
				<Text
					fontSize="xx-small"
					color="gray.500"
					fontStyle="italic"
					textAlign="center"
					mt={2}>
					MindHush.ai is not a licensed professional. For urgent or serious
					concerns, please seek assistance from a qualified expert.
				</Text>
			</Box>
		</Flex>
	);
};

export default ChattingArea;
