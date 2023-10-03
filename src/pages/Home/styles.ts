import styled from "styled-components";

import media from "@theme/media";
import { theme } from "@theme/variables";

export const Title = styled.h1`
  font-size: ${theme.fontSize.xxlarge}px;
  margin: ${theme.spacing.zero}px ${theme.spacing.zero}px
    ${theme.spacing.small}px;
`;
export const Subtitle = styled.h2`
  font-size: ${theme.fontSize.xlarge}px;
  margin: ${theme.spacing.xsmall}px ${theme.spacing.zero}px;
`;
export const Description = styled.p`
  font-size: ${theme.fontSize.medium}px;
  margin: ${theme.spacing.zero}px ${theme.spacing.zero}px;
  font-weight: ${theme.fontWeight.regular};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 580px;
  border-radius: ${theme.border.radius.regular}px;

  ${media.mobile`
    padding: ${theme.spacing.small}px;
    margin: ${theme.spacing.small}px;
    width: auto ;
  `}

  ${media.desktop`
    padding: ${theme.spacing.medium}px ${theme.spacing.zero}px;
  `}

  .MuiFormLabel-root {
    background-color: ${theme.colors.white};
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    justify-content: center;
    height: 100vh;
  `}
`;

export const WrapperDropDown = styled.div`
  margin-top: ${theme.spacing.small}px;
  width: 300px;
  background-color: ${theme.colors.white};
`;

export const InputWrapper = styled.div`
  width: 300px;
  background-color: ${theme.colors.white};
`;
