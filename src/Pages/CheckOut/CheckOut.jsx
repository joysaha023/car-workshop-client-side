import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { alpha } from "@mui/material";

const CheckOut = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData(data);
      });
  }, []);

  const handleBookservice = (e)=> {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const service = singleData.title;
    const service_id = singleData._id;
    const image = singleData.img;
    const order = {
        customerName: name,
        service,
        service_id,
        image,
        email, 
        date, 
        price: price
    }
    console.log(order);

    fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('service book successfully')
        }
    })
  }

  return (
    <div>
      <h2>hello {singleData.title}</h2>
      <div>
        <form onSubmit={handleBookservice} className="card-body">
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
           
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                defaultValue={user.email}
                name="email"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="number"
                defaultValue={singleData.price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
         
          <div className="form-control mt-6">
            <button className="btn btn-primary">Order Confirmed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
