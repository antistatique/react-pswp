# 🖼️🖼️🖼️ react-pswp

> Flexible React wrapper for PhotoSwipe

[![NPM](https://img.shields.io/npm/v/react-pswp.svg)](https://www.npmjs.com/package/react-pswp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-pswp
// or
npm install --save react-pswp
```

## Usage

```jsx
import React, { useState, useEffect } from 'react';
import { Gallery, PhotoSwipe } from 'react-pswp';

import 'react-pswp/dist/index.css';

const MyApp = () => {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const myPicture = [ /* you image set */ ]

  const container = myPicture.map((picture, i) => ({
    uid: i,
    src: picture.original,
    msrc: picture.thumbnail,
    w: picture.width,
    h: picture.height,
    title: `Picture by ${picture.author}`,
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
```

For more information, 📗 **[read the interactive documentation](https://antistatique.github.io/react-pswp)**


## Contribute

First, install all dependencies:

```bash
$ yarn
$ cd ./example && yarn
```

To ease both module and example contributions, start the following commands in paralel.

```bash
$ yarn start
# AND
$ cd ./example && yarn start
```

## License

MIT © [Antistatique](https://github.com/Antistatique)

---

This library is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
