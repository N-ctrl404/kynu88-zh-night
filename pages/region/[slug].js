import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { SimpleGrid, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function RegionPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState(null);
  const [region, setRegion] = useState(null);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    setIsMember(typeof window !== 'undefined' && localStorage.getItem('isMember') === 'true');
    if (!slug) return;
    fetch('/data/translated_data.json')
      .then(res => res.json())
      .then(d => {
        setData(d);
        const reg = d.regions.find(r => r.name_zh === slug);
        setRegion(reg);
      });
  }, [slug]);

  if (!data) return <div>{t('loading')}</div>;
  if (!region) return <div>未找到对应区域</div>;

  const providers = isMember ? region.providers : region.providers.slice(0, 10);

  return (
    <>
      <Header />
      <Box p={4}>
        <Text fontSize="2xl" mb={4}>{region.name_zh}</Text>
        <SimpleGrid columns={[1,2]} spacing={4}>
          {providers.map((p, idx) => (
            <Link key={idx} href={`/provider/${encodeURIComponent(p.name_zh)}`}>
              <Box p={4} shadow="md" borderWidth="1px" cursor="pointer" bg="gray.700">
                <Text fontWeight="bold" color="brand.100">{p.name_zh}</Text>
                <Text mt={2}>{p.desc_zh}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
        {!isMember && region.providers.length > 10 && (
          <Button mt={4} colorScheme="pink" onClick={() => window.location.href = '/vip'}>
            {t('upgrade')} 查看更多
          </Button>
        )}
      </Box>
    </>
  );
}