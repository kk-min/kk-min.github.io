import { create } from 'zustand'

export interface TabState {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export const useTabStore = create<TabState>((set) => ({
	activeTab: "About Me",
	setActiveTab: (tab: string) => set({ activeTab: tab }),
}))
