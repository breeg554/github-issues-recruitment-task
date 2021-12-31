import { ReposAndUsers } from "../../types";
import { ListEl } from "../ListEl";

interface ListProps {
  data: ReposAndUsers;
}

export const List = ({ data }: ListProps) => {
  return (
    <ul>
      {data.data.map((el) => (
        <ListEl key={el.id} data={el} />
      ))}
    </ul>
  );
};
