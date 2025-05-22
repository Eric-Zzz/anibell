import { Container, Typography } from '@mui/material';

export default function ContactPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        联系我们
      </Typography>
      <Typography>微信号：miaomiao-cat ｜ 电话：1234-5678</Typography>
    </Container>
  );
}
