/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

const Gallery = ({ container, onClick, wrapperClass, itemClass, imgClass }) => {
  const handleClick = (e, i) => {
    e.preventDefault();
    onClick(i);
  };

  return (
    <div
      className={wrapperClass}
      itemScope
      itemType="http://schema.org/ImageGallery"
    >
      {container.map((item, i) => (
        <figure
          key={`thumb-${item.uid || i}`}
          className={itemClass}
          itemProp="associatedMedia"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <a
            href={item.src}
            onClick={e => handleClick(e, item.uid || i)}
            itemProp="contentUrl"
            data-size={`${item.w}x${item.h}`}
          >
            <img src={item.msrc} alt="thumb" className={imgClass} />
          </a>
        </figure>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  container: PropTypes.array,
  onClick: PropTypes.func,
  itemClass: PropTypes.string,
  imgClass: PropTypes.string,
  wrapperClass: PropTypes.string,
};

Gallery.defaultProps = {
  container: [],
  itemClass: '',
  onClick: i => console.log('clicked on ', i),
  wrapperClass: '',
};

export default Gallery;
