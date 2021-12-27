import { StyledMainLayout } from "./style";
import { PageHeader } from "..";
interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledMainLayout>
      <PageHeader />
      <main>{children}</main>
    </StyledMainLayout>
  );
};
