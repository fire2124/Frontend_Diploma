

// INPUT je output z formu 

// sql ?? indexdb 
// if is in localstorage or expired  
// global variable cache 


// return and make markers for map 

export const getData = async () => {
    await getMhdStops().then((res) => {
        console.log(res);
      });
  
      await getSadStops().then((res) => {
        console.log(res);
      });
  
      await getTrainStops().then((res) => {
        console.log(res);
      });
  
      await getMhdPoBusses().then((res) => {
        console.log(res);
        setInterval(async function () {
          await getMhdPoBusses().then((res2) => {
            console.log(res2);
          })
        }, 15000)
      });
  
      await getSadPoBusses().then((res) => {
        console.log(res);
        setInterval(async function () {
          await getSadPoBusses().then((res2) => {
            console.log(res2);
          })
        }, 15000)
      });
  
      await getTrains().then((res) => {
        console.log(res);
        setInterval(async function () {
          await getTrains().then((res2) => {
            console.log(res2);
          })
        }, 15000)
      });
  
      await getTraffic().then((res) => {
        console.log(res);
        setInterval(async function () {
          await getTraffic().then((res2) => {
            console.log(res2);
          })
        }, 900000)
      });
}

