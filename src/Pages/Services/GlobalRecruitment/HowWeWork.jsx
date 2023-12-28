const HowWeWork = ({title, value}) => {
    return (
        <div className="mx-auto md:w-7/12 my-1 bg-yellow-100 rounded-lg">
            <p className="text-red-900 text-xl text-center font-bold">{title}</p>
            <h3 className="text font-bold text-gray-600 pl-2">{value}</h3>
        </div>
    );
};

export default HowWeWork;