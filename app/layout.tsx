import "../styles/globals.scss";
import Header from "./Header";
import Providers from "./Providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-100 flex flex-col items-center justify-center dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className="max-w-6xl ">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
