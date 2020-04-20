/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Highlight from 'react-highlight';

const props = [
  ['container', 'yes', 'undefined', 'Container array as described above'],
  ['index', 'no', '0', 'Current index'],
  ['open', 'no', 'false', 'Used to trigger PhotoSwipe open/close'],
  ['onIndexChange', 'no', 'console.log', 'Index change event'],
  ['onOpenChange', 'no', 'console.log', 'Open state change event'],
  ['options', 'no', '{}', 'Custom PhotoSwipe options'],
  [
    '*theme',
    'no',
    "{ foreground: '#000', background: '#fff' }",
    'Basic customization options',
  ],
];

const PreviewProvider = () => (
  <>
    <p className="mb-5">
      <code>&lt;PhotoSwipe/&gt;</code> is used to handle PhotoSwipe.
    </p>

    <table className="table-auto mb-5">
      <thead>
        <tr>
          <th className="px-4 py-2">Prop</th>
          <th className="px-4 py-2">Required</th>
          <th className="px-4 py-2">Default value</th>
          <th className="px-4 py-2">Comment</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, i) => (
          <tr key={`prop-${i}`}>
            <td className="border px-4 py-2">{prop[0]}</td>
            <td className="border px-4 py-2">{prop[1]}</td>
            <td className="border px-4 py-2">{prop[2]}</td>
            <td className="border px-4 py-2">{prop[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="italic mb-12">
      * <code>theme</code> props can be used for very simple customization. If
      you want something more complexe and tailor-made, simply use global CSS on
      PhotoSwipe markup (<code>.pswp</code>)
    </p>

    <h3 className="text-xl font-medium mb-2">Example</h3>

    <Highlight className="javascript rounded mb-6 text-sm">
      {`import React, { useState } from 'react';
import { Gallery } from 'react-pswp';

import 'react-pswp/dist/index.css';

const MyApp = () => {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const container = [ /* See above */ ];

  const options = { /* PhotoSwipe options */ };

  return (
    <PhotoSwipe
      container={container}
      onIndexChange={setIndex}
      onOpenChange={setOpen}
      index={index}
      open={open}
      options={options}
      theme={{
        foreground: '#000',
        background: '#fff',
      }}
    />
  )
}
  `}
    </Highlight>
  </>
);

export default PreviewProvider;
