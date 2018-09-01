// tslint:disable:max-file-line-count
import * as React from 'react';
import styled from '../../utils/mural-styled-components';

import DocsPageProps from '../../docs/pages/components/DocsPageProps';
import { DocsPlayground } from '../../docs/shared';
import { H1, H4, Link, P } from '../../text';
import { Size } from '../../utils/sizes';
import DocsColor from './utils/DocsColor';

const codeSnippet =
`import { ThemeProvider } from './ThemeProvider';

export default () => {
  const theme = {
    colorBody: '#efefef',
    colorButton: '#076699',
    colorDanger: '#ce0000',
    colorDisabled: '#ddd',
    colorPrimary: '#41bfee',
    colorSecondary: '#344a58',
    colorSuccess: '#22c65b',
    fontBase: '16px',
    radiusLarge: '50%',
    radiusMedium: '12px',
    radiusSmall: '2px',
    shadowLarge: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
    shadowMedium: '0px 1px 5px 0px rgba(0, 0, 0, 0.3)',
    shadowSmall: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
);
`;

const ColorGrid = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: repeat(4, auto);
`;

const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorSubGrid = styled.div`
  display: grid;
  width: 160px;
  height: 160px;
  grid-template-columns: repeat(2, 80px);
  grid-template-rows: repeat(2, 80px);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
    0 2px 2px rgba(39,44,49,.06),
    0 4px 4px rgba(39,44,49,.06),
    0 8px 8px rgba(39,44,49,.06),
    0 16px 16px rgba(39,44,49,.06),
    0 32px 32px rgba(39,44,49,.06),
    0 64px 64px rgba(39,44,49,.06);
`;

const DocsThemes = ({}: DocsPageProps) => {
  return (
    <>
      <H1 size={Size.Tera}>Theme</H1>
      <hr />
      <ColorGrid>
        <ColorInfo>
          <H4 size={Size.Mega}>Body</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Body}>Base</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.BodyDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.BodyLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.BodyText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={Size.Mega}>Primary</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Primary}>Body</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.PrimaryDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.PrimaryLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.PrimaryText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={Size.Mega}>Secondary</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Secondary}>Body</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SecondaryDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SecondaryLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SecondaryText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={Size.Mega}>Button</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Button}>Body</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.ButtonDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.ButtonLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.ButtonText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={Size.Mega}>Danger</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Danger}>Body</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DangerDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DangerLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DangerText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={Size.Mega}>Success</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Success}>Body</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SuccessDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SuccessLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SuccessText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={Size.Mega}>Disabled</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Disabled}>Body</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DisabledDark}>Dark</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DisabledLight}>Light</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DisabledText}>Text</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
      </ColorGrid>

      <DocsPlayground code={codeSnippet}>
        <P>Mural uses Styled Components themes to configure styling. You can override the theme
          using <Link href="https://www.styled-components.com/docs/advanced#theming" external>
          the theme prop</Link> (only do this if you have a good reason).</P>
      </DocsPlayground>
    </>
  );
};

export default DocsThemes;
