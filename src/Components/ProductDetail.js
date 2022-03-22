import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [state,setState] = useState()
  const paramsId = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/products/${paramsId.id}`).then((res) => {
        setState(res.data)
    });
  },[]);
    console.log("first",state)
  return (
    <div>
     <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-10">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="images p-3">
              <div className="text-center p-4"> <img id="main-image" src={state?.image} width={250} /> </div>
              <div className="thumbnail text-center"> <img onclick="change_image(this)" src={state?.image} width={70} /> <img src={state?.image} width={70} /> </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left" /> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted" />
              </div>
              <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{state?.name}</span>
                <h5 className="text-uppercase">{state?.brand}</h5>
                <div className="price d-flex flex-row align-items-center"> <span className="act-price">{state?.price}</span>
                  <div className="ml-2"><span>40% OFF</span> </div>
                </div>
              </div>
              <p className="about">{state?.description}</p>
              <div className="sizes mt-5">
                <h6 className="text-uppercase">Size</h6> <label className="radio"> <input type="radio" name="size" defaultValue="S" defaultChecked /> <span>S</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="M" /> <span>M</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="L" /> <span>L</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="XL" /> <span>XL</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="XXL" /> <span>XXL</span> </label>
              </div>
              <div className="sizes mt-5">
                <h6 className="text-uppercase">Rating :{state?.rating}</h6> 
              </div>
              <div className="cart mt-4 align-items-center">   
                <Link to={`/carts`} >
                     <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted" /> <i className="fa fa-share-alt text-muted" />
                     </Link>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductDetail