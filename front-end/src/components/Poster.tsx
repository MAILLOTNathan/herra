import { Textarea, Avatar, Button } from 'flowbite-react'

import { FaPaperPlane } from 'react-icons/fa';

import Locate from './Locate';
import MapButton from './MapButton';

export default function Poster() {
    return (
        <div className="flex flex-col bg-light border-primary p-8 m-8 border-2 rounded-lg space-y-8">
            <span className='flex flex-row items-center space-x-4'>
                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
                <Textarea placeholder="Ecrire un post" className='w-full' />
            </span>
            <div className="flex flex-row items-center justify-between">
                <span className='flex flex-row space-x-8'>
                    <Locate />
                    <MapButton />
                </span>
                <Button color="purple" className='items-center'>
                    Poster
                    <FaPaperPlane className="ml-2 text-accent" />
                </Button>
            </div>
        </div>
    );
}