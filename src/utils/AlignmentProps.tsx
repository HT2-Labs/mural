export enum Align {
  Left,
  Center,
  Right,
}

export default interface AlignmentProps {
  readonly alignment?: Align;
}

export const getTextAlignment = (align: Align) => {
  switch (align) {
    case Align.Left:
    default:
      return 'text-align: left';

    case Align.Center:
      return 'text-align: center';

    case Align.Right:
      return 'text-align: right';
  }
};
