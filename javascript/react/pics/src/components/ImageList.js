import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  return (
    <div className="ui segment images">
      {props.pics.map((i) => {
        return <ImageCard key={i.id} image={i} />;
      })}
    </div>
  );
};

export default ImageList;
