import { create } from 'zustand'

export const useStore = create((set) => ({
    accountModelActive: false,
    }
))