import { create } from "zustand";

type ToastMessage = {
    text: string;
    type: 'sucess' | 'danger'| 'warning' | 'info'
}

type ToastStore = {
    text?: ToastMessage;
    setMessage: (message?: ToastMessage) => void;
}

export const useToastStore = create<ToastStore>((set)=>({
    text: undefined,
    setMessage: (text) => set((state)=> ({
        ...state, text
    })),
}));