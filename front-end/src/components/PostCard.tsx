import React, { useState } from "react";

import { Avatar, Card } from "flowbite-react";
import { MapContainer, TileLayer, Marker, SVGOverlay } from "react-leaflet";

import Post from "../interface/Post";
import Like from "./Like";
import Share from "./Share";
import Locate from "./Locate";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    const [liked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!liked);
    }
    return (
        <Card className="w-[90%] m-4 mx-auto bg-light border-primary">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row">
                <Avatar img={post.user.avatar} alt={post.user.name} className="w-10 h-10 mx-4" />
                <span className="flex flex-col">
                    {post.user.name}
                    <span className="italic text-gray-500 dark:text-gray-400 text-xs">
                        {new Date(post.time).toLocaleDateString()}
                    </span>
                </span>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {post.comment}
            </p>
            {
                post.gpsPoint &&
                <MapContainer className="rounded-xl mx-auto" bounds={[post.gpsPoint, [post.gpsPoint[0] + 0.01, post.gpsPoint[1] + 0.01]]} style={{ height: "25vh", width: "60%", zIndex: 0 }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SVGOverlay attributes={{ stroke: "violet" }} bounds={[[post.gpsPoint[0], post.gpsPoint[1]], [post.gpsPoint[0] + 0.005, post.gpsPoint[1] + 0.005]]}>
                        <circle cx="50%" cy="50%" r="10" fill="magenta" />
                    </SVGOverlay>
                </MapContainer>
            }
            <div className="flex flex-row items-center justify-around">
                <span onClick={handleLike}>
                    <Like state={liked} />
                </span>
                <Share />
            </div>
        </Card>
    );
}

export default PostCard;
