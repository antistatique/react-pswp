/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Highlight from 'react-highlight';

const props = [
  ['container', 'yes', 'undefined', 'Container array as described above'],

  [
    'onClick',
    'no',
    'console.log',
    'Returns the <code>uid</code> of the clicked item.',
  ],

  ['wrapperClass', 'no', '""', 'Gallery wrapper class'],

  ['itemClass', 'no', '""', 'Gallery item class'],

  ['imgClass', 'no', '""', 'Gallery image tag class'],
];

const PreviewProvider = () => (
  <>
    <p className="mb-5">
      <code>&lt;Gallery/&gt;</code> is used to display your thumbnails.
    </p>

    <h3 className="text-xl font-medium mb-2">Props</h3>

    <table className="table-auto mb-12">
      <thead>
        <tr>
          <th className="border px-4 py-2">Prop</th>
          <th className="border px-4 py-2">Required</th>
          <th className="border px-4 py-2">Default value</th>
          <th className="border px-4 py-2">Comment</th>
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

    <h3 className="text-xl font-medium mb-2">Example</h3>

    <Highlight className="javascript rounded mb-6 text-sm">
      {`import React, { useState } from 'react';
import { Gallery } from 'react-pswp';

const MyApp = () => {
  const [index, setIndex] = useState(null);

  const container = [ /* See above */ ];

  return (
    <Gallery
      container={container}
      onClick={setIndex}
      wrapperClass="flex flex-wrap"
      itemClass="p-1 w-1/6"
      imgClass="inline-block w-full"
    />;
  )
}
  `}
    </Highlight>
  </>
);

export default PreviewProvider;
