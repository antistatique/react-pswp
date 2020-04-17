/** @jsx jsx */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import styles from './PhotoSwipeWrapper.styles.jsx';

const PhotoSwipeWrapper = () => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" css={styles} onClick={setCount(1)}>
      {count}
    </button>
  );
};

PhotoSwipeWrapper.propTypes = {};
PhotoSwipeWrapper.defaultProps = {};

export default PhotoSwipeWrapper;
