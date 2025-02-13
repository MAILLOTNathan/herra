import { Flowbite } from "flowbite-react";

import herraTheme from "../Theme";

import NavBar from "../components/NavBar";
import Map from "../components/Map";
import MyFooter from "../components/MyFooter";
import SearchBar from "../components/SearchBar";
import Signaler from "../components/Signaler";
import Scroller from "../components/Scroller";
import Poster from "../components/Poster";
import BackToHead from "../components/BackToHead";

export default function Feed() {
    return (
        <Flowbite theme={{ theme: herraTheme }}>
            <NavBar currentRoute="fil" />
                <Poster />
                <Scroller />
            <MyFooter styleClass=""/>
            <BackToHead />
        </Flowbite>
    );
}
