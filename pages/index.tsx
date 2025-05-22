import { Container, Grid, Typography, Box } from '@mui/material';
import cats from '@/data/cats.json';
import CatCard from '@/components/CatCard';
import HomeCarousel from '@/components/HomeCarousel';

export default function Home() {
  return (
    <>
      {/* 顶部轮播图 */}
      <HomeCarousel />

      {/* 猫舍介绍 */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          关于我们的猫舍
        </Typography>
        <Typography align="center" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
          我们是一家专注于英短、美短和布偶猫的精品猫舍，致力于猫咪健康成长与家庭适养。所有猫咪均接受疫苗接种和日常护理，欢迎预约参观。
        </Typography>

        {/* 猫咪列表 */}
        <Typography variant="h5" gutterBottom>在找新家的猫咪们：</Typography>
        <Grid container spacing={4}>
          {cats.map((cat) => (
            <Grid size={{xs:12,sm:6,md:4} }  key={cat.id}>
              <CatCard cat={cat} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 照片墙展示 */}
<Container sx={{ py: 6 }}>
  <Typography variant="h5" gutterBottom>猫咪日常精彩瞬间：</Typography>
  <Grid container spacing={2}>
    {['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'].map((src, index) => (
      <Grid size={{xs:12,sm:6,md:4} } key={index}>
        <Box
          component="img"
          src={`/cats/${src}`}
          alt={`日常${index}`}
          sx={{ width: '100%', borderRadius: 2 }}
        />
      </Grid>
    ))}
  </Grid>
</Container>

    </>
  );
}
