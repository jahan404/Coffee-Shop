
const Heading = ({heading,subtitle}) => {
    return (
        <div className="flex flex-col gap-2 py-10 justify-center items-center">
            <h1 className="text-4xl font-bold">{heading}</h1>
            <p className="text-base text-gray-500 font-light">{subtitle}</p>
        </div>
    );
};

export default Heading;