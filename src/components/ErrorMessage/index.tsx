import { StyledErrorMessage } from "./style";

interface ErrorMessageProps {
  msg: string;
  danger?: boolean;
}

export const ErrorMessage = ({ msg, danger = false }: ErrorMessageProps) => {
  return <StyledErrorMessage danger={danger}>{msg}</StyledErrorMessage>;
};
