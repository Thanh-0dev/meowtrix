import { Container, Typography, Box } from '@mui/material';
import getConversationById from "@/app/actions/getConversationById";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params);

  if (!conversation) {
    return (
      <p>Something went wrong!</p>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', maxHeight: '100vh' }}>
      <Header conversation={conversation} />
      <Body />
      <Form />
    </Box>
  );
}

export default ChatId;