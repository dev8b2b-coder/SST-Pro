
import Footer from "./Components/Uiux/Footer";
import "./globals.css";
import localFont from "next/font/local";
const monaSansnormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-MediumWide.ttf" }],

  variable: "--font-mona-sans-normal"
});
const monaSansnormallight = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-LightWide.ttf" }],

  variable: "--font-mona-sans-normallight"
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${monaSansnormallight.variable} ${monaSansnormal.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
