import Post from "../interface/Post";

import PostCard from "./PostCard";

const posts: Post[] = [
    {
        user: {
            name: "John Doe",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            email: "john.doe@example.com",
            id: 1,
            age: 25,
            friends: [],
        },
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gpsPoint: [48.8566, 2.3522],
        time: "2023-10-01T12:00:00Z",
        likes: 10,
    },
    {
        user: {
            name: "Jane Doe",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            email: "jane.doe@example.com",
            id: 2,
            age: 28,
            friends: [],
        },
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gpsPoint: null,
        time: "2023-10-02T12:00:00Z",
        likes: 5,
    },
    {
        user: {
            name: "John Smith",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
            email: "john.smith@example.com",
            id: 3,
            age: 30,
            friends: [],
        },
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        gpsPoint: [48.8566, 2.3522],
        time: "2023-10-03T12:00:00Z",
        likes: 8,
    }
];

export default function Scroller() {
    return (
        <div className="overflow-y-auto h-[85 vh] flex flex-col gap-4 mt-4 mx-auto">
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
}