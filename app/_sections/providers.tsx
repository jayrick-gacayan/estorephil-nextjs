'use client'
import { RootState, store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux'

export default function Providers({ children }: { children: ReactNode }) {

    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    );
}