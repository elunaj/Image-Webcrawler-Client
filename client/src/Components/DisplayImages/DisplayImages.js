import React from "react";

const DisplayImages = ( {userImages, userImagesFetchStatus} ) => {
  
  return (
    <div>
      {userImagesFetchStatus
        ? (userImages.map( (images, id) => {
            return (
                <div key={id}>
                  <p>{images.id}</p>
                  <p>{images.link}</p>
                  <p>{images.imageTag}</p>
                </div>
              )
        })
      )
        : null }
    </div>
      
  );
}

export default DisplayImages;