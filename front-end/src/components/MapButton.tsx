import { FaMap } from 'react-icons/fa';

export default function MapButton() {
    return (
        <div className="flex flex-row items-center cursor-pointer">
            <FaMap className="text-accent text-2xl" />
        </div>
    );
}