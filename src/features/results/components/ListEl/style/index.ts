import styled from "styled-components";

export const StyledListEl = styled.li`
  list-style: none;
  width: 100%;
  border-top: 1px solid #c4c4c4;
  padding-top: 22px;
  /* padding-bottom: 16px; */
  margin-top: 16px;
  article {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    .site-wrapper {
      display: inline-block;
      width: calc(100% - 10px - 15px);
    }
  }
  .repo-icon {
    line-height: 30px;
    color: ${({ theme }) => theme.colors.core.tertiary};
  }
  .bio {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const StyledListElHeader = styled.header`
  margin-bottom: 15px;
  max-width: 100%;

  .description,
  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
  h2 {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-weight: 600;
  }
  h2:hover {
    text-decoration: underline;
  }
  .description {
    color: ${({ theme }) => theme.colors.core.tertiary};
  }
`;
export const StyledListElFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  column-gap: 14px;
  max-width: 100%;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.core.tertiary};
  }
`;

interface StyledRepoProps {
  circleColor: string;
}
export const StyledRepoLanguages = styled.span<StyledRepoProps>`
  display: flex;
  align-items: center;
  gap: 3px;
  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ circleColor }) => circleColor};
  }
`;
