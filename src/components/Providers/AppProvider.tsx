'use client';
import React from 'react';

import { ChandCNThemeProvider } from '@components/Providers';
import { MaterialTailwindThemeProvider } from '@components/Providers';

type Props = {
    children?: React.ReactNode;
};

export const AppProvider = (props: Props) => {
    return (
        <ChandCNThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <MaterialTailwindThemeProvider>
                {props?.children}
            </MaterialTailwindThemeProvider>
        </ChandCNThemeProvider>
    );
};
