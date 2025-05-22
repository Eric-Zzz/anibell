import * as React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';

const pages = [
  { name: 'About Us', path: '/about' },
  { name: 'Kings', path: '/kings' },
    { name: 'Queens', path: '/queens' },
      { name: 'Kittens', path: '/kittens' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              display: 'flex',
              fontWeight: 700,
              letterSpacing: '.1rem',
            }}
          >
            <Link href="/" passHref style={{ color: 'white', textDecoration: 'none' }}>
              AnibellRagdolls
            </Link>
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {pages.map((page) => (
              <Link key={page.path} href={page.path} passHref>
                <Button sx={{ color: 'white' }}>{page.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
