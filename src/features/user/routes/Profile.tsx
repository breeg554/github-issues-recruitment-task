import { PeopleIcon } from "@primer/octicons-react";
import { useParams } from "react-router-dom";
import { Avatar, StarsCount } from "../../../components";
import { formatNumberByComma } from "../../../utils/transform";
import { useUser } from "../api";
import { ProfileSkeleton } from "../components";
import { StyledProfile } from "./style";

export const Profile = () => {
  const { login } = useParams();
  const { data, loading, error } = useUser(login);

  return (
    <StyledProfile>
      {loading ? (
        <ProfileSkeleton />
      ) : error ? (
        <p>{error.message}</p>
      ) : !data ? (
        <p>No data</p>
      ) : (
        <>
          {data.avatarUrl ? (
            <Avatar url={data.avatarUrl} userLogin={data.login} width="296px" />
          ) : null}
          {data.name ? <h1>{data.name}</h1> : null}
          {data.login ? <p className="login">{data.login}</p> : null}
          <div className="social-wrapper">
            {data.followers ? (
              <span>
                <PeopleIcon /> {formatNumberByComma(data.followers.totalCount)} Followers
              </span>
            ) : null}
            {data.following ? (
              <span>{formatNumberByComma(data.following.totalCount)} Following</span>
            ) : null}
            {data.starredRepositories ? (
              <StarsCount count={data.starredRepositories.totalCount} />
            ) : null}
          </div>
        </>
      )}
    </StyledProfile>
  );
};
