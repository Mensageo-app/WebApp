import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useStyles } from '../../style/ProductStyle'
import Box from '@material-ui/core/Box'
import { Container } from '@material-ui/core'

const ProductDetails = ({ product }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box m="1rem">
        <Typography variant="h4" align="left" >{product.name}</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <div className={classes.image}>
            <img className={classes.img} alt="complex" src='/images/mask.jpeg' />
          </div>
        </Grid>
        <Grid item sm container>
          <Grid item>
          <Typography variant="body1" component="p" position={'right'}>{product.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    
  )
}

export default ProductDetails
