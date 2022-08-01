import React, { useState } from "react";
import { Search } from "react-feather";

const Navbar = (props) => {
  const [value, setValue] = useState("");

  const { search } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      search(value);
    }
    setValue("");
  };

  const handleChange = (arg) => {
    setValue(arg.target.value);
  };

  return (
    <div className="bg-rose-600 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="flex justify-center items-center">
        <input
          onChange={handleChange}
          className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search"
        />
        <Search
          onClick={handleSubmit}
          className="text-white ml-4 transition duration-150 ease-in-out transform hover:scale-110"
        />
      </form>
    </div>
  );
};

export default Navbar;
