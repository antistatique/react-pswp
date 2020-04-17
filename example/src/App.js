import React, { useState } from 'react';
import { PhotoSwipe } from 'react-pswp';

import 'react-pswp/dist/index.css';

const App = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const demo = [
    '5iFZBM7qgWc',
    'P7fVUSY-5ws',
    '_d0zgyMmYT8',
    'aaC9NWEhHjI',
    'HV96oPiv_2g',
    '6CcoF7h9h-k',
    '7LsuYqkvIUM',
    'iq96SvUkuxQ',
    'NOWC4AtCIC4',
    'NSSsyfAQW2g',
    'oqYHtXrLXLo',
  ];

  const container = demo.map(id => ({
    src: `https://source.unsplash.com/${id}/1000x1000`,
    w: 1000,
    h: 1000,
  }));

  const options = {};

  const handleClick = (e, i) => {
    e.preventDefault();
    setIndex(i);
    if (!open) setOpen(true);
  };

  return (
    <>
      {demo.map((id, i) => (
        <a
          href={container[i].src}
          key={`thumb-${i}`}
          onClick={e => handleClick(e, i)}
        >
          <img src={`https://source.unsplash.com/${id}/100x100`} alt="thumb" />
        </a>
      ))}

      <PhotoSwipe
        container={container}
        onIndexChange={i => setIndex(i)}
        onOpenChange={o => setOpen(o)}
        index={index}
        open={open}
        options={options}
      />
    </>
  );
};
export default App;
