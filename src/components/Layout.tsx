import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="bg-black">
      <main className="p-6 bg-black mx-auto max-w-screen-xl">{children}</main>
    </p>
  );
};

export default Layout;
