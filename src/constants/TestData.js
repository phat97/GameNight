import { FaRProject } from "react-icons/fa";
import { v4 } from "uuid";

export const sample_data = [
  {
    id: v4(),
    title: "Among Us",
    type: "online",
    image: "/images/among_us.jpg",
    name: "Test User1",
    own: true,
    cost: 2.99,
    date: new Date(),
    players: "4-8",
  },
  {
    id: v4(),
    title: "League of Legends",
    type: "online",
    image: "/images/lol.jpg",
    name: "Test User2",
    own: true,
    cost: 0,
    date: new Date(),
    players: "1-5",
  },
  {
    id: v4(),
    title: "Playing Cards",
    image: "/images/default.jpg",
    type: "home",
    name: "Test User3",
    own: true,
    cost: 0,
    date: new Date(),
    players: "4",
  },
  {
    id: v4(),
    title: "Fallguys",
    image: "/images/fallguys.jpg",
    type: "online",
    name: "Test User4",
    own: false,
    cost: 15.99,
    date: new Date(),
    players: "4",
  },
];
