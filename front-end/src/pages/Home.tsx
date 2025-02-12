import NavBar from "../components/NavBar";
import Map from "../components/Map";
import MyFooter from "../components/MyFooter";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="mx-auto w-screen">
                <SearchBar />
                <Map />
            </div>
            <MyFooter />
        </div>
    );
}