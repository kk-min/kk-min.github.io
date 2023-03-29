import { create } from 'zustand'

export interface TabState {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export interface PuzzleState {
	secret: string
	input: string
	lockStatus: string
	isAnimating: boolean
	firstRender: boolean
	resetSecret: () => void
	setLockStatus: (lockStatus: string) => void
	setInput: (input: string) => void
	setIsAnimating: (isAnimating: boolean) => void
}

const randomizerArray = ['1', '2', '3', '4'];
const getRandomSecret = (sourceArray: string[]) => {
	let secret: string = '';
	let tempArray = [...sourceArray];
	while (tempArray.length > 0) {
		let index = Math.floor(Math.random() * tempArray.length);
		let randomItem = tempArray[index];
		secret += randomItem;
		tempArray.splice(index, 1); // Remove selected item from array
	}
	return secret;
};

export const useTabStore = create<TabState>((set) => ({
	activeTab: "About Me",
	setActiveTab: (tab: string) => set({ activeTab: tab }),
}))

export const usePuzzleStore = create<PuzzleState>((set, get) => ({
	secret: getRandomSecret(randomizerArray),
	input: "",
	lockStatus: "default",
	isAnimating: true,
	firstRender: true,
	resetSecret: () => set({ secret: getRandomSecret(randomizerArray) }),
	setLockStatus: (lockStatus: string) => set({ lockStatus }),
	setInput: (input: string) => set({ input, lockStatus: input === get().secret ? "open" : input.length === 4 ? "error" : "default" }),
	setIsAnimating: (isAnimating: boolean) => set({ isAnimating }),
	setFirstRender: (firstRender: boolean) => set({ firstRender }),
}))
