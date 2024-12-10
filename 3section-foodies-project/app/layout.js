import "./globals.css";
import MainHeader from "@/components/mainHeader";
import Background from "@/components/background";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
