import * as React from 'react';
import * as dom from 'react-dom';
import IconHome from './icons/IconHome';

const Demo = () => {
  return (
    <>
      <button style={{ width: 200, height: 50 }}>Hi there <IconHome /></button>
      {/* <button>Hi there <IconHome width={200} height={100} color="red" /></button> */}
    </>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
