import { useState } from "react";

const PackageViewer = () => {

  let myPromise = fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then( response => response.json() )
      .then( setData => console.log(setData) )

      let[data, setData] = useState("");


  const parcels = [
    {
      status: "delivered",
      eta: "2022-05-03",
      parcel_id: "9042",
      sender: "Midel"
    },
    {
      status: "on-the-way",
      eta: "2022-05-27",
      parcel_id: "4840",
      sender: "Thoughtbridge"
    },
    {
      status: "ready-for-pickup",
      eta: "2022-05-19",
      parcel_id: "245",
      sender: "Wikizz"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parcels</h1>

      <h1>My favorite color is {data}!</h1>


      <h2>{parcels[0].sender}</h2>
      <ul>
        <li>{parcels[0].status}</li>
        <li>{parcels[0].eta}</li>
        <li>{parcels[0].parcel_id}</li>
        <li>{parcels[0].sender}</li>
      </ul>

      <h2>{parcels[1].sender}</h2>
      <ul>
        <li>{parcels[1].status}</li>
        <li>{parcels[1].eta}</li>
        <li>{parcels[1].parcel_id}</li>
        <li>{parcels[1].sender}</li>
      </ul>

      <h2>{parcels[2].sender}</h2>
      <ul>
        <li>{parcels[2].status}</li>
        <li>{parcels[2].eta}</li>
        <li>{parcels[2].parcel_id}</li>
        <li>{parcels[2].sender}</li>
      </ul>
    </div>
  );
};

export default PackageViewer;