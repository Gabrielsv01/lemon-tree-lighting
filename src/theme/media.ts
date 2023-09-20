// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { css } from 'styled-components';

const media = {
  desktop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) and (max-width: 1024px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
};

export default media;
