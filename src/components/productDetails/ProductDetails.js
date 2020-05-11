import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useStyles } from '../../style/ProductStyle'
import CardMedia from '@material-ui/core/CardMedia'
import Box from '@material-ui/core/Box'

const ProductDetails = () => {
  const classes = useStyles()

  return (
    <Box component="p" m={6} >
      <Box m="1rem">
        <Typography variant="h4" align="left" >Protective Mask
        </Typography>
      </Box>

      <Grid container spacing={2} justify="center" >
        <Grid item md={3}>
          <CardMedia className={classes.cardMedia} image={'/images/mask.jpeg'} position={'left'}/>
        </Grid>
        <Grid item md={9}>
          <Typography variant="body1" component="p" position={'right'}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica.Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica.
          </Typography>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ProductDetails
