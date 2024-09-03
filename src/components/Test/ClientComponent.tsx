'use client';

import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery.hook';
import { DARK_MODE_QUERY } from '@/utils';

import { useTheme } from 'next-themes';
import { Button, buttonVariants } from '@/components/ui/button';

import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { ReloadIcon } from '@radix-ui/react-icons';

type Props = {};

export const ClientComponent = (props: Props) => {
    return (
        <>
            {/* <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Destructive</Button>
            <Button
                size={'sm'}
                variant="ghost"
            >
                Ghost
            </Button>
            <Button>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button variant="outline">Outline</Button>
            <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button> */}
        </>
    );
};
