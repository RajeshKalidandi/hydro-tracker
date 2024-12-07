import create from 'zustand'
import { logWaterIntake, getTodayIntake, WaterIntakeData } from '../api/water'

interface WaterStore {
  todayIntake: number
  isLoading: boolean
  error: string | null
  addWaterIntake: (data: WaterIntakeData) => Promise<void>
  fetchTodayIntake: () => Promise<void>
}

export const useWaterStore = create<WaterStore>(set => ({
  todayIntake: 0,
  isLoading: false,
  error: null,
  addWaterIntake: async data => {
    try {
      set({ isLoading: true, error: null })
      await logWaterIntake(data)
      const todayData = await getTodayIntake()
      set({ todayIntake: todayData.total_intake })
    } catch (error) {
      set({ error: 'Failed to log water intake' })
    } finally {
      set({ isLoading: false })
    }
  },
  fetchTodayIntake: async () => {
    try {
      set({ isLoading: true, error: null })
      const data = await getTodayIntake()
      set({ todayIntake: data.total_intake })
    } catch (error) {
      set({ error: "Failed to fetch today's intake" })
    } finally {
      set({ isLoading: false })
    }
  },
}))
