import React, { useEffect, useState } from "react";
import PrivateNavBar from "../../Layout/Navbar/PrivateNavBar";
import Table from "../../PaginationFooter";
import axios from "axios";
const User = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
            setProduct(res.data)
    });
  },[]);

  return (
    <>
      <PrivateNavBar />
      <Table data={product} rowsPerPage={5} />
    </>
  );
};

export default User;
