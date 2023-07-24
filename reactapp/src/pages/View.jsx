import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "./Service";
import Navbar2 from "./Nav";
// import productService 

const Homes = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3">
        <Navbar2/>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              <h1>Task Management</h1>
              <br />
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            </div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Responder</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((p, index) => (
                    <tr key={p.id}>
                      <td>{index + 1}</td>
                      <td>{p.taskName}</td>
                      <td>{p.startDate}</td>
                      <td>{p.endDate}</td>
                      <td>{p.responder}</td>
                      <td>
                        <button  className="btn btn-sm btn-danger ms-1">
                        <Link to={`/editProduct/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                        <br />
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="btn btn-sm btn-danger ms-1"
                        >
                          DELETE
                        </button>
                        
                        <Link  to="/addProduct" className="nav-link active" aria-current="page" href="#">ADD DETAILS</Link>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;