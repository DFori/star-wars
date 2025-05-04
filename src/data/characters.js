import darthVader from "../assets/images/darth-vader.jpeg";
import lukeSkywalker from "../assets/images/luke-skywalker.jpeg";
import leiaOrgana from "../assets/images/leia-organa.jpeg";
import hanSolo from "../assets/images/han-solo.jpeg";
import obiWanKenobi from "../assets/images/obi-wan.jpeg";
import yoda from "../assets/images/yoda.jpeg";
import emperorPalpatine from "../assets/images/palpatine.jpeg";
import bobaFett from "../assets/images/boba-fett.jpeg";
import chewbacca from "../assets/images/chewbacca.jpeg";
import r2d2 from "../assets/images/r2d2.jpeg";
import c3po from "../assets/images/c3po.jpeg";
import kyloRen from "../assets/images/kylo-ren.jpeg";
import rey from "../assets/images/rey.jpeg";
import finn from "../assets/images/finn.jpeg";
import poeDameron from "../assets/images/poe-dameron.jpeg";
import generalHux from "../assets/images/general-hux.jpeg";
import maceWindu from "../assets/images/mace-windu.jpeg";
import countDooku from "../assets/images/count-dooku.jpeg";
import ahsokaTano from "../assets/images/ahsoka.jpeg";
import darthMaul from "../assets/images/darth-maul.jpeg";
import { image } from "framer-motion/client";

export const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    image: lukeSkywalker,
    description: "Jedi Knight who destroyed the Death Star",
    side: "light",
    affiliation: "Rebel Alliance"
  },
  {
    id: 2,
    name: "Darth Vader",
    image: darthVader,
    description: "Sith Lord and former Jedi Knight",
    side: "dark",
    affiliation: "Galactic Empire"
  },
  {
    id: 3,
    name: "Leia Organa",
    image: leiaOrgana,
    description: "Princess of Alderaan and leader of the Rebellion",
    side: "light",
    affiliation: "Rebel Alliance"
  },
  {
    id: 4,
    name: "Han Solo",
    image: hanSolo,
    description: "Smuggler turned Rebel hero and pilot of the Millennium Falcon",
    side: "light",
    affiliation: "Rebel Alliance"
  },
  {
    id: 5,
    name: "Obi-Wan Kenobi",
    image: obiWanKenobi,
    description: "Wise Jedi Master who mentored both Anakin and Luke Skywalker",
    side: "light",
    affiliation: "Jedi Order"
  },
  {
    id: 6,
    name: "Yoda",
    image: yoda,
    description: "Legendary Jedi Master with centuries of wisdom",
    side: "light",
    affiliation: "Jedi Order"
  },
  {
    id: 7,
    name: "Emperor Palpatine",
    image: emperorPalpatine,
    description: "Sith Lord who manipulated the galaxy into war",
    side: "dark",
    affiliation: "Galactic Empire"
  },
  {
    id: 8,
    name: "Boba Fett",
    image: bobaFett,
    description: "Infamous bounty hunter known for capturing Han Solo",
    side: "neutral",
    affiliation: "Bounty Hunters Guild"
  },
  {
    id: 9,
    name: "Chewbacca",
    image: chewbacca,
    description: "Loyal Wookiee warrior and Han Solo's co-pilot",
    side: "light",
    affiliation: "Rebel Alliance"
  },
  {
    id: 10,
    name: "R2-D2",
    image: r2d2,
    description: "Astromech droid who has saved the galaxy many times",
    side: "light",
    affiliation: "Rebel Alliance"
  },
  {
    id: 11,
    name: "C-3PO",
    image: c3po,
    description: "Protocol droid fluent in over six million forms of communication",
    side: "light",
    affiliation: "Rebel Alliance"
  },
  {
    id: 12,
    name: "Kylo Ren",
    image: kyloRen,
    description: "Dark side Force user, son of Leia and Han, leader of the First Order",
    side: "dark",
    affiliation: "First Order"
  },
  {
    id: 13,
    name: "Rey",
    image: rey,
    description: "Scavenger turned Jedi, seeker of truth and balance",
    side: "light",
    affiliation: "Resistance"
  },
  {
    id: 14,
    name: "Finn",
    image: finn,
    description: "Former stormtrooper who joined the Resistance",
    side: "light",
    affiliation: "Resistance"
  },
  {
    id: 15,
    name: "Poe Dameron",
    image: poeDameron,
    description: "Skilled Resistance pilot and leader",
    side: "light",
    affiliation: "Resistance"
  },
  {
    id: 16,
    name: "General Hux",
    image: generalHux,
    description: "Ambitious officer of the First Order",
    side: "dark",
    affiliation: "First Order"
  },
  {
    id: 17,
    name: "Mace Windu",
    image: maceWindu,
    description: "Jedi Master known for his strength and purple lightsaber",
    side: "light",
    affiliation: "Jedi Order"
  },
  {
    id: 18,
    name: "Count Dooku",
    image: countDooku,
    description: "Sith Lord and leader of the Separatists",
    side: "dark",
    affiliation: "Sith"
  },
  {
    id: 19,
    name: "Ahsoka Tano",
    image: ahsokaTano,
    description: "Former Jedi Padawan of Anakin Skywalker",
    side: "light",
    affiliation: "Rebels"
  },
  {
    id: 20,
    name: "Darth Maul",
    image: darthMaul,
    description: "Sith apprentice known for his double-bladed lightsaber",
    side: "dark",
    affiliation: "Sith"
  }
];
