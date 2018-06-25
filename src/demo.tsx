import * as React from 'react';
import * as dom from 'react-dom';
import ButtonIcon, { Size } from './buttons/ButtonIcon';

import DocsIcons from './docs/DocsIcons';
import IconHome from './icons/IconHome';

const Demo = () => {
  return (
    <>
      <DocsIcons />
      <div>
        This is our button icon:
        <ButtonIcon renderIcon={IconHome} size={Size.Medium} backgroundColor="red" color="white" />
      </div>
    </>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
