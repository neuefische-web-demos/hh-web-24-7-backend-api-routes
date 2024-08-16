import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];

  response.json(randomJoke);
}
