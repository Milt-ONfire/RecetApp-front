import { create } from 'zustand'

type Store = {
  selected: number | null
  setSelected: (newSelected: number | null) => void
}

const useStore = create<Store>()((set) => ({
  selected: null,
  setSelected: (newSelected) => set({ selected: newSelected }),
}))

export default useStore
