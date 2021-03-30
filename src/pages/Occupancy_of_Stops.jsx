import React, { useState } from "react";
import { SidePanel } from "../components/SidePanel";
import { StopForm } from "../components/forms/StopsForm";
import { Card } from "../components/Card";
import { getData } from "../services/Delays";


export const Occupancy_of_Stops = () => {
  // const [item, setItem] = useState(`stop`);
  // const [dropItem, setDropItem] = useState(`Abrahámovce`);
  // const [onStopInterval, setOnStopInterval] = useState(`15min`);
  // const [data, setData] = useState({});

  // const buttonFormChange = async (form) =>{
  //   setItem(form.typeItem)
  //   setDropItem(form.dropItem)
  //   setOnStopInterval(form.interval)
  //                           //vehicles/stop, dropItem, timeInterval
  //   const res = await getData(form.typeItem,form.dropItem, onStopInterval);
  //   setData(res);
  // }

  return (
    <div>
      <div className="flex my-20 h-full">
        <SidePanel className="pr-2">
          <StopForm />
          {/*//onChange={buttonFormChange} /> */}
        </SidePanel>{" "}
        <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">Vyťženosť zastávok</div>
          <div className="map my-2">
            {/* <button
              onClick={() => {
                handleGetTimeOnCurrentStop();
              }}
            >
              Download_TimeOnCurrentStop
            </button> */}
          </div>
          <div>
            {/* <button
              onClick={() => {
                handleGetTimeOnStopsByCurrentBus();
              }}
            >
              Download_TimeOnStopsByCurrentBus
            </button> */}
          </div>
        </Card>
      </div>
      <Card>Štatistika</Card>
    </div>
  );
};

export default Occupancy_of_Stops;
