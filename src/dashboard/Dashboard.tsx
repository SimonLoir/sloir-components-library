import * as React from 'react';
import { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

type DashboardProps = {
    logo: React.ReactNode;
    children: React.ReactNode;
};

export function Dashboard({ logo, children }: DashboardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    React.useEffect(() => {
        setDarkMode(localStorage.getItem('darkMode') === 'true');
    }, []);
    return (
        <div
            className={`fixed flex flex-row top-0 left-0 right-0 bottom-0 font-montserrat select-none ${
                darkMode ? 'dark' : 'white'
            }`}
        >
            <nav
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } bg-primary dark:bg-dark-lighter-gray flex-col basis-64 grow-0 shrink-0 lg:flex select-none`}
            >
                <div className='text-white grid justify-center items-center font-semibold text-2xl tracking-wide basis-[65px] grow-0 shrink-0'>
                    {logo}
                </div>
                <div className='flex flex-1 flex-col justify-between'>
                    <div></div>
                    <div></div>
                </div>
            </nav>

            <div className='flex flex-col bg-near-white dark:bg-dark-gray flex-1 max-w-full lg:max-w-main'>
                <header className='leading-[65px] px-8 shadow-sm z-90  border-b border-subtle-gray dark:border-dark-lighter-gray bg-white dark:bg-dark-gray  text-near-black dark:text-white select-none'>
                    <span
                        className='inline align-middle cursor-pointer lg:hidden'
                        onClick={() => setIsMenuOpen((o) => !o)}
                    >
                        {/*<CgMenu className='inline text-2xl mr-4' /> */}
                    </span>

                    {/*<h1
                        className={`${
                            isMenuOpen ? 'hidden' : 'inline'
                        } text-xl font-semibold tracking-wide align-middle sm:inline`}
                    >
                        {pageTitle}
                    </h1>
                    <UserMenu user={user} logout={logout} />
                    */}
                    <div
                        className='inline-block mr-4 float-right leading-[65px] h-[65px] cursor-pointer'
                        onClick={() => {
                            setDarkMode((d) => {
                                localStorage.setItem(
                                    'darkMode',
                                    (!d).toString()
                                );
                                return !d;
                            });
                        }}
                    >
                        {darkMode ? (
                            <BsFillSunFill className='inline text-white' />
                        ) : (
                            <BsFillMoonFill className='inline text-gray' />
                        )}
                    </div>
                </header>
                <main
                    className={`p-8 z-85 overflow-auto grow flex-1 ${
                        isMenuOpen ? 'hidden' : 'block'
                    } sm:block`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
