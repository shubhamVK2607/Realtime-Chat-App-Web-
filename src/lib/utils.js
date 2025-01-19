import moment from "moment";
export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}


export const getRelativeTime = (updatedAt) => {
  const now = moment();
  const updated = moment(updatedAt);
  const diffMinutes = now.diff(updated, "minutes");

  if (diffMinutes <= 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} min`;
  if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)} hr`;
  if (diffMinutes < 43200) return `${Math.floor(diffMinutes / 1440)} day`;
  return `${Math.floor(diffMinutes / 43200)} month`;
};
