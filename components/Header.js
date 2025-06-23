import { Flex, Box, Link, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';

export default function Header() {
  const { t } = useTranslation();
  const isMember = typeof window !== 'undefined' && localStorage.getItem('isMember') === 'true';

  return (
    <Flex as="nav" p={4} justify="space-between" shadow="md" bg="gray.800">
      <Box fontSize="xl" fontWeight="bold">Kỹ nữ 夜店版</Box>
      <Flex gap={4}>
        <NextLink href="/" passHref><Link>{t('home')}</Link></NextLink>
        <NextLink href="/contact" passHref><Link>{t('contact')}</Link></NextLink>
        {!isMember && (
          <NextLink href="/vip" passHref>
            <Button size="sm" colorScheme="pink">{t('upgrade')}</Button>
          </NextLink>
        )}
      </Flex>
    </Flex>
  );
}