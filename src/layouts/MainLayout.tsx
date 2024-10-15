import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <h1 className="text-3xl font-bold text-center">Star Wars Explorer</h1>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
