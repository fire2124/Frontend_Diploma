import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { StopForm } from "../components/forms/StopsForm";
import { Card } from "../components/Card";
import { getData } from "../services/onStop";


export const Occupancy_of_Stops = () => {
  const [data, setData] = useState({});

  const buttonFormChange = async (formData) =>{
    console.log(formData);
    const res = await getData(formData.select,formData.vehicleTypeId, formData.interval);
    setData(res);
  }

  return (
    <div>
      <div className="flex my-20 h-full">
        <SidePanel className="pr-2">
          <StopForm onChange={buttonFormChange}/>
        </SidePanel>{" "}
        <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">Vyťženosť zastávok</div>
          {JSON.stringify(data, 2)}
        </Card>
      </div>
      <Card>Štatistika</Card>
    </div>
  );
};

export default Occupancy_of_Stops;
