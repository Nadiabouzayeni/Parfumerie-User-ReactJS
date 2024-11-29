// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// // Exemple de données pour les produits
// const products = [
//   {
//     id: 1,
//     name: 'Crème Hydratante',
//     description: 'Crème hydratante pour une peau douce et nourrie.',
//     price: 20.00,
//     image: '/images/creme_hydratante.jpg',
//     promotion: {
//       startDate: '2024-11-01',
//       endDate: '2024-11-30',
//       reduction: 20, // 20% de réduction
//     }
//   },
//   {
//     id: 2,
//     name: 'Sérum Anti-âge',
//     description: 'Réduit les signes du vieillissement.',
//     price: 35.00,
//     image: '/images/serum_anti_age.jpg',
//     promotion: {
//       startDate: '2024-11-10',
//       endDate: '2024-12-10',
//       reduction: 15, // 15% de réduction
//     }
//   },
//   {
//     id: 3,
//     name: 'Lotion Apaisante',
//     description: 'Apaise et hydrate la peau.',
//     price: 18.00,
//     image: '/images/lotion_apaisante.jpg',
//     promotion: null, // Pas de promotion
//   },
// ];

// const ProduitPromo = () => {
//   const [promoProducts, setPromoProducts] = useState([]);

//   useEffect(() => {
//     // Calculer les produits en promotion
//     const filteredPromoProducts = products.filter(product => {
//       if (product.promotion) {
//         const today = new Date();
//         const startDate = new Date(product.promotion.startDate);
//         const endDate = new Date(product.promotion.endDate);
//         return today >= startDate && today <= endDate;
//       }
//       return false; // Exclure les produits sans promotion
//     });

//     setPromoProducts(filteredPromoProducts);
//   }, []);

//   // Fonction pour calculer le prix promotionnel
//   const getDiscountedPrice = (price, reduction) => {
//     return price - (price * reduction / 100);
//   };

//   return (
//     <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
//       <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
//         Nos Produits en Promotion
//       </Typography>

//       <Grid container spacing={4}>
//         {promoProducts.length === 0 ? (
//           <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
//             Aucun produit en promotion actuellement.
//           </Typography>
//         ) : (
//           promoProducts.map((product) => (
//             <Grid item xs={12} sm={4} key={product.id}>
//               <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={product.image}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>

//                   {product.promotion ? (
//                     <>
//                       <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray', marginTop: '10px' }}>
//                         €{product.price.toFixed(2)}
//                       </Typography>
//                       <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
//                         €{getDiscountedPrice(product.price, product.promotion.reduction).toFixed(2)}
//                       </Typography>
//                     </>
//                   ) : (
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
//                       €{product.price.toFixed(2)}
//                     </Typography>
//                   )}
//                 </CardContent>
//                 <Button size="small" color="primary" sx={{ marginBottom: '20px' }}>
//                   Ajouter au panier
//                 </Button>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default ProduitPromo;
