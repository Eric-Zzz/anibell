import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type Cat = {
  id: string;
  name: string;
  age: string;
  breed: string;
  gender: string;
  vaccinated: boolean;
  images: string[];
};

export default function CatCard({ cat }: { cat: Cat }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={cat.images[0]}
        alt={cat.name}
      />
      <CardContent>
        <Typography variant="h6">{cat.name}</Typography>
        <Typography color="text.secondary">年龄：{cat.age}</Typography>
        <Typography color="text.secondary">品种：{cat.breed}</Typography>
        <Typography color="text.secondary">
          性别：{cat.gender} ｜ 疫苗：{cat.vaccinated ? '已接种' : '未接种'}
        </Typography>
      </CardContent>
    </Card>
  );
}
