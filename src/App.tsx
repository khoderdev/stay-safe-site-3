import Header from "./components/header/Header";
import Layout from "./views/Layout";
import AppRoutes from "./router/index";
import React from "react";

function App() {
  return (
    <div className="scrollbar-hide overflow-hidden">
      <Header />
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}
export default App;