import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
    <div className ="media-left">
      <img src={props.image.link} />
      </div>
        <div className="media-body">
          <h2 className="media-heading">{props.image.title}</h2>
<p>{props.image.description}</p>
  <ImageScore ups={props.image.ups} downs={props.image.downs} />
          </div>
    </li>
  );
};

export default ImageDetail;
