import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length > 0) {
      axios
        .get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: "irJynhC2Aj_vPHC7lX3jW6yHiGatDkFvL1xU1d-wW8M",
            page: 1,
            query: searchValue,
          },
        })
        .then((res) => {
          setResults(res.data.results);
          console.log(res.data.results);
        });
    } else {
      axios
        .get("https://api.unsplash.com/photos/", {
          params: {
            client_id: "irJynhC2Aj_vPHC7lX3jW6yHiGatDkFvL1xU1d-wW8M",
          },
        })
        .then((res) => {
          setResults(res.data);
          console.log(res.data);
        });
    }
  }, [searchValue]);

  const Search = (value) => {
    setSearchValue(value);
    console.log(value);
  };

  return (
    <main>
      <Navbar search={Search} />
      <div className="gap-6 columns-3 m-6 mb-20">
        {results.map((result) => {
          return (
            <Cart
              key={result.id}
              className="w-full"
              image={result.urls.small}
              description={result.description}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
