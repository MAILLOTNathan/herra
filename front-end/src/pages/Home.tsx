import { Flowbite } from "flowbite-react";

import herraTheme from "../Theme";

import NavBar from "../components/NavBar";
import Map from "../components/Map";
import MyFooter from "../components/MyFooter";
import SearchBar from "../components/SearchBar";
import Signaler from "../components/Signaler";

export default function Home() {
    return (
        <Flowbite theme={{ theme: herraTheme }}>
            <div>
                <NavBar currentRoute="/" />
                <div className="mx-auto w-screen">
                    <SearchBar />
                    <Map />
                </div>
                <MyFooter styleClass=""/>
            </div>
            <Signaler />
        </Flowbite>
    );
}