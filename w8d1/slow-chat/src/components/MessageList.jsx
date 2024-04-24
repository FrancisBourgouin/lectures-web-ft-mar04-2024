import MessageListItem from "./MessageListItem";

export default function MessageList(props) {
  const { messages } = props;

  const parsedMessages = messages.map((message) => <MessageListItem key={message.id} {...message} />);
  return (
    <ul className="MessageList">
      {parsedMessages}
    </ul>
  );
}
