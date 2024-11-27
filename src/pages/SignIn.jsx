import React from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Input,
	Separator,
	Text,
	VStack,
	useBreakpointValue,
	HStack,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { InputGroup } from "@/components/ui/input-group";
import { LuKey, LuMail } from "react-icons/lu";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router";

const SignInPage = () => {
	const { isAuthenticated, login } = useAuth();
	const navigate = useNavigate();

	const flexDirection = useBreakpointValue({ base: "column", md: "row" });
	const formWidth = useBreakpointValue({ base: "100%", md: "40%" });
	const formAlignItems = useBreakpointValue({ base: "center" });
	const formJustifyContent = useBreakpointValue({
		base: "center",
		md: "flex-start",
	});
	const logoWidth = useBreakpointValue({ base: "120px", md: "150px" });

	const handleSubmit = () => {
		login();
		navigate("/");
	};

	return (
		<Container maxW='100vw' h='100vh' p={0} position='relative'>
			{/* Flexbox layout */}
			<Flex
				h='full'
				direction={flexDirection}
				align={formAlignItems}
				justify={formJustifyContent}>
				{/* Left side with image */}
				<Box
					w={{ base: "100%", md: "60%" }}
					h='full'
					display={{ base: "none", md: "flex" }}
					alignItems='center'
					justifyContent='center'
					position='relative'
					overflow='hidden'>
					<Image
						src='/signin-bg.png'
						alt='Sign-in Illustration'
						objectFit='cover'
						w='full'
						h='full'
						scale={1.1}
					/>
				</Box>

				{/* Right side with form */}
				<Box
					w={formWidth}
					p={{ base: 6, md: 8 }}
					h='100vh'
					my='auto'
					overflowY='auto'>
					<VStack maxW='400px' mx='auto' gapY={10}>
						{/* Logo */}
						<Box
							alignSelf='flex-start'
							w={logoWidth}
							mt={{ base: 10, md: 0 }}
							mb={10}>
							<Image src='/logo.png' alt='Company Logo' />
						</Box>

						<VStack align='stretch' spaceY={{ base: 6, md: 8 }} w='full'>
							{/* Form Header */}
							<Box textAlign='left'>
								<Heading
									color='white'
									fontWeight='bold'
									fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
									mb={10}>
									SIGN IN
								</Heading>
								<Text color='gray.400' fontSize={{ base: "sm", md: "md" }}>
									Sign in with your email address
								</Text>
							</Box>

							{/* Form Fields */}
							<VStack gapY={4} align='stretch'>
								{/* Email Input */}
								<InputGroup
									flex='1'
									startElement={<LuMail />}
									w='full'
									size='lg'>
									<Input
										placeholder='Yourname@gmail.com'
										size='lg'
										variant='filled'
										bg='secondary.50'
										border='1px solid #8692A6'
										w='full'
									/>
								</InputGroup>

								{/* Password Input */}
								<InputGroup flex='1' startElement={<LuKey />} w='full'>
									<PasswordInput
										placeholder='Password'
										size='lg'
										variant='filled'
										bg='secondary.50'
										border='1px solid #8692A6'
										w='full'
									/>
								</InputGroup>

								{/* Sign In Button */}
								<Button
									w='full'
									size='lg'
									color='white'
									rounded='xl'
									border='none'
									bg='linear-gradient(to right, #7B2C97, #008080)'
									_hover={{
										opacity: 0.9,
									}}
									mt={2}
									onClick={handleSubmit}>
									Sign in
								</Button>

								{/* Separator */}
								<Separator my={4} borderColor='secondary.30' />

								<Text fontSize='sm'>Or continue with</Text>

								{/* Social Login Buttons */}
								<HStack gap={4} justify='center' w='full'>
									<Button
										variant='outline'
										size='lg'
										bg='gray.800'
										_hover={{ bg: "gray.700" }}
										flex='1'>
										<FaGoogle style={{ marginRight: "8px" }} />
										Google
									</Button>
									<Button
										variant='outline'
										size='lg'
										bg='gray.800'
										_hover={{ bg: "gray.700" }}
										flex='1'>
										<FaFacebook style={{ marginRight: "8px" }} />
										Facebook
									</Button>
								</HStack>

								{/* Terms and Conditions */}
								<Text fontSize='sm' mt={4}>
									By registering you agree to our{" "}
									<Text as='span' color='purple.400'>
										Terms and Conditions
									</Text>
								</Text>
							</VStack>
						</VStack>
					</VStack>
				</Box>
			</Flex>
		</Container>
	);
};

export default SignInPage;
