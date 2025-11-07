import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import styles from '../styles/ProductCard.module.css';

// 🎨 Custom MUI button using styled()
const BuyButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: 'white',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#115293',
  },
});

const ProductCard = ({ product }) => {
  const cardClass = product.inStock
    ? styles.card
    : `${styles.card} ${styles.outOfStock}`;

  return (
    <Card className={cardClass} sx={{ maxWidth: 300, margin: '1rem auto' }}>
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: ${product.price.toFixed(2)}
        </Typography>

        <Typography
          variant="body2"
          color={product.inStock ? 'success.main' : 'error.main'}
          sx={{ marginTop: '0.5rem' }}
        >
          {product.inStock ? 'In Stock ✅' : 'Out of Stock ❌'}
        </Typography>

        <BuyButton
          variant="contained"
          disabled={!product.inStock}
          sx={{ marginTop: '1rem' }}
        >
          {product.inStock ? 'Buy Now' : 'Unavailable'}
        </BuyButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
