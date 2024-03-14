import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="flex flex-col ">
      <Conversation className="my-4" />
      <Conversation />
    </div>
  );
};

export default Conversations;
