import cover from "./Images/Whispers of Something.png";

import funkyTommy from "./Audio/WhispersOfSomething/Funky Tommy.mp3";
import funkyTommyEarly from "./Audio/WhispersOfSomething/FunkyTommyEarlyVersion.flac";
import heartbreak from "./Audio/WhispersOfSomething/HearthBreath.mp3";
import thisismydream from "./Audio/WhispersOfSomething/Thisismydream.flac";
import indabasketballcourt from "./Audio/WhispersOfSomething/InDaBasketballCourt.flac";

// Agrega las demás canciones aquí

export const albums = [
    {
        id: 0,

        title: "Whispers Of Something",

        year: "2026",

        image: cover,

        description:
            "My first album inspired by electronic music and retro music.",

        tracks: [
            {
                title: "Funky Tommy",
                file: funkyTommy,
            },
            {
                title: "Funky Tommy Early Version",
                file: funkyTommyEarly,
            },
            {
                title: "Heart Break",
                file: heartbreak,
            },
            {
                title: "This is My Dream",
                file: thisismydream,
            },
            {
                title: "In the Basketball Court",
                file: indabasketballcourt, 
            }
        ],
    },
];