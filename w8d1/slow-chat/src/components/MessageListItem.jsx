// {
//   "id": 1,
//   "type": "self",
//   "content": "Wiggle wiggle yeah!",
//   "datePosted": "",
//   "userId": 1,
//   "user": {
//     "id": 1,
//     "profile_color": "#b0b",
//     "name": "Lily",
//     "username": ""
//   }
// }

export default function MessageListItem(props) {
  const { content, user, type } = props;

  const cssClasses = `MessageListItem ${type}`
  const customStyle = {
    backgroundColor: user ? user.profile_color : "red",
  };
  return (
    <li className={cssClasses} style={customStyle}>
      {/* <li className="MessageListItem self"> */}
      {/* <li className="MessageListItem server"> */}
      <span>{content}</span>
      {user && <span>By: {user.name}</span>}
    </li>
  );
}
