import styled from "styled-components";

import media from "@theme/media";
import { theme } from "@theme/variables";

export const Title = styled.h1`
  font-size: ${theme.fontSize.xlarge}px;
  text-align: center;
  margin: ${theme.spacing.zero}px ${theme.spacing.zero}px
    ${theme.spacing.small}px;
`;
export const Subtitle = styled.h2`
  text-align: center;
  font-size: ${theme.fontSize.large}px;
  margin: ${theme.spacing.xsmall}px ${theme.spacing.zero}px;
`;
export const Description = styled.p`
  font-size: ${theme.fontSize.small}px;
  margin: ${theme.spacing.zero}px ${theme.spacing.zero}px;
  font-weight: ${theme.fontWeight.regular};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  max-width: 580px;
  width: 100%;
  padding-bottom: ${theme.spacing.large}px;
  border-radius: ${theme.border.radius.regular}px;

  ${media.mobile`
    padding: ${theme.spacing.small}px;
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
  padding: ${theme.spacing.small}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    padding: ${theme.spacing.xhuge}px ${theme.spacing.zero}px;
  `}
`;

export const WrapperDropDown = styled.div`
  margin-top: ${theme.spacing.small}px;
  max-width: 300px;
  width: 100%;

  background-color: ${theme.colors.white};
`;

export const InputWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: ${theme.colors.white};
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;
