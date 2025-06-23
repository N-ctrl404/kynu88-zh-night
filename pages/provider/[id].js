import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function ProviderPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch('/data/translated_data.json')
      .then(res => res.json())
      .then(d => {
        setData(d);
        for (const r of d.regions) {
          const p = r.providers.find(x => x.name_zh === id);
          if (p) { setProvider(p); break; }
        }
      });
  }, [id]);

  if (!data) return <div>{t('loading')}</div>;
  if (!provider) return <div>未找到对应条目</div>;

  return (
    <>
      <Header />
      <Box p={4}>
        <Text fontSize="2xl" mb={2}>{provider.name_zh}</Text>
        <Text mb={4}>{provider.desc_zh}</Text>
        <Text fontStyle="italic" color="gray.500">联系方式已隐藏，请联系会员客服获取。</Text>
      </Box>
    </>
  );
}