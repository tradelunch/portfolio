import dynamic from 'next/dynamic';

export * from './ClientButton';

export const ClientButton = dynamic(
    () => import('./ClientButton').then((arg) => arg),
    {
        loading: () => <p>Loading...</p>,
    }
);
