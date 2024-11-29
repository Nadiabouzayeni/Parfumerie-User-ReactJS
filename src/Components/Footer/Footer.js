import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#6B8E23', // Olive Green
        color: 'white',
        padding: '20px 40px',
        mt: 'auto',
      }}
    >
      <Grid container spacing={4}>
        {/* Section 1: À propos */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            À propos
          </Typography>
          <Typography variant="body2">
            NaturaPharma est votre parapharmacie de confiance, proposant une large gamme de
            produits pour votre bien-être, vos soins et votre beauté.
          </Typography>
        </Grid>

        {/* Section 2: Liens utiles */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Liens utiles
          </Typography>
          <Box>
            <Link href="/about" color="inherit" underline="hover">
              À propos de nous
            </Link>
          </Box>
          <Box>
            <Link href="/contact" color="inherit" underline="hover">
              Contactez-nous
            </Link>
          </Box>
          <Box>
            <Link href="/faq" color="inherit" underline="hover">
              FAQ
            </Link>
          </Box>
        </Grid>

        {/* Section 3: Suivez-nous */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Suivez-nous
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton href="https://facebook.com" target="_blank" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit">
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} NaturaPharma. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
