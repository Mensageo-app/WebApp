import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FormattedMessage} from 'react-intl'
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./CategoryStyle";


const CategoryCard = ({category}) => {
    const classes = useStyles();

    return (
        <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {category.name}
                    </Typography>
                    <Typography>
                        {category.quantity}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"> <FormattedMessage id="category.card.locate"/></Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default CategoryCard;