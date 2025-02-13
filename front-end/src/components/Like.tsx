import React from "react"

import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like: React.FC<{ state: boolean }> = ({state}) => {
    return (
        <div className="flex flex-row items-center cursor-pointer">
            {
                state === false ?
                <FaRegHeart className="text-accent text-2xl" />
                :
                <FaHeart className="text-accent text-2xl" />
            }
        </div>
    );
}

export default Like;