import { Box, HStack, Text, Image } from "@chakra-ui/react";

const ChatMessage = ({ message, isUser, time }) => (
	<HStack
		w='full'
		alignItems='flex-start'
		justifyContent={isUser ? "flex-end" : "flex-start"}>
		{!isUser && (
			<Image
				src='/favicon.png'
				alt='AI avatar'
				boxSize='40px'
				borderRadius='full'
				ml={2}
			/>
		)}
		<Box
			maxW='80%'
			color='white'
			px={3}
			py={2}
			bg={isUser ? "#7A50764D" : "#FFFFFF1A"}
			borderRadius='2xl'
			position='relative'>
			<Text>{message}</Text>
		</Box>

		{isUser && (
			<Image
				src='/avatar.png'
				alt='User avatar'
				boxSize='40px'
				borderRadius='full'
				mr={2}
			/>
		)}
	</HStack>
);

export default ChatMessage;
