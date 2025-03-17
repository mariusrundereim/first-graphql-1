import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Home from "./pages/Home";
import BeerDetailsPage from "./pages/BeerDetails";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beer/:id" element={<BeerDetailsPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
