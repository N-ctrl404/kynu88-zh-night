import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RegionSelector from '../components/RegionSelector';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    fetch('/data/translated_data.json').then(res => res.json()).then(setData);
  }, []);

  if (!data) return <div>{t('loading')}</div>;

  if (selectedRegion) {
    const regionPath = `/region/${encodeURIComponent(selectedRegion.name_zh)}`;
    if (typeof window !== 'undefined') {
      window.location.href = regionPath;
    }
    return null;
  }

  return (
    <>
      <Header />
      <RegionSelector regions={data.regions} onSelect={setSelectedRegion} />
    </>
  );
}