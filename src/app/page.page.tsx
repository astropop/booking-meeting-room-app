import getDataMeeting from "../services/server/meeting/services";
import MeetingUI from "./ui/meeting/meeting";

export default function Meeting() {
  const result = getDataMeeting();
  console.log("Load-2 - page.page");
  return <MeetingUI spaces={result} />;
}
