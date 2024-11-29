import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../Components/Button/CustomButton'; // Importer le bouton personnalisé

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        height: '100vh',
        backgroundColor: 'white',
      }}
    >
      {/* Section Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <img
          src="https://naturapharma.ca/wp-content/uploads/2018/10/natura_pharma_slider_background.jpg"
          alt="NaturaPharma"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
        />
      </Box>

      {/* Section Texte */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          padding: '20px',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Bienvenue chez NaturaPharma
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '1.2rem', color: '#555' }}>
          Découvrez une gamme complète de produits de parapharmacie soigneusement sélectionnés pour
          répondre à vos besoins de santé et de bien-être. Que ce soit pour les soins de la peau,
          les compléments alimentaires, ou les produits de beauté, NaturaPharma est votre partenaire
          de confiance.
        </Typography>
        <CustomButton size="large" onClick={() => console.log('Button clicked!')}>
          Explorez nos produits
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Home;
