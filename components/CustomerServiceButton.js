import { IconButton } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

export default function CustomerServiceButton() {
  return (
    <IconButton
      icon={<ChatIcon />}
      position="fixed"
      bottom="4"
      right="4"
      colorScheme="pink"
      aria-label="联系客服"
      onClick={() => window.location.href = '/contact'}
    />
  );
}