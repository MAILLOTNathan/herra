import React from "react"

const Like: React.FC<{ state: boolean }> = ({state}) => {
    return (
        <div className="flex flex-row items-center cursor-pointer">
            {
                state === false ?
                <img src="assets/heart_reg.svg" alt="heart" className="w-8 h-8" />
                :
                <img src="assets/heart.svg" alt="heart" className="w-8 h-8" />
            }
        </div>
    );
}

export default Like;