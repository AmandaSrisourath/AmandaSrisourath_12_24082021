import { Rectangle } from 'recharts';

const CustomCursor = ({ x }) => {
    return <Rectangle fill="rgba(0, 0, 0, 0.1)" width={258} height={263} x={x} />;
};

export default CustomCursor;