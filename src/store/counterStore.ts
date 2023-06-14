import { create } from 'zustand';

interface Post {
    id: number
    title: string
    body: string
};

interface CounterTypes {
    posts: Post[]
    getPost: () => Promise<void>
    count: number
    title: string
    increment: (value: number) => void
    clearStore: () => void
    multiply: (value: number) => void
};

export const useCounterStore = create<CounterTypes>((set, get) => ({

    posts: [],
    getPost: async () => {
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        set(state => ({ ...state, posts }));
        console.log(posts);
        localStorage.setItem('posts', JSON.stringify(posts));
    },

    count: 0,
    title: 'Counter',
    increment: (value: number) => set(state => ({
        count: state.count + value
    })),

    clearStore: () => {
        set({}, true)
    },

    multiply: (value: number) => {
        const { count } = get();
        set({ count: count * value });
    }

}));