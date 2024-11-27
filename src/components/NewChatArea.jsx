import React from "react";
import { Box, Text, SimpleGrid, VStack, Badge } from "@chakra-ui/react";
import {
	LuBrain,
	LuBriefcase,
	LuDollarSign,
	LuHeart,
	LuSettings,
	LuUsers,
} from "react-icons/lu";
import InputArea from "./InputArea";

export default function NewChat({ isDrawer }) {
	const categories = [
		{ name: "Addiction", icon: <LuBrain />, isPro: false },
		{ name: "Parenting", icon: <LuUsers />, isPro: true },
		{ name: "Mental Health", icon: <LuBrain />, isPro: false },
		{ name: "Technology", icon: <LuSettings />, isPro: true },
		{ name: "Financial Worries", icon: <LuDollarSign />, isPro: true },
		{ name: "Confidence", icon: <LuHeart />, isPro: false },
		{ name: "Relationships", icon: <LuUsers />, isPro: true },
		{ name: "Workplace Conflicts", icon: <LuBriefcase />, isPro: false },
	];

	return (
		<VStack w='full' my='auto'>
			{/* Welcome Text */}
			<Text
				fontSize='3xl'
				fontWeight='light'
				textAlign='center'
				lineHeight={1.2}>
				How can I help you <br /> today?
			</Text>

			{/* Search Input */}
			<InputArea isNewChart={true} />

			<SimpleGrid
				columns={{ base: 2, md: 3, lg: 4 }}
				gapY={6}
				mt={2}
				pb={2}
				maxW={{ base: "xs", sm: "sm", md: "3xl" }}
				display={{ base: "flex", md: "grid" }}
				flexWrap='nowrap'
				overflowX={{ base: "auto", md: "unset" }}
				scrollSnapType='x mandatory'
				css={{
					"&::-webkit-scrollbar": {
						height: "4px",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "#B55CFF",
						borderRadius: "10px",
					},
				}}>
				{categories.map((category) => (
					<Box
						key={category.name}
						minW={{ base: "30%", md: "unset" }}
						scrollSnapAlign='start'>
						<VStack gapY={2}>
							<Box
								bg='gray.800'
								p={4}
								borderRadius='xl'
								border='1px solid #424242'
								cursor='pointer'
								_hover={{ bg: "#1f1f1f" }}
								position='relative'>
								{category.isPro && (
									<Badge
										position='absolute'
										top={0}
										left={0}
										variant='solid'
										bg='#424242'
										fontSize='xx-small'
										roundedBottomLeft={0}
										roundedBottomRight='xl'
										roundedTopLeft='xl'
										roundedTopRight={0}>
										<Box
											display='inline-block'
											backgroundImage='linear-gradient(to right, #B55CFF, #5D8CFA)'
											backgroundClip='text'
											color='transparent'>
											Pro
										</Box>
									</Badge>
								)}
								{category.icon}
							</Box>
							<Text
								fontSize='sm'
								textAlign='center'
								textWrap={{ base: "wrap", md: "nowrap" }}>
								{category.name}
							</Text>
						</VStack>
					</Box>
				))}
			</SimpleGrid>
		</VStack>
	);
}
