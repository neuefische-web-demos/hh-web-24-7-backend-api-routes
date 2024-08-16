import { jokes } from "@/lib/data";

export default function handler(request, response) {
  console.log("inside handler function");
  response.json(jokes);
}
