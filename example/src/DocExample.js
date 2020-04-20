/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import Highlight from 'react-highlight';
import { Gallery, PhotoSwipe } from 'react-pswp';

import 'react-pswp/dist/index.css';

const PreviewProvider = () => {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const unsplashPandas = [
    ['s-fD5Tpew2k', 'Jay Wennington'],
    ['GYpsSWHslHA', 'Chris Curry'],
    ['_9a-3NO5KJE', 'Sid Balachandran'],
    ['6Ox3fPG-qvo', 'Theodor Lundqvist'],
    ['94c2BwxqwXw', 'Elena Loshina'],
    ['NsNRu6dfRds', 'Ying Wu'],
    ['OApeDBma_zY', 'Julien Mussard'],
    ['wjdRLcZQY2w', '毛 祥'],
    ['HFgxFulbsF4', 'billow 926'],
    ['QZwf5yNopUo', 'Lance Anderson'],
    ['xVwtcdB46z0', 'Bo Peng'],
    ['mf94VWJlMwU', 'Xtina Yu'],
  ];

  const container = unsplashPandas.map(([id, author], i) => ({
    uid: i,
    src: `https://source.unsplash.com/${id}/1000x1000`,
    msrc: `https://source.unsplash.com/${id}/200x200`,
    w: 1000,
    h: 1000,
    title: `Picture by ${author}`,
  }));

  const options = {};

  useEffect(() => {
    if (!open && index !== null) setOpen(true);
  }, [index]);

  return (
    <>
      <div className="mb-5">
        <Gallery
          container={container}
          onClick={setIndex}
          wrapperClass="flex flex-wrap"
          itemClass="p-1 w-1/6"
          imgClass="inline-block w-full"
        />

        <PhotoSwipe
          container={container}
          onIndexChange={setIndex}
          onOpenChange={setOpen}
          index={index}
          open={open}
          options={options}
          theme={{
            foreground: '#1A202C',
            background: '#81E6D9',
          }}
        />
      </div>

      <Highlight className="javascript rounded mb-6 text-sm">
        {`import React, { useState, useEffect } from 'react';
import { Gallery, PhotoSwipe } from 'react-pswp';

import 'react-pswp/dist/index.css';

const MyApp = () => {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const unsplashPandas = [
    ['s-fD5Tpew2k', 'Jay Wennington'],
    ['GYpsSWHslHA', 'Chris Curry'],
    ['_9a-3NO5KJE', 'Sid Balachandran'],
    ['6Ox3fPG-qvo', 'Theodor Lundqvist'],
    ['94c2BwxqwXw', 'Elena Loshina'],
    ['NsNRu6dfRds', 'Ying Wu'],
    ['OApeDBma_zY', 'Julien Mussard'],
    ['wjdRLcZQY2w', '毛 祥'],
    ['HFgxFulbsF4', 'billow 926'],
    ['QZwf5yNopUo', 'Lance Anderson'],
    ['xVwtcdB46z0', 'Bo Peng'],
    ['mf94VWJlMwU', 'Xtina Yu'],
  ];

  const container = unsplashPandas.map(([id, author], i) => ({
    uid: i,
    src: \`https://source.unsplash.com/\${id}/1000x1000\`,
    msrc: \`https://source.unsplash.com/\${id}/200x200\`,
    w: 1000,
    h: 1000,
    title: \`Picture by \${author}\`,
  }));

  useEffect(() => {
    if (!open && index !== null) setOpen(true);
  }, [index]);

  return (
    <Gallery
      container={container}
      onClick={setIndex}
      wrapperClass="flex flex-wrap"
      itemClass="p-1 w-1/6"
      imgClass="inline-block w-full"
    />

    <PhotoSwipe
      container={container}
      onIndexChange={setIndex}
      onOpenChange={setOpen}
      index={index}
      open={open}
      theme={{
        foreground: '#1A202C',
        background: '#81E6D9',
      }}
    />
  )
}
  `}
      </Highlight>
    </>
  );
};

export default PreviewProvider;
