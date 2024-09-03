import Link from 'next/link';
import React from 'react';

type Props = {
    name: string;
    to: string;
    className?: string;
};

export const NavItem = (props: Props) => {
    const { name, to, ...rest } = props;

    return (
        <Link
            href={to}
            {...rest}
        >
            {name}
        </Link>
    );
};
