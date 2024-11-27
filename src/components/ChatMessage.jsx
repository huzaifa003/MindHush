import { Box, HStack, Text, Image } from "@chakra-ui/react";

const ChatMessage = ({ message, isUser, time }) => (
	<HStack
		w='full'
		alignItems='flex-start'
		justifyContent={isUser ? "flex-start" : "flex-end"}>
		{isUser && (
			<Image
				src='/avatar.png'
				alt='User avatar'
				boxSize='40px'
				borderRadius='full'
				mr={2}
			/>
		)}
		<Box
			maxW='80%'
			color='white'
			p={4}
			border='1px solid'
			borderColor={isUser ? "#B55CFF" : "white"}
			borderRadius='2xl'
			borderTopLeftRadius={isUser ? "0" : "2xl"}
			borderTopRightRadius={isUser ? "2xl" : "0"}
			position='relative'>
			<Text>{message}</Text>
		</Box>
		{!isUser && (
			<Image
				src='/favicon.png'
				alt='AI avatar'
				boxSize='40px'
				borderRadius='full'
				ml={2}
			/>
		)}
	</HStack>
);

export default ChatMessage;
