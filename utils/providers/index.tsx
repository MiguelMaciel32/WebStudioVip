import { UtilsProvider } from "../context/loginContext";

export default function ClientProviders({ children }: {  children: React.ReactNode}) {
    return (
      <UtilsProvider>
        {children}
      </UtilsProvider>
    )
}