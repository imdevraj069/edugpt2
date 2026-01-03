import { create } from 'zustand';

interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

interface SessionState {
    // Session State
    isSessionActive: boolean;
    sessionStartTime: Date | null;
    currentTopic: string | null;
    currentSubject: string | null;

    // Chat State
    chatHistory: ChatMessage[];
    isAISpeaking: boolean;
    isUserSpeaking: boolean;

    // Teaching Board State
    currentSlideIndex: number;
    totalSlides: number;
    slideContent: string | null;

    // Actions
    startSession: (topic: string, subject: string) => void;
    endSession: () => void;
    addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
    clearChatHistory: () => void;
    setIsAISpeaking: (isSpeaking: boolean) => void;
    setIsUserSpeaking: (isSpeaking: boolean) => void;
    setCurrentSlide: (index: number) => void;
    setSlideContent: (content: string | null) => void;
    setTotalSlides: (total: number) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
    // Initial State
    isSessionActive: false,
    sessionStartTime: null,
    currentTopic: null,
    currentSubject: null,
    chatHistory: [],
    isAISpeaking: false,
    isUserSpeaking: false,
    currentSlideIndex: 0,
    totalSlides: 0,
    slideContent: null,

    // Actions
    startSession: (topic, subject) =>
        set({
            isSessionActive: true,
            sessionStartTime: new Date(),
            currentTopic: topic,
            currentSubject: subject,
            chatHistory: [],
            currentSlideIndex: 0,
        }),

    endSession: () =>
        set({
            isSessionActive: false,
            sessionStartTime: null,
            currentTopic: null,
            currentSubject: null,
            chatHistory: [],
            isAISpeaking: false,
            isUserSpeaking: false,
            currentSlideIndex: 0,
            slideContent: null,
        }),

    addMessage: (message) =>
        set((state) => ({
            chatHistory: [
                ...state.chatHistory,
                {
                    ...message,
                    id: crypto.randomUUID(),
                    timestamp: new Date(),
                },
            ],
        })),

    clearChatHistory: () => set({ chatHistory: [] }),
    setIsAISpeaking: (isSpeaking) => set({ isAISpeaking: isSpeaking }),
    setIsUserSpeaking: (isSpeaking) => set({ isUserSpeaking: isSpeaking }),
    setCurrentSlide: (index) => set({ currentSlideIndex: index }),
    setSlideContent: (content) => set({ slideContent: content }),
    setTotalSlides: (total) => set({ totalSlides: total }),
}));
