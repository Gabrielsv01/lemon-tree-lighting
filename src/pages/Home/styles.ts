import styled from "styled-components";
import { theme } from "theme/variables";

export const Title = styled.h1``;
export const Subtitle = styled.h2``;
export const Description = styled.h3``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
