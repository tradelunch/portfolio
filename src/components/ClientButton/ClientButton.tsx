'use client';
import React from 'react';
import clsx from 'clsx';

import { Button, Spinner } from '@material-tailwind/react';

type Props = any;

export const ClientButton = (props: Props) => {
    return (
        <Button {...props}>
            {/* <Spinner /> */}
            {props.children}
        </Button>
    );
};

export default ClientButton;
