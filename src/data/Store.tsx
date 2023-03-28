import { create } from 'zustand'

export const useTabStore = create((set) => ({
	activeTab: "About Me",
	setActiveTab: (tab: string) => set({ activeTab: tab }),
}))
