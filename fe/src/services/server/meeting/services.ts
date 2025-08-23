import { StudySpace } from "./type";

// export const revalidate = 0;
export default async function getDataMeeting(): Promise<StudySpace[]> {
  const url =
    "https://raw.githubusercontent.com/astropop/MySearchSim/refs/heads/master/data.json";
  const request = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });
  console.log("Load-1 - data-getDataMeeting");
  const data = await request.json();
  return data;
}
