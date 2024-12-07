import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Text,
  Badge,
  Progress,
  Box,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WiRaindrop } from 'react-icons/wi'
import { Achievement } from '../types'

const MotionBox = motion(Box)

interface AchievementCardProps {
  achievement: Achievement
  index: number
}

interface AchievementsModalProps {
  isOpen: boolean
  onClose: () => void
  achievements: Achievement[]
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    bg="white"
    p={4}
    rounded="lg"
    shadow="md"
    border="1px"
    borderColor="gray.100"
  >
    <Text fontWeight="bold" mb={2}>
      {achievement.title}
    </Text>
    <Text color="gray.600" fontSize="sm" mb={3}>
      {achievement.description}
    </Text>
    <Progress value={achievement.progress} colorScheme="blue" size="sm" mb={2} rounded="full" />
    <Text fontSize="xs" color="gray.500" mb={2}>
      Progress: {achievement.progress}%
    </Text>
    {achievement.isCompleted && <Badge colorScheme="green">Completed!</Badge>}
  </MotionBox>
)

const AchievementsModal = ({ isOpen, onClose, achievements }: AchievementsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Icon as={WiRaindrop} color="blue.400" boxSize={6} />
            <Text>Your Achievements</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AchievementsModal
