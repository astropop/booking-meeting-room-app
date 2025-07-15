import { StudySpace } from "./type";

export default async function getData(): Promise<StudySpace[]> {
  const request = await fetch("/api/meeting", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await request.json();
  return data;
}
