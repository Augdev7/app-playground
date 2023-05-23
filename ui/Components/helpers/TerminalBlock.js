/** @format */

import React from 'react';
import Draggable from 'react-draggable';
import { Maximize2 } from 'react-feather';

const TerminalBlock = props => {
    return (
        <h1 className="hidden md:absolute md:block">
            <Draggable defaultPosition={{ x: props.x, y: props.y }}>
                <div className="bg-secondaryBg right-20 top-10 h-[130px] w-[350px] rounded-2xl">
                    <div className="absolute flex h-6 w-full items-center justify-between rounded-t-2xl bg-[#343a40] px-4">
                        <div className="flex h-full items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-[#DA1B1B]"></div>
                            <div className="h-2 w-2 rounded-full bg-[#FFC700]"></div>
                            <div className="h-2 w-2 rounded-full bg-[#00DFAA]"></div>
                        </div>
                        <div>
                            <Maximize2 size={10} color="#FFF" />
                        </div>
                    </div>
                    <div className="absolute top-8 h-full w-full p-2">
                        <div className="px-2 font-['Share_Tech_Mono'] text-[14px] leading-6 text-[#fff] opacity-70">
                            {props.data}
                        </div>
                    </div>
                </div>
            </Draggable>
        </h1>
    );
};

export default TerminalBlock;
