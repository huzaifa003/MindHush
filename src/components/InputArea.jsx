import React, { useState } from "react";
import { InputGroup } from "./ui/input-group";
import { LuArrowUp, LuPaperclip } from "react-icons/lu";
import { IconButton, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function InputArea({
	isNewChart = false,
	widthOnSS = "md",
	widthOnLS = "3xl",
	onSubmitClick,
}) {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

	const handleSendMessage = () => {
		if (value.trim() === "") return; // Prevent sending empty messages
		if (isNewChart) {
			navigate(`/c/${Math.floor(Math.random() * 1000000000)}`, {
				state: value,
			}); // Generate random chart ID
		} else {
			onSubmitClick(value); // Pass the message to the parent component
			setValue(""); // Clear the input field after sending
		}
	};

	return (
		<InputGroup
			flex='1'
			w='full'
			maxW={{ base: widthOnSS, md: widthOnLS }}
			mb={4}
			startElement={<LuPaperclip color='white' />}
			endElement={
				<IconButton
					variant='plain'
					bg='#FAFAFA4D'
					rounded='full'
					size='xs'
					onClick={handleSendMessage}
					aria-label='Send Message'>
					<LuArrowUp color='black' size={30} />
				</IconButton>
			}>
			<Input
				placeholder='Type your message ...'
				size='lg'
				value={value}
				onChange={(e) => setValue(e.target.value)} // Fixed the onChange handler
				onKeyDown={(e) => {
					if (e.key === "Enter") handleSendMessage(); // Submit on Enter key press
				}}
				maxW={{ base: widthOnSS, md: widthOnLS }}
				rounded='full'
				bg='gray.800'
				border='1px solid'
				borderColor='#B55CFF'
				_hover={{ borderColor: "purple.400" }}
				_focus={{ borderColor: "purple.300" }}
			/>
		</InputGroup>
	);
}
