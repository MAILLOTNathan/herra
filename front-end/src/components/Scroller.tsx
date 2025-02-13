import Post from "../interface/Post";

import PostCard from "./PostCard";

const Scroller: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div className="overflow-y-auto h-[85 vh] flex flex-col gap-4 mt-4 mx-auto">
            {posts.sort((postA, postB) => Date.parse(postB.time) - Date.parse(postA.time)).map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
}

export default Scroller;