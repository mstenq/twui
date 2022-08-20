import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <h1 className="text-xl text-red-600">App</h1>
      <Component {...pageProps} />
    </div>
  );
}
