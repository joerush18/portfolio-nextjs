import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-fixed">
      <div className="md:mx-12 pt-2 font-textPrimary lg:mx-48 mx-2">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
