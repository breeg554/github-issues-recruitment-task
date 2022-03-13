import styled from 'styled-components';

interface Props {
  danger: boolean;
}

export const StyledErrorMessage = styled.p<Props>`
  font-size: 14px;

  color: ${({ theme, danger }) => (danger ? theme.colors.core.danger : theme.colors.core.primary)};
`;
