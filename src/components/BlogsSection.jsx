import React from "react";
import {
	Box,
	Heading,
	Text,
	Flex,
	IconButton,
	Image,
	VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const BlogCard = ({ image, title, number }) => {
	const navigate = useNavigate();

	return (
		<Box
			position='relative'
			flex='0 0 auto'
			maxW={{ base: "100%", md: "48%" }}
			mb={{ base: 8, md: 0 }}
			cursor='pointer'
			transition='transform 0.2s'
			_hover={{ transform: "scale(1.02)" }}
			onClick={() => navigate(`/blogs/${number}`)}>
			<Image
				src={image}
				alt={title}
				height={{ base: "250px", md: "350px" }}
				width='100%'
				objectFit='cover'
				borderRadius='lg'
			/>
			<VStack
				position='absolute'
				bottom={4}
				left={4}
				align='flex-start'
				spacing={1}>
				<Text color='white' fontSize={{ base: "sm", md: "lg" }}>
					{" "}
					{/* Responsive font size */}
					Blog {number}
				</Text>
				<Text color='white' fontSize={{ base: "md", md: "lg" }} noOfLines={2}>
					{title}
				</Text>
			</VStack>
		</Box>
	);
};

const BlogsSection = () => {
	const blogs = [
		{
			image: "/blogs/blog-1.jpg",
			title:
				"Navigate life's changes and challenges with support tailored to self-discovery, growth, and embracing your true self",
			number: 1,
		},
		{
			image: "/blogs/blog-2.jpg",
			title:
				"Discover strategies for achieving mental clarity and emotional balance in today’s fast-paced world",
			number: 2,
		},
	];

	return (
		<Box bg='black' py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
			{/* Heading and Button */}
			<Flex
				maxW='7xl'
				mx='auto'
				mb={8}
				alignItems='center'
				justifyContent='space-between'
				textAlign={{ base: "center", md: "left" }}>
				<Heading color='white' fontSize={{ base: "2xl", md: "3xl" }} flex='1'>
					BLOGS
				</Heading>
				<IconButton
					aria-label='View all blogs'
					variant='ghost'
					colorScheme='whiteAlpha'
					size='lg'
					_hover={{ transform: "translateX(4px)" }}
					transition='transform 0.2s'>
					<Image src='/icons/arrow_right_icon.svg' alt='Arrow right' w={10} />
				</IconButton>
			</Flex>

			{/* Blog Cards */}
			<Box
				maxW='7xl'
				mx='auto'
				overflowX='auto'
				px={2}
				py={4}
				css={{
					"&::-webkit-scrollbar": {
						display: "none",
					},
				}}>
				<Flex gap={4} justifyContent='space-between' flexDirection='row'>
					{blogs.map((blog, index) => (
						<BlogCard
							key={index}
							image={blog.image}
							title={blog.title}
							number={blog.number}
						/>
					))}
				</Flex>
			</Box>
		</Box>
	);
};

export default BlogsSection;
