export const parseMessage = (message, users, currentUserId) => {
  const updatedMessage = {
    ...message,
    user: users[message.userId],
  }

  if(currentUserId === updatedMessage.userId){
    updatedMessage.type = "self"
  }
  if(currentUserId !== updatedMessage.userId){
    updatedMessage.type = "external"
  }
  if(!updatedMessage.userId){
    updatedMessage.type = "server"
  }

  return updatedMessage
}