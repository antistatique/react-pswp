/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Highlight from 'react-highlight';

import DocContainer from './DocContainer';
import DocGallery from './DocGallery';
import DocPhotoSwipe from './DocPhotoSwipe';
import DocExample from './DocExample';

const App = () => (
  <>
    <div>
      <h1 className="text-center font-medium text-3xl bg-gray-900 text-white py-4">
        react-<span className="text-teal-300">pswp</span>
      </h1>
    </div>

    <div className="max-w-screen-md mx-auto px-5">
      <p className="text-lg py-12">
        “<code>react-pswp</code> is a flexible React wrapper for{' '}
        <a
          href="https://photoswipe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Photoswipe
        </a>
        ”.
      </p>

      <h2 className="text-2xl font-medium mb-2">Install</h2>

      <Highlight className="bash rounded mb-12">
        $ yarn add react-pswp
      </Highlight>

      <h2 className="text-2xl font-medium mb-2 mt-20">Container</h2>

      <DocContainer />

      <h2 className="text-2xl font-medium mb-2 mt-20">Gallery</h2>

      <DocGallery />

      <h2 className="text-2xl font-medium mb-2 mt-20">PhotoSwipe</h2>

      <DocPhotoSwipe />

      <h2 className="text-2xl font-medium mb-2 mt-20">Full Example</h2>

      <DocExample />
    </div>
  </>
);
export default App;
