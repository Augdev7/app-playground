const Title = ({ title, des }) => {
    return (
        <div className="font-titleFont mb-8 flex flex-col gap-4">
            <div className="h-1 w-[40px] flex-auto bg-[orange]" />
            <h3 className="text-designColor mb-[-8px] text-sm font-bold uppercase tracking-wide">
                {title}
            </h3>
            <h1 className="text-4xl font-extrabold capitalize text-gray-700 md:text-4xl">{des}</h1>
        </div>
    );
};

export default Title;
