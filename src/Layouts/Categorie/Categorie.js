import React, { useState, useEffect } from 'react';
import { Box, Toolbar, Typography, Container, Alert, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategorieListPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

  // Récupérer les catégories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiBaseURL}/api/categories`);
        if (response.status === 200) {
          setData(response.data.categories);
          console.log("les catégories:", response.data.categories);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
        setErrorMessage("Une erreur s'est produite lors du chargement des catégories.");
      }
    };
    fetchCategories();
  }, [apiBaseURL]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Liste des catégories</Typography>
      </Toolbar>

      <Container sx={{ flexGrow: 1, marginTop: 4 }}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        {/* Affichage des cartes */}
        <Grid container spacing={3}>
          {data.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category._id}>
              <Card sx={{ minHeight: 200 }}>
                <CardContent>
                  <Typography variant="h6">{category.name}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(`/category/${category._id}`)}>
                    Détails
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategorieListPage;
