import { Textarea, Avatar, Button } from 'flowbite-react'

import { LatLngTuple } from 'leaflet';

import React, { useState } from 'react';

import { FaPaperPlane } from 'react-icons/fa';

import Post from '../interface/Post';

import Locate from './Locate';
import MapButton from './MapButton';

const Poster: React.FC<{ callBack: (post: Post) => void }> = ({ callBack }) => {
    const [comment, setComment] = useState<string>('');
    const [gpsPoint, setGpsPoint] = useState<LatLngTuple>();

    function post() {
        if (!comment) {
            alert("Veuillez écrire un commentaire.");
            return;
        }
        const post: Post = {
            user: {
                name: "Marie Smith",
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                email: "marie.smith@hera.com",
                id: 1,
                age: 25,
                friends: [],
            },
            comment: comment,
            gpsPoint: gpsPoint && gpsPoint.length === 2 ? gpsPoint : null,
            time: new Date().toISOString(),
            likes: 0,
        };
        callBack(post);
        setComment('');
        setGpsPoint(undefined);
    }

    function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setComment(event.target.value);
    }

    return (
        <div className="flex flex-col bg-light border-primary p-8 m-8 border-2 rounded-lg space-y-8">
            <span className='flex flex-row items-center space-x-4'>
                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
                <Textarea placeholder="Ecrire un post" className='w-full' onChange={handleCommentChange} value={comment} />
            </span>
            <div className="flex flex-row items-center justify-between">
                <span className='flex flex-row space-x-8' onClick={async () => await navigator.geolocation.getCurrentPosition((position) => setGpsPoint([position.coords.latitude, position.coords.longitude]))}>
                    <Locate />
                    <MapButton />
                </span>
                <Button color="purple" className='items-center' onClick={post}>
                    Poster
                    <FaPaperPlane className="ml-2 text-accent" />
                </Button>
            </div>
        </div>
    );
}

export default Poster;