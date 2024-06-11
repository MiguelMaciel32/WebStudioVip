import { UtilsProvider } from "../context/loginContext";

export default function ClientSideProviders({
  children,
}: {
  children: React.ReactElement;
}) {
  return <UtilsProvider>{children}</UtilsProvider>;
}
