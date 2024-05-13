// import { create } from 'zustand'

// type State = {
//   currentIndex: number
//   // total: number
// }
// type Actions = {
//   setCurrentIndex: (index: number) => void
//   // setTotal: (total: number) => void
//   // next: () => void
//   // prev: () => void
//   reset: () => void
// }

// const initialState: State = {
//   currentIndex: 0,
//   // total: 0,
// }

// export const useWfdControl = create<State & Actions>((set) => ({
//   ...initialState,
//   setCurrentIndex: (index) => {
//     console.log('setCurrentIndex', index)
//     set({ currentIndex: index })
//   },
//   // setTotal: (total) => set({ total }),
//   // next: () => {
//   //   const { currentIndex, total } = get()

//   //   if (currentIndex + 1 >= total) {
//   //     set({ currentIndex: 0 })
//   //   } else {
//   //     set({ currentIndex: currentIndex + 1 })
//   //   }
//   // },
//   // prev: () => {
//   //   const { currentIndex, total } = get()
//   //   if (currentIndex - 1 < 0) {
//   //     set({ currentIndex: total - 1 })
//   //   } else {
//   //     set({ currentIndex: currentIndex - 1 })
//   //   }
//   // },
//   reset: () => set({ ...initialState }),
// }))
