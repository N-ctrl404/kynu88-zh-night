import { Box, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Vip() {
  const { t } = useTranslation();

  const handleUpgrade = () => {
    localStorage.setItem('isMember', 'true');
    window.location.href = '/';
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>{t('vip_center')}</Text>
      <Button colorScheme="pink" onClick={handleUpgrade}>{t('upgrade')}</Button>
    </Box>
  );
}