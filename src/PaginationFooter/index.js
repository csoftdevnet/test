import React, { useState } from "react";
import { Link } from "react-router-dom";

import useTable from "../utils/customHook/paginationHook";

import PaginationButton from "./PaginationButton";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div className="table">
      <div className="row">
        <div className="row-inner-main">
          <div className="col-md">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Price</th>
                  <th scope="col">Reviews</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {slice?.map((product) => (
                  <>
                    <tr>
                      <td className="d-flex">
                        <div>
                          <img src={product.image} alt="avatar" />
                        </div>
                        <div>
                          <div>{product.name}</div>
                        </div>
                      </td>
                      <td>{product.brand}</td>
                      <td>{product.price}</td>
                      <td>{product.numReviews}</td>
                      <td>
                        <Link to={`/productdetail/${product.id}`} >
                        <button type="button" className="btn btn-danger" >
                          Detail
                        </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationButton
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
