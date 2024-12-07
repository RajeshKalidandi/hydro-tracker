export interface Achievement {
  id: string
  title: string
  description: string
  progress: number
  isCompleted: boolean
  icon: string
}

export interface WaterIntake {
  id: string
  amount: number
  timestamp: string
  userId: string
}

export interface DailyStats {
  date: string
  totalIntake: number
  goal: number
  percentage: number
}

export interface UserProfile {
  id: string
  name: string
  email: string
  dailyGoal: number
  unit: 'ml' | 'oz'
  timezone: string
}

export interface APIResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface StatsCardProps {
  icon: JSX.Element
  title: string
  value: string
  subtitle: string
  delay: number
}

export interface AchievementCardProps {
  achievement: Achievement
  index: number
}
