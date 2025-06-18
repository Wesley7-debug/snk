
import "./globals.css";
import Footer from "./snk/Footer/Footer";
import Header from "./snk/Header/Header";



export const metadata = {
  title: "Snk",
  description: "snk branding and priniting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
    
      >
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
