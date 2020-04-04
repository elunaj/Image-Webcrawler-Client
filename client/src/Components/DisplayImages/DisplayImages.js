import React from "react";
import { Card, CardActionArea, CardActions,  
  CardMedia, Grid } from '@material-ui/core';
import Spinner from '../Spinner/Spinner.js';
import './DisplayImages.css';

const DisplayImages = ( {userImages, userImagesFetchStatus, downloadImage, loading} ) => {

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
                          alt="downloadable image"
                          image={image.imageLink}
                          title="image"
                          onClick={() => downloadImage(image.imageLink)}
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