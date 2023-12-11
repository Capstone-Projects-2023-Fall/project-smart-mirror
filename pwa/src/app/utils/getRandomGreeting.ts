import { greetings } from "../lib/greetings";

export const getRandomGreeting = (name: string, hour: number) => {
  if (hour > 4 && hour < 12) {
    const greet =
      greetings.morning[Math.floor(Math.random() * greetings.morning.length)];
    return `${greet}, ${name}`;
  } else if (hour < 18) {
    const greet =
      greetings.day[Math.floor(Math.random() * greetings.day.length)];
    return `${greet}, ${name}`;
  } else {
    const greet =
      greetings.evening[Math.floor(Math.random() * greetings.evening.length)];
    return `${greet}, ${name}`;
  }
};
