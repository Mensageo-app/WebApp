import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { FormattedMessage } from 'react-intl'
import Grid from '@material-ui/core/Grid'
import { useStyles } from '../../style/CategoryStyle'
import CardMedia from '@material-ui/core/CardMedia'

const CategoryCard = ({ category }) => {
  const classes = useStyles()

  return (
    <Grid item key={category.id} xs={6} sm={3} md={2}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent} align="center">
          <CardMedia className={classes.cardMedia} image={`/icons/${category.icon}.svg`}/>
          <Typography variant="h5" align="center">
            {category.quantity}
          </Typography>
          <Typography variant="span" align="center">
            {category.name}
          </Typography>
        </CardContent>
      </Card>
      <CardActions>
        <Button color="primary" variant="contained" fullWidth size="small" href={`/categories/${category.id}`}>
          <FormattedMessage id="category.card.locate"/>
        </Button>
      </CardActions>
    </Grid>
  )
}

export default CategoryCard
