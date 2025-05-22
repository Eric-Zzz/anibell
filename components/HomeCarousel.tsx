import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

const items = [
  { src: '/cats/banner1.jpg', alt: '猫咪1' },
  { src: '/cats/banner2.jpg', alt: '猫咪2' },
  { src: '/cats/banner3.jpg', alt: '猫咪3' },
];

export default function HomeCarousel() {
  return (
    <Carousel indicators={true} navButtonsAlwaysVisible>
      {items.map((item, index) => (
        <Paper key={index} elevation={3}>
          <Box
            component="img"
            src={item.src}
            alt={item.alt}
            sx={{
              height: { xs: 200, sm: 300, md: 400 },
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Paper>
      ))}
    </Carousel>
  );
}
