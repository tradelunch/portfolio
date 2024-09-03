'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

import SunIcon from '@svg/sun.svg';
import MoonIcon from '@svg/moon.svg';
import { useIsMounted } from '@/hooks/useIsMounted.hook';

export enum Theme {
    dark = 'dark',
    light = 'light',
}

type Props = {};

export const ThemeButton = (props: Props) => {
    const { themes, theme, setTheme } = useTheme();
    const isDark = Theme.dark == theme;

    console.log(themes, theme, isDark);

    const handleOnClickTheme = () => {
        setTheme(isDark ? Theme.light : Theme.dark);
    };

    // const { isMounted } = useIsMounted();
    // if (!isMounted) {
    //     return null;
    // }

    return (
        <>
            <Button onClick={handleOnClickTheme}>
                {!isDark && <MoonIcon />}
                {isDark && <SunIcon />}
            </Button>
        </>
    );
};

export default ThemeButton;
