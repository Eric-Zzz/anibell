import { Container, Grid, Typography } from '@mui/material';
import cats from '@/data/cats.json';
import CatCard from '@/components/CatCard';

export default function Home() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        欢迎来到我们的猫舍 🐾
      </Typography>

      <Grid container spacing={4}>
        {cats.map((cat) => (
          <Grid  size={{ xs: 12,sm:6, md: 4 }} key={cat.id} >
            <CatCard cat={cat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
