import React from "react";
import { Card, CardActionArea, CardActions, CardContent, 
  CardMedia, Button, Grid, Typography } from '@material-ui/core';
import Spinner from '../Spinner/Spinner.js';
import './DisplayImages.css';

const DisplayImages = ( {userImages, userImagesFetchStatus, downloadImage, loading} ) => {
  console.log(loading)
  return (
    <div>
        {userImagesFetchStatus 

          ? (userImages.map( (image, id) => {
              
                return (

                  <Card className="tc" key={id}>
                    <CardActions>
                      <Grid 
                        container
                        direction="row"
                        alignItems = "center"
                        justify="center"
                        >
                  
                        </Grid>
                        </CardActions>
                        <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          image={image.link}
                          title="Contemplative Reptile"
                          onClick={() => downloadImage(image.link)}
                        />
            
                      </CardActionArea>
                    </Card>

                )
              })
            )

          : loading

          ? (
              <Spinner/>
    
            ) : null }
        
      </div>
    );
}

export default DisplayImages;