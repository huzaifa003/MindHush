import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FiExternalLink } from "react-icons/fi";
import { CloseButton } from "./ui/close-button";
import { Field } from "./ui/field";

const EarnReferModal = () => {
	return (
		<HStack>
			<DialogRoot size='sm' placement='center'>
				<DialogTrigger asChild>
					<Button variant='plain' px={0} fontWeight='normal' fontSize={16}>
						<FiExternalLink />
						Earn & Refer
					</Button>
				</DialogTrigger>
				<DialogContent
					bg='linear-gradient(to bottom, #CA72DA, #18191C)'
					borderRadius='4xl'>
					<DialogHeader
						// bg='linear-gradient(to bottom, #CA72DAB2, #fff)'
						borderRadius='4xl'
						borderBottomRadius={0}>
						<HStack spacing={2}>
							<FiExternalLink size={20} />
							<DialogTitle>
								<Text fontSize='lg' fontWeight='bold'>
									Earn and Refer
								</Text>
							</DialogTitle>
						</HStack>
					</DialogHeader>
					<DialogBody>
						<Box>
							<Box mb={4}>
								<Field label='Copy Link' required>
									<Input
										value='http://192.168.20.120:5000/'
										readOnly
										borderColor='gray.300'
									/>
								</Field>
							</Box>
						</Box>
					</DialogBody>
					<DialogFooter>
						<DialogActionTrigger asChild>
							<Button
								variant='outline'
								flex='1'
								borderColor='white'
								_hover={{ bg: "whiteAlpha.300" }}>
								Cancel
							</Button>
						</DialogActionTrigger>
						<Button
							flex='1'
							bg='#8E559A'
							_hover={{ bg: "#8E559A" }}
							color='white'>
							Copy
						</Button>
					</DialogFooter>
					<DialogCloseTrigger
						rounded='full'
						_hover={{ bg: "whiteAlpha.300" }}></DialogCloseTrigger>
				</DialogContent>
			</DialogRoot>
		</HStack>
	);
};

export default EarnReferModal;
