import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCard, AddShoppingCart } from '@material-ui/icons';
import Product from './components/Product/Product';
import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}

                    </Typography>
                    <Typography variant="h5">
                        {product.price}

                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}> 
            <IconButton aria-label="В корзину">
                <AddShoppingCart />
            </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
