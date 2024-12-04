import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogRoot,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FiExternalLink } from "react-icons/fi";
import { BiMessageCheck } from "react-icons/bi";
import { Field } from "./ui/field";
import { InputGroup } from "./ui/input-group";
import { LuClipboard } from "react-icons/lu";
import { useState } from "react";

const EarnReferModal = () => {
	const [copyText, setCopyText] = useState("https://mind-hush.vercel.app");

	const handleCopy = () => {
		navigator.clipboard.writeText(copyText).then(
			() => {
				alert("Link copied to clipboard!");
			},
			(err) => {
				console.error("Could not copy text: ", err);
			}
		);
	};

	return (
		<HStack>
			<DialogRoot size='sm' placement='center'>
				<DialogTrigger asChild>
					<Button variant='plain' px={0} fontWeight='normal' fontSize={16}>
						<FiExternalLink size={20} />
						Earn & Refer
					</Button>
				</DialogTrigger>
				<DialogContent bg='secondary.50' borderRadius='4xl'>
					<DialogHeader borderRadius='4xl' borderBottomRadius={0}>
						<HStack spacing={2}>
							<Box
								as='span'
								mr={2}
								borderRadius='full'
								border='1px solid #008080'
								p={2}>
								<BiMessageCheck size={24} color='#008080' />
							</Box>
							<DialogTitle>
								<Text fontSize='3xl' color='white' fontWeight='semibold'>
									Earn and Refer
								</Text>
							</DialogTitle>
						</HStack>
					</DialogHeader>
					<DialogBody>
						<Box>
							<Box mb={4}>
								<Field label='Copy Link' required>
									<InputGroup
										w='full'
										endElement={
											<Box as='button' onClick={handleCopy} cursor='pointer'>
												<LuClipboard color='#008080' size={20} />
											</Box>
										}>
										<Input value={copyText} readOnly borderColor='gray.300' />
									</InputGroup>
								</Field>
							</Box>
						</Box>
					</DialogBody>

					<DialogCloseTrigger
						rounded='full'
						_hover={{ bg: "whiteAlpha.300" }}></DialogCloseTrigger>
				</DialogContent>
			</DialogRoot>
		</HStack>
	);
};

export default EarnReferModal;
