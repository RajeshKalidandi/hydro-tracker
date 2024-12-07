import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  useBreakpointValue,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaWater, FaChartLine, FaTrophy, FaBell } from 'react-icons/fa'
import { FC } from 'react'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

interface FeatureCardProps {
  icon: JSX.Element
  title: string
  description: string
  delay: number
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <MotionBox
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    bg="white"
    p={6}
    rounded="xl"
    shadow="lg"
    _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
  >
    <IconButton
      aria-label={title}
      icon={icon}
      size="lg"
      fontSize="3xl"
      bgGradient="linear(to-r, blue.400, teal.400)"
      color="white"
      rounded="full"
      mb={4}
    />
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text color="gray.600">{description}</Text>
  </MotionBox>
)

const features: FeatureCardProps[] = [
  {
    icon: <FaWater />,
    title: 'Smart Tracking',
    description: 'Effortlessly track your daily water intake with intelligent reminders',
    delay: 0.4,
  },
  {
    icon: <FaChartLine />,
    title: 'Detailed Analytics',
    description: 'Visualize your hydration patterns with beautiful charts',
    delay: 0.6,
  },
  {
    icon: <FaTrophy />,
    title: 'Achievement System',
    description: 'Earn rewards and maintain streaks for staying hydrated',
    delay: 0.8,
  },
  {
    icon: <FaBell />,
    title: 'Smart Reminders',
    description: 'Get personalized reminders based on your daily routine',
    delay: 1.0,
  },
]

const Onboarding: FC = () => {
  const navigate = useNavigate()
  const imageSize = useBreakpointValue({ base: '200px', md: '300px' }) as string

  return (
    <Box minH="100vh" bgGradient="linear(to-b, blue.50, white)" overflow="hidden">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={12}>
          <MotionBox
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            textAlign="center"
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, blue.400, teal.400)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
              mb={4}
            >
              Track Your Hydration Journey
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              Stay healthy and energized with India&apos;s most advanced water intake tracking app
            </Text>
          </MotionBox>

          <MotionFlex
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            justify="center"
            align="center"
            position="relative"
            w="full"
          >
            <MotionBox
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/water-drop.svg"
                alt="Water Drop"
                w={imageSize}
                h={imageSize}
                filter="drop-shadow(0 0 20px rgba(0,149,255,0.3))"
              />
            </MotionBox>
          </MotionFlex>

          <Box w="full" py={8}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={6} justify="center">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </Flex>
          </Box>

          <MotionBox
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Button
              size="lg"
              px={12}
              py={7}
              fontSize="xl"
              bgGradient="linear(to-r, blue.400, teal.400)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, blue.500, teal.500)',
                transform: 'translateY(-2px)',
                shadow: 'xl',
              }}
              onClick={() => navigate('/dashboard')}
              rounded="full"
              shadow="md"
            >
              Get Started
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Onboarding
