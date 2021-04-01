import React, { useState } from "react";
import { getData } from "../services/News";
import MyMap from "../components/map/Map";
import { Scafolding } from "../components/Scafolding"
import { NewsForm } from "../components/forms/NewsForm";
import { Card } from "../components/Card";
import { useInterval } from "../services/useInterval"
import { Title } from "../components/Title"


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

  const formChange = async (values) => {
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
    <Scafolding sidePanelTitle={"Filter zobrazenia"} sidePanelContent={<NewsForm onChange={formChange} />}>
      <Card className="mr-20 flex-column flex-grow p-5">
        <Title as={`h1`}>Aktuálne dopravné informácie</Title>
        <MyMap data={state} />
      </Card>
    </Scafolding>
  );
}

export default News;
