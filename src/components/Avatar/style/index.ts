import styled from "styled-components";
interface Props {
  width: string;
}
export const StyledAvatar = styled.span<Props>`
  margin-top: 2px;
  display: block;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  img,
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .icon {
    color: ${({ theme }) => theme.colors.core.tertiary};
  }
`;
