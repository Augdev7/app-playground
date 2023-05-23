import React from 'react';

const Title = ({ title, des }) => {
    return (
        <div className="font-titleFont mb-14 flex flex-col gap-4">
            <h3 className="text-designColor text-sm font-light uppercase tracking-wide">{title}</h3>
            <h1 className="text-4xl font-bold capitalize text-gray-300 md:text-5xl">{des}</h1>
        </div>
    );
};

export default Title;
