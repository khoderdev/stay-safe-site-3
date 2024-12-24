import Layout from "./views/Layout";
import AppRoutes from "./router/index";
import React from "react";

function App() {
  return (
    <div className="font-sans antialiased">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
