import React, { useState } from "react";
import { getData } from "../services/News";
import MyMap from "../components/Map/Map";
import { SidePanel } from "../components/SidePanel";
import { NewsForm } from "../components/Forms/NewsForm";
import { Card } from "../components/Card";
import { useInterval } from "../services/useInterval"

const initState = {
  mhdPresov: null,
  sadPresov: null,
  trains: null,
  traffic: null,
  mhdStops: null,
  sadStops: null,
  trainStops: null,
};

const DATA_REFRESH_INTERVAL = 15000

const News = () => {
  const [state, setState] = useState(initState)
  const [latestVal, setLatestVal] = useState({})
  
  const formChange = async(values) => {
    setLatestVal(values)
    await handleDownload(values)
  } 

  const handleDownload = async (values) => {
    const response = await getData(values);
    setState(response);
  }
  
  useInterval(async () => {
    handleDownload(latestVal)
  }, DATA_REFRESH_INTERVAL)

  return (
      <div className="flex my-20 h-full">
        <SidePanel title={"Filter zobrazenia"} className="pr-2">
          <NewsForm onChange={formChange} />
        </SidePanel>
        <Card className="mr-20 flex flex-grow">
          <div className="text_name py-5 px-5">
            Aktuálne dopravné informácie
          </div>
          <div className="map my-2">
            <MyMap data={state} />
          </div>
        </Card>
      </div>
    );
}

export default News;
