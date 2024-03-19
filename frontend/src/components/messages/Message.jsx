import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/timeExtractor";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const time = extractTime(message.createdAt);
  const shaking = message.willShake ? "shake" : "";

  const bubbleBgColor = fromMe ? "bg-info" : "";
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shaking} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer text-white  text-xs flex gap-1 items-center">
        {time}
      </div>
    </div>
  );
};

export default Message;
