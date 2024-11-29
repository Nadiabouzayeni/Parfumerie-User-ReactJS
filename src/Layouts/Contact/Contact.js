import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Container } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    console.log('Message envoyé:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Contactez-Nous
        </Typography>

        <Grid container spacing={4}>
          {/* Formulaire de contact */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Votre Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                label="Votre Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: '20px' }}
              />
              <TextField
                label="Votre Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                required
                sx={{ marginBottom: '20px' }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ padding: '10px 20px', fontWeight: 'bold' }}
              >
                Envoyer le Message
              </Button>
            </Box>
          </Grid>

          {/* Informations supplémentaires */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              NaturaPharma
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Nous sommes situés au cœur de votre ville, offrant une large gamme de produits de parapharmacie de qualité.
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <strong>Adresse :</strong> 123 Rue de la Santé, 75000 Paris, France
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <strong>Email :</strong> contact@naturapharma.fr
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
