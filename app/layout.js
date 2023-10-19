import "./globals.scss";
import { Metadata } from "next";
import Header from "../components/Header";

export const metadata = {
  title: "kwa-Ground",
  description: "All trending news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="max-w-7xl mx-auto"
        //style={{
        // as: "image",
        //backgroundImage: `url(${bg.src})`,
        //placeholder: "blur",
        //blurDataURL: `url(${bg.src})`,
      >
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

