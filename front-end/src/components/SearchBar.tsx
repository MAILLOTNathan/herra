import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar () {
    return (
        <div className="absolute left-0 right-0 z-10 p-4 mx-auto sm:w-[30%] w-[70%]">
            <TextInput placeholder="Recherche..." rightIcon={FaSearch}/>
        </div>
    )
}