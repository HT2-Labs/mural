// tslint:disable:max-line-length
const DocsMediaBannerCode = `import { Media } from '@ht2-labs/mural/media';

export default DocsMediaBanner = () => {
  return (
    <Media
      height="16%"
      title="Hello, this is an image"
      url="https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=602ef4d589c4a74e3222e97404621df8&auto=format&fit=crop&w=1000&q=50"
    />
  );
};
`;

const DocsMediaSquareCode = `import { Media } from '@ht2-labs/mural/media';

export default DocsMediaSquare = () => {
  return (
    <Media
      title="Hello, this is an image"
      url="https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=602ef4d589c4a74e3222e97404621df8&auto=format&fit=crop&w=1000&q=50"
    />
  );
};
`;

export { DocsMediaBannerCode, DocsMediaSquareCode};
