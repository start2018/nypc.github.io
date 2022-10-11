import styled from "@emotion/styled";

export const Code = styled.code`
  &:not([class*="language-"]) {
    background-color: ${({ theme }) => theme.color.background.card.main};
    color: ${({ theme }) => theme.color.status.error};
  }
  &.language-text {
    background-color: ${({ theme }) => theme.color.background.card.main};
    color: inherit;
  }
  padding: 0 0.25em;
  border-radius: 0.25em;
  font-size: 95%;
`;
