/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Highlight from 'react-highlight';

const DocContainer = () => (
  <>
    <p className="mb-5">
      The <code>container</code> is the main entry point of the following
      components. It will describes your gallery items.
    </p>

    <p className="mb-5">It must look like:</p>

    <Highlight className="javascript rounded mb-6 text-sm">
      {`const container = [
  {
    uid: 0, // unique identifier; item index for easier uses
    src: 'http://img.org/large_url', // Large image URL
    msrc: 'http://img.org/thumb_url', // Thumnail/placeholder URL
    w: 1000, // Large image width
    h: 1000, // Large image height
    title: 'Picture by someone', // Optional, image caption
  },
  //... more
]`}
    </Highlight>
  </>
);

export default DocContainer;
