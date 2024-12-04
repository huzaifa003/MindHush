import React from "react";
import {
	Box,
	Heading,
	Text,
	VStack,
	Image,
	HStack,
	IconButton,
	Flex,
	Container,
	Input,
} from "@chakra-ui/react";
import { FaCaretLeft } from "react-icons/fa";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router";

const BlogPost = () => {
	const navigate = useNavigate();

	return (
		<Box bg='#09090C' color='white' minH='100vh' h='100vh' overflowY='auto'>
			{/* Main Container */}
			<Container
				p={6}
				maxW={{
					base: "100%",
					md: "breakpoint-lg",
				}}>
				{/* Back Button and Search */}
				<Flex justify='space-between' align='center' mb={6}>
					<IconButton
						aria-label='Go back'
						variant='ghost'
						color='white'
						fontSize='xl'
						rounded='full'
						_hover={{ bg: "whiteAlpha.200" }}
						onClick={() => navigate("/")}>
						<FaCaretLeft />
					</IconButton>
					{/* Search Bar */}
					<InputGroup maxW='xs' startElement={<LuSearch size={16} />}>
						<Input placeholder='Search' size='md' rounded='full' />
					</InputGroup>
				</Flex>

				{/* Blog Content */}
				<VStack spacing={8} align='center'>
					{/* Blog Header */}
					<Box>
						<Text fontSize='sm' textAlign='center' opacity={0.7} mb={1}>
							Blog - 1 • July 2, 2021
						</Text>
						<Heading size='lg' fontWeight='bold' textAlign='center' mb={2}>
							BLOG - 1
						</Heading>
						<HStack align='center' justify='center' gap={4} mt={10}>
							<Image
								src='/avatar.png'
								alt='Author'
								w='10'
								h='10'
								borderRadius='full'
							/>
							<VStack align='start' spacing={0}>
								<Text fontWeight='bold' fontSize='md'>
									Leslie Alexander
								</Text>
								<Text fontSize='sm' opacity={0.7}>
									UI Designer
								</Text>
							</VStack>
						</HStack>
					</Box>

					{/* Blog Image */}
					<Box w='full' mt={2} mb={10}>
						<Image
							src='/placeholder-blog-post.png'
							alt='Blog Content'
							borderRadius='md'
							objectFit='cover'
							w='full'
						/>
					</Box>

					{/* Blog Content Text */}
					<Text lineHeight='tall' fontSize='md' color='gray.300'>
						ut I must explain to you how all this mistaken idea of denouncing
						pleasure and praising pain was bo The European languages are members
						of the same family. Their separate existence is a myth. For scien
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live A wonderful serenity has taken
						possession of my entire soul, like these sweet mornings of spring
						whi One morning, when Gregor Samsa woke from troubled dreams, he
						found himself transformed in his bed in I must explain to you how
						all this mistaken idea of denouncing pleasure and praising pain
					</Text>
				</VStack>

				{/* Footer */}
				<Box textAlign='center' mt={20} fontSize='sm' opacity={0.6}>
					Copyright © 2021 - Written By Nauval
				</Box>
			</Container>
		</Box>
	);
};

export default BlogPost;
