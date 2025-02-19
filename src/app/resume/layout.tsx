import { Metadata } from 'next';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: 'Taek Lim resume',
    description:
        'resume, profile, work experience, education, java, javascript, georgia institute of Technology, UCLA, software engineer',
};

const layout = (props: Props) => {
    const test = 'test';

    return <div>{props.children}</div>;
};

export default layout;
