import apiClient from './client'

export interface WaterIntakeData {
  amount: number
  type: string
  notes?: string
}

export const logWaterIntake = async (data: WaterIntakeData) => {
  const response = await apiClient.post('/water-intake', data)
  return response.data
}

export const getTodayIntake = async () => {
  const response = await apiClient.get('/water-intake/today')
  return response.data
}
