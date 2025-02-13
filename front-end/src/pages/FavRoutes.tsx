import { Flowbite } from "flowbite-react";

import herraTheme from "../Theme";

import NavBar from "../components/NavBar";
import MyFooter from "../components/MyFooter";

import Like from "../components/Like";
import Share from "../components/Share";

const routes = [
    {
        depart: "Paris",
        destination: "Lyon",
        distance: 465,
        lastUse: 5,
        favorite: true
    },
    {
        depart: "Marseille",
        destination: "Nice",
        distance: 200,
        lastUse: 48,
        favorite: false
    },
    {
        depart: "Bordeaux",
        destination: "Toulouse",
        distance: 245,
        lastUse: 72,
        favorite: true
    },
    {
        depart: "Lille",
        destination: "Bruxelles",
        distance: 110,
        lastUse: 15,
        favorite: false
    },
    {
        depart: "Nantes",
        destination: "Rennes",
        distance: 107,
        lastUse: 30,
        favorite: true
    },
    {
        depart: "Strasbourg",
        destination: "Colmar",
        distance: 72,
        lastUse: 10,
        favorite: false
    },
    {
        depart: "Grenoble",
        destination: "Chambéry",
        distance: 58,
        lastUse: 20,
        favorite: true
    },
    {
        depart: "Montpellier",
        destination: "Nîmes",
        distance: 52,
        lastUse: 8,
        favorite: false
    }
];

const RouteCard: React.FC<{ depart: string, destination: string, distance: number, lastUse: number, favourite: boolean }> = ({ depart, destination, distance, lastUse, favourite }) => {
    return (
        <div className="flex flex-col bg-light text-center rounded-lg shadow-lg p-4 m-4">
            <span className="text-lg font-bold text-primary">
                {depart} - {destination}
            </span>
            <span className="text-sm text-gray-500">
                {distance} km
            </span>
            <span className="text-sm text-gray-500">
                Il y a {" "}
                {lastUse < 24 ? `${lastUse} heures` : lastUse < 24 * 7 ? `${Math.floor(lastUse / 24)} jours` : lastUse < 24 * 30 ? `${Math.floor(lastUse / (24 * 7))} semaines` : `${Math.floor(lastUse / (24 * 30))} mois`}
            </span>
            <span className="flex flex-row justify-around">
                <Like state={favourite} />
                <Share />
            </span>
        </div>
    )
}

const  Recents: React.FC<{ routes: any[] }> = ({ routes }) => {
    return (
        <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary text-center mx-auto flex">
                Trajets récents
            </span>
            <span className="grid grid-cols-2 justify-between" >
                {routes
                    .sort((a, b) => b.lastUse - a.lastUse)
                    .slice(0, 2)
                    .map((route, index) => (
                        <RouteCard key={index} depart={route.depart} destination={route.destination} distance={route.distance} lastUse={route.lastUse} favourite={route.favourite} />
                    ))}
            </span>
        </div>
    )
}

const Favorites: React.FC<{ routes: any[] }> = ({ routes }) => {
    return (
        <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary text-center mx-auto flex">
                Trajets favoris
            </span>
            <span className="grid grid-cols-2 justify-between">
                {routes
                    .filter(route => route.favorite)
                    .map((route, index) => (
                        <RouteCard key={index} depart={route.depart} destination={route.destination} distance={route.distance} lastUse={route.lastUse} favourite={route.favourite}/>
                    ))}
            </span>
        </div>
    )
}

export default function FavRoutes() {
    return (
        <Flowbite theme={{ theme: herraTheme }}>
            <div>
                <NavBar currentRoute="trajets" />
                <div className="space-y-8">
                    <Recents routes={routes}/>
                    <Favorites routes={routes}/>
                </div>
                <MyFooter styleClass=""/>
            </div>
        </Flowbite>
    );
}