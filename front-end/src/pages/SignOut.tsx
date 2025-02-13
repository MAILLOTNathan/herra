import { Button, FileInput, Label, TextInput, Flowbite } from "flowbite-react";

import MyFooter from "../components/MyFooter";

import herraTheme from "../Theme";

function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4 p-12 bg-light rounded-3xl shadow-xl mx-auto m-8">
        <h1 className="text-2xl font-bold mx-auto items-center text-primary">
            Créer un compte
        </h1>
        <h3 className="text-sm text-center text-primary">
            Entrez dans la safe place.
        </h3>
        <div className="flex flex-row gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="" />
                </div>
                <TextInput id="name" type="text" placeholder="Prénom" required color="info" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="surname" value="" />
                </div>
                <TextInput id="surname" type="text" placeholder="Nom" required color="info" />
            </div>
        </div>
        <div className="flex flex-row gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="" />
                </div>
                <TextInput id="email1" type="mail" placeholder="Adresse mail" required color="info" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="address" value="" />
                </div>
                <TextInput id="address" type="text" placeholder="Adresse" required color="info" />
            </div>
        </div>
        <div className="flex flex-row gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="" />
                </div>
                <TextInput id="password1" type="password" placeholder="Mot de passe" required color="info" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password2" value="" />
                </div>
                <TextInput id="password2" type="password" placeholder="Confirmer le mot de passe" required color="info" />
            </div>
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="file" value="Pièces justificatives" />
            </div>
            <FileInput id="file" helperText="Une photo de votre carte d'identité." color="info"/>
        </div>
        <Button type="submit" color="pink" className="w-fit mx-auto">
            Inscription
        </Button>
        <div className="mx-auto border-t-2 pt-4 mt-4 border-gray-200 w-full text-center">
            <a href="/enregistrement" className="text-primary text-center">
                Pas encore de compte ? Créez-en un.
            </a>
        </div>
    </form>
  );
}

export default function SignOut() {
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