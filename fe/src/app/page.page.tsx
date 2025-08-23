import getDataMeeting from "../services/server/meeting/services";
import MeetingUI from "./ui/meeting/meeting";

export default function Meeting() {
  const result = getDataMeeting();
  return <MeetingUI spaces={result} />;
}
