import "../styles/globals.css";
import { ThemeProvider } from "twui";
import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1 className="text-xl text-red-600">App</h1>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
