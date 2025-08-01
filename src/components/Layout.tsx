import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;