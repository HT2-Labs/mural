import * as React from 'react';

import Media from '../Media';

const DocsMediaBanner = () => {
  return (
    <Media
      height="16%"
      title="Hello, this is an image"

      // tslint:disable-next-line:max-line-length
      url="https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=602ef4d589c4a74e3222e97404621df8&auto=format&fit=crop&w=1000&q=50"
    />
  );
};

const DocsMediaSquare = () => {
  return (
    <Media
      title="Hello, this is an image"

      // tslint:disable-next-line:max-line-length
      url="https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=602ef4d589c4a74e3222e97404621df8&auto=format&fit=crop&w=1000&q=50"
    />
  );
};

export { DocsMediaBanner, DocsMediaSquare };
