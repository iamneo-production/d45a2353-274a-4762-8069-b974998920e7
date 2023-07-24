import React, { useState } from "react";
import productService from './Service';

const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    taskName: "",
    startDate: "",
   endDate: "",
   responder:""
    
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Added Successfully");
        setMsg(" Added Successfully");
        setProduct({
            taskName: "",
            startDate: "",
           endDate: "",
           responder:""
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">STUDENT ATTENDENCE MANAGEMENT</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Task Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.taskName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Start Date </label>
                    <input
                      type="text"
                      name="feestatus"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.startDate}
                    />
                  </div>
                  <div className="mb-3">
                    <label>End Date</label>
                    <input
                      type="Integer"
                      name="feespaid"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.endDate}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Responder</label>
                    <input
                      type="Integer"
                      name="remaining_fees_to_be_paid"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product. responder}
                    />
                  </div>

                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddProduct;