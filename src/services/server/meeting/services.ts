import { StudySpace } from "./type";

export default async function getDataMeeting(): Promise<StudySpace[]> {
  const url =
    "https://raw.githubusercontent.com/astropop/MySearchSim/refs/heads/master/data.json";
  const request = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await request.json();
  return data;
}
