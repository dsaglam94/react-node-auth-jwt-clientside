import Footer from "./footer/Footer";
import DesktopNavigation from "./navigation/DesktopNavigation";

const Layout = ({ children }) => {
  return (
    <main>
      <DesktopNavigation />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
