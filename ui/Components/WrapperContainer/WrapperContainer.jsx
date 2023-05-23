import React, { useContext } from 'react';

import { ThemeBgContext } from '../ContextWrapper/ThemeContext';

const WrapperContainer = ({ navHead, children }) => {
    const { theme } = useContext(ThemeBgContext);
    return (
        <div
            className={
                !navHead
                    ? `container mx-auto px-4 ${
                          theme === 'light' ? ' bg-wrapperBg' : 'bg-wrapperDark'
                      } h-full w-full -translate-y-36 rounded-xl bg-cover bg-center bg-no-repeat drop-shadow-2xl`
                    : 'container mx-auto px-4'
            }
        >
            {children}
        </div>
    );
};

export default WrapperContainer;
