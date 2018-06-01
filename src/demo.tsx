import * as React from 'react';
import * as dom from 'react-dom';
import ButtonIcon, { Size } from './buttons/ButtonIcon';
import IconHome from './icons/IconHome';
import IconSearch from './icons/IconSearch';

const Demo = () => {
  return (
    <>
      <div>This is our home icon: <IconHome /></div>
      <div>This is our search icon: <IconSearch /></div>
      <div>
        This is our button icon:
        <ButtonIcon renderIcon={IconHome} size={Size.Large} backgroundColor="red" color="white" />
      </div>
    </>
  );
};

const element = document.getElementsByClassName('app')[0];
dom.render(<Demo />, element);
