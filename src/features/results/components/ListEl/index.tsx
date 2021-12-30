import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { memo } from "react";
import { Link } from "react-router-dom";
import { RepoIcon } from "@primer/octicons-react";
import { truncateRepoDescription } from "../../../../utils/transform";
import { isUser, Repository, User } from "../../types";
import { StyledListEl, StyledListElFooter, StyledListElHeader } from "./style";
import { RepoIssues } from "./RepoIssues";
import { RepoLanguages } from "./RepoLanguages";
import { Avatar, StarsCount } from "../../../../components";
dayjs.extend(relativeTime);

interface ListElProps {
  data: User | Repository;
}

export const ListEl = memo(({ data }: ListElProps) => {
  return (
    <StyledListEl>
      <article>
        {isUser(data) ? (
          <Avatar withLink url={data.avatarUrl} userLogin={data.login} />
        ) : (
          <span className="repo-icon">
            <RepoIcon size={16} />
          </span>
        )}
        <div className="site-wrapper">
          <StyledListElHeader>
            {data.name ? (
              <Link to={`/${isUser(data) ? data.login : ""}`}>
                <h2>{data.name}</h2>
              </Link>
            ) : null}
            {isUser(data) ? (
              <p className="description">{data.login}</p>
            ) : data.description ? (
              <p className="description">{truncateRepoDescription(data.description)}</p>
            ) : null}
          </StyledListElHeader>
          {isUser(data) ? data.bio ? <p className="bio">{data.bio}</p> : null : null}
          <StyledListElFooter>{renderFooter(data)}</StyledListElFooter>
        </div>
      </article>
    </StyledListEl>
  );
});
const renderFooter = (data: User | Repository) => {
  if (isUser(data)) return <>{data.location ? <span>{data.location}</span> : null}</>;
  return (
    <>
      {data.stargazerCount ? <StarsCount count={data.stargazerCount} /> : null}

      {data.languages && data.languages.nodes[0] ? (
        <RepoLanguages data={data.languages.nodes[0]} />
      ) : null}

      {data.licenseInfo ? <span>{data.licenseInfo.name}</span> : null}

      <span>{dayjs(data.updatedAt).fromNow()}</span>

      {data.issues && data.issues.totalCount > 0 ? (
        <RepoIssues total={data.issues.totalCount} />
      ) : null}
    </>
  );
};
