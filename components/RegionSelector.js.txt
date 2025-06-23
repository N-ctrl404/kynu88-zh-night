import { SimpleGrid, Button } from '@chakra-ui/react';

export default function RegionSelector({ regions, onSelect }) {
  return (
    <SimpleGrid columns={[2,3]} spacing={4} p={4}>
      {regions.map(r => (
        <Button key={r.name_zh} onClick={()=>onSelect(r)}>
          {r.name_zh}
        </Button>
      ))}
    </SimpleGrid>
  );
}
