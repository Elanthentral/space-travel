import moon from "../../assets/destination/image-moon.png";
import moonweb from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.png";
import marsweb from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.png";
import europaweb from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.png";
import titanweb from "../../assets/destination/image-titan.webp";
import mark from "../../assets//crew/image-mark-shuttleworth.png";
import markweb from "../../assets//crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.png";
import victorweb from "../../assets/crew/image-victor-glover.webp";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import douglasweb from "../../assets/crew/image-douglas-hurley.webp";
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import ansariweb from "../../assets/crew/image-anousheh-ansari.webp";
import vehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import vehicleweb from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import space from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceweb from "../../assets/technology/image-spaceport-landscape.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleweb from "../../assets/technology/image-space-capsule-landscape.jpg";

export const PageData = {
  destinations: [
    {
      id: 0,
      name: "Moon",
      images: {
        png: moon,
        webp: moonweb,
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      id: 1,
      name: "Mars",
      images: {
        png: mars,
        webp: marsweb,
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      id: 3,
      name: "Europa",
      images: {
        png: europa,
        webp: europaweb,
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      id: 4,
      name: "Titan",
      images: {
        png: titan,
        webp: titanweb,
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: douglas,
        webp: douglasweb,
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: mark,
        webp: markweb,
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: victor,
        webp: victorweb,
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: ansari,
        webp: ansariweb,
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      no: 1,
      name: "Launch vehicle",
      images: {
        portrait: vehicle,
        landscape: vehicleweb,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      no: 2,
      name: "Spaceport",
      images: {
        portrait: space,
        landscape: spaceweb,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      no: 3,
      name: "Space capsule",
      images: {
        portrait: capsule,
        landscape: capsuleweb,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
