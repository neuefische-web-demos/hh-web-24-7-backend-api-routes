import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const { id } = request.query;

  const currentJoke = jokes.find(function (joke) {
    return joke.id === id;
  });

  if (!currentJoke) {
    response.status(404).json({ message: `No joke with id ${id} was found.` });
    return;
  }

  response.status(200).json(currentJoke);
}
