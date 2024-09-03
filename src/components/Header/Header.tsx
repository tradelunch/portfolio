import React from 'react';
import clsx from 'clsx';

import { NavItem } from './NavItem';

import { ThemeButton } from '@/components/ThemeButton';

enum Menu {
    HOME = 'Taek Lim',
    // ABOUT = 'about',
    EDUCATION = 'Education',
    WORK = 'Work',
    PROJECTS = 'Projects',
    RESUME = 'Resume',
}

const ROUTES = {
    [Menu.HOME]: '/',
    // [Menu.ABOUT]: '/about',
    [Menu.EDUCATION]: '/education',
    [Menu.WORK]: '/work',
    [Menu.PROJECTS]: '/projects',
    [Menu.RESUME]: '/resume',
};

type Props = {};

const Header = (props: Props) => {
    return (
        <header
            className={clsx(
                'flex items-center justify-between',
                ' py-4 px-6',
                'bg-primary text-primary-foreground',
            )}
        >
            <nav className={clsx('flex flex-1 justify-between')}>
                <NavItem
                    className={clsx('text-2xl', 'font-bold')}
                    name={Menu.HOME}
                    to={ROUTES[Menu.HOME]}
                />

                <ul
                    className={clsx(
                        'flex items-center justify-center',
                        'gap-4',
                    )}
                >
                    {/* <li className={clsx('flex justify-center items-center')}>
                        <NavItem
                            name={Menu.ABOUT}
                            to={ROUTES[Menu.ABOUT]}
                        />
                    </li> */}
                    <li>
                        <NavItem
                            name={Menu.PROJECTS}
                            to={ROUTES[Menu.PROJECTS]}
                        />
                    </li>
                    <li>
                        <NavItem
                            name={Menu.EDUCATION}
                            to={ROUTES[Menu.EDUCATION]}
                        />
                    </li>
                    <li>
                        <NavItem
                            name={Menu.WORK}
                            to={ROUTES[Menu.WORK]}
                        />
                    </li>
                    <li>
                        <NavItem
                            name={Menu.RESUME}
                            to={ROUTES[Menu.RESUME]}
                        />
                    </li>
                    <li>
                        <ThemeButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
