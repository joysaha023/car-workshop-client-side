import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BookRow from "../../Components/BookRow/BookRow";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl">Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {
                    bookings.map(item => <BookRow key={item._id} item={item}></BookRow>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
