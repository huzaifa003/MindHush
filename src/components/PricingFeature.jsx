import { HStack, Text, VStack } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";

const PricingFeature = ({ text, description }) => {
	return (
		<HStack spacing={4} align='start'>
			<LuCheck color='#008080' size='25px' style={{ marginTop: "5px" }} />
			<VStack align='start' spacing={1}>
				<Text
					fontSize={{ base: "md", lg: "lg" }}
					color='white'
					fontWeight='bold'>
					{text}
				</Text>
				<Text fontSize={{ base: "xs", sm: "sm" }} color='gray.400'>
					{description}
				</Text>
			</VStack>
		</HStack>
	);
};

export default PricingFeature;
