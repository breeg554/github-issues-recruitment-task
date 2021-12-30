import { GitBranchIcon, MarkGithubIcon } from "@primer/octicons-react";
import { memo } from "react";
import { Link } from "react-router-dom";
import useImageOnLoad from "../../hooks/useImageOnLoad";
import { StyledAvatar } from "./style";

interface AvatarProps {
  url: string | undefined;
  withLink?: boolean;
  userLogin: string;
}

export const Avatar = memo(({ url, withLink = false, userLogin }: AvatarProps) => {
  const { handleImageOnLoad, css } = useImageOnLoad();
  if (withLink)
    return (
      <Link to={`/${userLogin}`}>
        <StyledAvatar>
          <img
            src={url}
            alt={userLogin}
            onLoad={handleImageOnLoad}
            style={{ ...css.fullSize }}
          />
          <span className="icon" style={{ ...css.thumbnail }}>
            <MarkGithubIcon />
          </span>
        </StyledAvatar>
      </Link>
    );
  return (
    <StyledAvatar>
      <img src={url} alt={userLogin} />
    </StyledAvatar>
  );
});
