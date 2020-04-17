/** @jsx jsx */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import styles from './PhotoSwipe.styles.jsx';

const PhotoSwipe = () => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" css={styles} onClick={setCount(1)}>
      {count}
    </button>
  );
};

PhotoSwipe.propTypes = {};
PhotoSwipe.defaultProps = {};

export default PhotoSwipe;
