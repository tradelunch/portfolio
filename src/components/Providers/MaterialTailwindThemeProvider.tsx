'use client';

import * as React from 'react';
import { ThemeProvider } from '@material-tailwind/react';

type Props = {
    children: any;
};
export function MaterialTailwindThemeProvider({ children, ...props }: Props) {
    return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

export default MaterialTailwindThemeProvider;
