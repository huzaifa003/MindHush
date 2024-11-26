import React from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Input,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Spiral = () => (
	<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
		<defs>
			<linearGradient id='spiralGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
				<stop offset='0%' stopColor='#2DD4BF' />
				<stop offset='100%' stopColor='#A855F7' />
			</linearGradient>
		</defs>
		<path
			d='M200,200 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0 Z'
			fill='none'
			stroke='url(#spiralGradient)'
			strokeWidth='40'
			transform='rotate(45 200 200)'>
			<animateTransform
				attributeName='transform'
				type='rotate'
				from='0 200 200'
				to='360 200 200'
				dur='20s'
				repeatCount='indefinite'
			/>
		</path>
		<circle cx='200' cy='200' r='80' fill='#2DD4BF' opacity='0.3' />
		<circle cx='200' cy='200' r='40' fill='#A855F7' opacity='0.3' />
	</svg>
);

const SignInPage = () => {
	const bgColor = useColorModeValue("gray.900", "gray.900");
	const textColor = useColorModeValue("white", "white");

	return (
		<Container maxW='100vw' h='100vh' p={0} bg={bgColor}>
			<Flex h='full'>
				{/* Left side with spiral animation */}
				<Box w='50%' position='relative' overflow='hidden'>
					<Box
						position='absolute'
						top='50%'
						left='50%'
						transform='translate(-50%, -50%)'
						w='full'
						h='full'
						opacity={0.8}>
						<Spiral />
					</Box>
				</Box>

				{/* Right side with sign in form */}
				<Flex
					w='50%'
					direction='column'
					justify='center'
					p={12}
					color={textColor}>
					<VStack spacing={8} align='stretch' maxW='400px' mx='auto'>
						<Heading size='2xl' mb={6}>
							SIGN IN
						</Heading>

						<Text mb={4}>Sign in with email address</Text>

						<VStack spacing={4}>
							<Input
								placeholder='Yourname@gmail.com'
								size='lg'
								variant='filled'
								bg='gray.800'
								_hover={{ bg: "gray.700" }}
								_focus={{ bg: "gray.700" }}
							/>

							<Input
								type='password'
								placeholder='Password'
								size='lg'
								variant='filled'
								bg='gray.800'
								_hover={{ bg: "gray.700" }}
								_focus={{ bg: "gray.700" }}
							/>

							<Button
								w='full'
								size='lg'
								bg='linear-gradient(to right, #A855F7, #2DD4BF)'
								_hover={{
									opacity: 0.9,
								}}>
								Sign up
							</Button>
						</VStack>

						<Box textAlign='center' pt={4}>
							<Text mb={4}>Or continue with</Text>
							<Flex gap={4} justify='center'>
								<Button
									leftIcon={<FaGoogle />}
									variant='outline'
									size='lg'
									flex={1}>
									Google
								</Button>
								<Button
									leftIcon={<FaFacebook />}
									variant='outline'
									size='lg'
									flex={1}>
									Facebook
								</Button>
							</Flex>
						</Box>

						<Text fontSize='sm' textAlign='center'>
							By registering you with our{" "}
							<Text as='span' color='purple.400'>
								Terms and Conditions
							</Text>
						</Text>
					</VStack>
				</Flex>
			</Flex>
		</Container>
	);
};

export default SignInPage;
