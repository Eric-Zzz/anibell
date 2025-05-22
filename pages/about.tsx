import { Container, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        关于我们
      </Typography>
      <Typography>
        我们是一家专注于英短、美短、布偶猫的小型家庭猫舍，致力于为猫咪找到温暖的家。
      </Typography>
    </Container>
  );
}
