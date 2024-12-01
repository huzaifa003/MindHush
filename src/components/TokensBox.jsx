import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ProgressRoot, ProgressValueText, ProgressBar } from "./ui/progress";

export default function TokensBox() {
	return (
		<VStack
			w='full'
			p={3}
			my={2}
			bg='#7A50764D'
			rounded='2xl'
			border='1px solid #602376'>
			<VStack alignItems='flex-start' w='100%' mb={2}>
				<HStack>
					<Text fontSize='xs' fontWeight='bold'>
						500
					</Text>
					<Text fontSize='xs'>Tokens Used</Text>
				</HStack>

				<HStack>
					<Text fontSize='xs' fontWeight='bold'>
						500
					</Text>
					<Text fontSize='xs'>Tokens Left</Text>
				</HStack>
			</VStack>

			<ProgressRoot
				colorPalette='teal'
				defaultValue={70}
				maxW='sm'
				size='xs'
				w='100%'>
				<HStack>
					<ProgressValueText>70%</ProgressValueText>
					<ProgressBar flex='1' rounded='full' />
				</HStack>
			</ProgressRoot>
		</VStack>
	);
}
