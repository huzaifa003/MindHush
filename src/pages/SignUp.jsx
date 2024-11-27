import React from "react";
import {
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Image,
	Input,
	Separator,
	Text,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { PasswordInput } from "@/components/ui/password-input";
import { FaGoogle } from "react-icons/fa";
import { LuKey, LuMail, LuUser } from "react-icons/lu";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";

const SignUpPage = () => {
	const flexDirection = useBreakpointValue({ base: "column", md: "row" });
	const formWidth = useBreakpointValue({ base: "100%", md: "40%" });
	const formAlignItems = useBreakpointValue({ base: "center" });
	const formJustifyContent = useBreakpointValue({
		base: "center",
		md: "flex-start",
	});
	const logoWidth = useBreakpointValue({ base: "100px", md: "150px" });

	return (
		<Container maxW='100vw' h='100vh' p={0} position='relative'>
			<Flex
				h='full'
				direction={flexDirection}
				align={formAlignItems}
				justify={formJustifyContent}>
				{/* Left side with form */}
				<Box
					w={formWidth}
					p={{ base: 6, md: 8 }}
					my='auto'
					h='100vh'
					overflowY='auto'
					css={{
						"&::-webkit-scrollbar-thumb": {
							background: "transparent",
						},
					}}>
					<VStack maxW='400px' mx='auto' gapY={10}>
						<Box alignSelf='flex-start' w={logoWidth} mt={{ base: 10, md: 0 }}>
							<Link to='/'>
								<Image src='/logo.png' alt='Company Logo' />
							</Link>
						</Box>
						<VStack align='stretch' spaceY={{ base: 6, md: 8 }} w='full'>
							{/* Form Header */}
							<Box textAlign='left'>
								<Heading
									color='white'
									fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
									mb={2}>
									Create an Account{" "}
									<span role='img' aria-label='wave'>
										👋
									</span>
								</Heading>
								<Text color='gray.400' fontSize={{ base: "sm", md: "md" }}>
									Kindly fill in your details to create an account
								</Text>
							</Box>

							{/* Form Fields */}
							<VStack gapY={4} align='stretch'>
								<Field label='Your fullname' required>
									<InputGroup
										flex='1'
										startElement={<LuUser />}
										w='full'
										size='lg'>
										<Input
											type='text'
											placeholder='Enter your name'
											size='lg'
											variant='filled'
											bg='secondary.50'
											border='1px solid #8692A6'
										/>
									</InputGroup>
								</Field>

								<Field label='Email address' required>
									<InputGroup
										flex='1'
										startElement={<LuMail />}
										w='full'
										size='lg'>
										<Input
											type='email'
											placeholder='Enter your email'
											size='lg'
											variant='filled'
											bg='secondary.50'
											border='1px solid #8692A6'
										/>
									</InputGroup>
								</Field>

								<Field label='Create a password' required>
									<InputGroup
										flex='1'
										startElement={<LuKey />}
										w='full'
										size='lg'>
										<PasswordInput
											placeholder='Password'
											size='lg'
											variant='filled'
											bg='secondary.50'
											border='1px solid #8692A6'
										/>
									</InputGroup>
								</Field>

								{/* Checkbox */}
								<Checkbox
									colorPalette='purple'
									size='md'
									color='gray.400'
									alignSelf='flex-start'
									fontSize={{ base: "sm", md: "md" }}>
									I agree to terms & conditions
								</Checkbox>

								{/* Register Button */}
								<Button
									w='full'
									size='lg'
									bg='primary'
									color='white'
									_hover={{ bg: "teal.600" }}
									rounded='2xl'
									mt={2}>
									Register Account
								</Button>

								{/* Separator */}
								<HStack gapX={6} align='center' w='full'>
									<Separator borderColor='#8692A6' />
									<Text
										color='gray.400'
										fontSize={{ base: "xs", md: "sm" }}
										flexShrink='0'>
										Or
									</Text>
									<Separator borderColor='#8692A6' />
								</HStack>

								{/* Google Register Button */}
								<Button
									w='full'
									size='lg'
									bg='black'
									color='white'
									_hover={{ bg: "blackAlpha.700" }}
									rounded='2xl'>
									<FaGoogle style={{ marginRight: "8px" }} />
									Register with Google
								</Button>
							</VStack>
						</VStack>
					</VStack>
				</Box>

				{/* Right side with illustration */}
				<Box
					w={{ base: "100%", md: "60%" }}
					h='full'
					display={{ base: "none", md: "flex" }}
					alignItems='center'
					justifyContent='center'
					position='relative'
					overflow='hidden'
					p={{ base: 5, md: 8 }}>
					<Image
						src='/signup-bg.png'
						alt='AI Assistant Illustration'
						objectFit='cover'
						w='full'
						h='full'
						borderRadius={{ base: "none", md: "18px" }}
					/>
				</Box>
			</Flex>
		</Container>
	);
};

export default SignUpPage;
