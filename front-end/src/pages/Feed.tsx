import { Flowbite } from "flowbite-react";

import { useState } from "react";

import herraTheme from "../Theme";

import Post from "../interface/Post";

import NavBar from "../components/NavBar";
import MyFooter from "../components/MyFooter";
import Scroller from "../components/Scroller";
import Poster from "../components/Poster";
import BackToHead from "../components/BackToHead";

const defaultPosts: Post[] = [
    {
        user: {
            name: "John Doe",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
            email: "john.doe@example.com",
            id: 1,
            age: 25,
            friends: [],
        },
        comment: "Ne passez pas ici seule entre 12h et 15h !",
        gpsPoint: [48.8566, 2.3522],
        time: "2023-10-01T12:00:00Z",
        likes: 10,
    },
    {
        user: {
            name: "Jane Doe",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
            email: "jane.doe@example.com",
            id: 2,
            age: 28,
            friends: [],
        },
        comment: "Ne pas s'approcher de la boutique ChezToto aux alentours de 22h. Il est dangereux.",
        gpsPoint: null,
        time: "2023-10-02T12:00:00Z",
        likes: 5,
    },
    {
        user: {
            name: "John Smith",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            email: "john.smith@example.com",
            id: 3,
            age: 30,
            friends: [],
        },
        comment: "Attention, un groupe de jeunes suspects se trouve à proximité.",
        gpsPoint: [48.8566, 2.3522],
        time: "2023-10-03T12:00:00Z",
        likes: 8,
    }
];

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>(defaultPosts);

    function addPost(post: Post) {
        setPosts([...posts, post]);
    }

    return (
        <Flowbite theme={{ theme: herraTheme }}>
            <NavBar currentRoute="fil" />
                <Poster callBack={addPost}/>
                <Scroller posts={posts}/>
            <MyFooter styleClass=""/>
            <BackToHead />
        </Flowbite>
    );
}
