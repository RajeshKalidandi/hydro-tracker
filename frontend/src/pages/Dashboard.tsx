import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  IconButton,
  Button,
  CircularProgress,
  CircularProgressLabel,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaPlus, FaMinus, FaTrophy } from 'react-icons/fa'
import { useWaterStore } from '../store/waterStore'
import AchievementsModal from '../components/AchievementsModal'

const MotionBox = motion(Box)

interface StatsCardProps {
  title: string
  value: string | number
  subtitle: string
}

const StatsCard: FC<StatsCardProps> = ({ title, value, subtitle }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
    bg="white"
    p={6}
    rounded="xl"
    shadow="lg"
    textAlign="center"
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      top: '20px',
      left: '20px',
      right: '50%',
      bottom: '20px',
      background: 'linear-gradient(180deg, #63B3ED 0%, #4299E1 100%)',
      filter: '0 4px 12px rgba(66, 153, 225, 0.3)',
      opacity: 0.1,
      borderRadius: 'xl',
      zIndex: 0,
    }}
  >
    <Heading size="lg" mb={2}>
      {title}
    </Heading>
    <Text fontSize="3xl" fontWeight="bold" color="blue.500">
      {value}
    </Text>
    <Text fontSize="sm" color="gray.500">
      {subtitle}
    </Text>
  </MotionBox>
)

const Dashboard: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { todayIntake, addWater, removeWater } = useWaterStore()
  const dailyGoal = 2000 // ml
  const progress = Math.min((todayIntake / dailyGoal) * 100, 100)

  const handleAddWater = () => {
    addWater(250)
  }

  const handleRemoveWater = () => {
    if (todayIntake >= 250) {
      removeWater(250)
    }
  }

  return (
    <Box minH="100vh" bgGradient="linear(to-b, blue.50, white)" py={8} overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Flex w="full" justify="space-between" align="center">
            <Heading size="xl" mb={2} bgGradient="linear(to-r, blue.400, teal.400)" bgClip="text">
              Daily Progress
            </Heading>
            <Button
              leftIcon={<FaTrophy />}
              colorScheme="yellow"
              variant="solid"
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.button}
            >
              Achievements
            </Button>
          </Flex>

          <Box
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CircularProgress
              value={progress}
              size="300px"
              thickness="8px"
              color="blue.400"
              trackColor="blue.100"
            >
              <CircularProgressLabel>
                <VStack spacing={0}>
                  <Text fontSize="4xl" fontWeight="bold" color="blue.500">
                    {todayIntake}ml
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    of {dailyGoal}ml
                  </Text>
                </VStack>
              </CircularProgressLabel>
            </CircularProgress>
          </Box>

          <Flex gap={4}>
            <Tooltip label="Remove 250ml" placement="top">
              <IconButton
                aria-label="Remove water"
                icon={<FaMinus />}
                colorScheme="red"
                variant="outline"
                size="lg"
                isDisabled={todayIntake < 250}
                onClick={handleRemoveWater}
              />
            </Tooltip>
            <Tooltip label="Add 250ml" placement="top">
              <IconButton
                aria-label="Add water"
                icon={<FaPlus />}
                colorScheme="blue"
                size="lg"
                onClick={handleAddWater}
              />
            </Tooltip>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            <StatsCard title="Today" value={`${todayIntake}ml`} subtitle="Water intake" />
            <StatsCard title="Goal" value={`${dailyGoal}ml`} subtitle="Daily target" />
            <StatsCard
              title="Progress"
              value={`${Math.round(progress)}%`}
              subtitle="Of daily goal"
            />
          </SimpleGrid>
        </VStack>

        <AchievementsModal isOpen={isOpen} onClose={onClose} achievements={[]} />
      </Container>
    </Box>
  )
}

export default Dashboard
