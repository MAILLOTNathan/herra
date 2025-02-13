import { DropdownDivider, Flowbite } from "flowbite-react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

import MyFooter from "../components/MyFooter";

import herraTheme from "../Theme";

function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4 p-12 bg-light rounded-3xl shadow-xl mx-auto m-8">
        <h1 className="text-2xl font-bold mx-auto items-center text-primary">
            Connexion
        </h1>
        <h3 className="text-sm text-center text-primary">
            Connectez-vous à la safe place.
        </h3>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email1" value="Adresse mail" />
            </div>
            <TextInput id="email1" type="email" placeholder="max@hera.com" required color="info" />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password1" value="Mot de passe" />
            </div>
            <TextInput id="password1" type="password" required color="info" />
        </div>
        <Button type="submit" color="pink" className="w-fit mx-auto">
            Connexion
        </Button>
        <div className="mx-auto border-t-2 pt-4 mt-4 border-gray-200 w-full text-center">
            <a href="/enregistrement" className="text-primary text-center">
                Pas encore de compte ? Créez-en un.
            </a>
        </div>
    </form>
  );
}

export default function SignIn() {
    return (
        <Flowbite theme={{ theme: herraTheme }}>
            <div className="flex bg-primary w-screen p-6 justify-center">
                <span className="p-4 bg-white rounded-2xl">
                    <img src="assets/h_logo.png" alt="logo" className="h-8" />
                </span>
            </div>
            <Form />
            <MyFooter styleClass=""/>
        </Flowbite>
    );
}