// import React from 'react';
// import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

// const perfumes = [
//   { id: 1, name: 'Eau de Parfum', image: '/images/perfume1.jpg', price: '89.99€' },
//   { id: 2, name: 'Floral Essence', image: '/images/perfume2.jpg', price: '79.99€' },
//   { id: 3, name: 'Ocean Breeze', image: '/images/perfume3.jpg', price: '99.99€' },
// ];



// const Produit = () => {
//   return (
//     <Box sx={{ padding: '0px' }}>
//       {/* Hero Section */}
      
//       {/* Best-Sellers Section */}
//       <Box sx={{ mt: 6 }}>
//         <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
//           Nos Produits
//         </Typography>
//         <Grid container spacing={3}>
//           {perfumes.map((perfume) => (
//             <Grid item xs={12} sm={4} key={perfume.id}>
//               <Card>
//                 <CardMedia
//                   component="img"


//                   height="200"
//                   image={perfume.image}
//                   alt={perfume.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                     {perfume.name}
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: 'gray', mb: 2 }}>
//                     {perfume.price}
//                   </Typography>
//                   <Button variant="outlined" color="primary" fullWidth>
//                     Ajouter au Panier
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Produit;
