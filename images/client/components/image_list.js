// Create our image list component
//3 steps: Import React / Create Component / Export Our Component
import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {

  const validImages = props.images.filter( image => !image.is_album);

  const RenderedImages = validImages.map(image => {
      return <ImageDetail key={image.title} image={image} />
  });

  return (
    <ul className="media-list list-group">
    {RenderedImages}
    </ul>
  );
};

export default ImageList;
