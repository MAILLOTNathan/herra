import { Flowbite } from "flowbite-react";

import herraTheme from "../Theme";

import NavBar from "../components/NavBar";
import MyFooter from "../components/MyFooter";
import OffersCaroussel from "../components/OffersCaroussel";

export default function Offers() {
    return (
        <Flowbite theme={{ theme: herraTheme }}>
            <div className="bg-dark">
                <NavBar currentRoute="abonnements" />
                <span className="text-3xl text-white text-center flex justify-center font-bold pt-8">
                    Nos abonnements
                </span>
                <OffersCaroussel />
                <MyFooter styleClass=""/>
            </div>
        </Flowbite>
    );
}
