const createSensor = async (farm) => {
  try {
    console.log("farm", farm)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sensorId: farm.sensorId,
        serialNumber: farm.serialNumber,
        lastCommunication: farm.lastCommunication,
        batteryStatus: farm.batteryStatus,
        optimalGDD: farm.optimalGDD,
        cuttingDateTimeCalculated: farm.cuttingDateTimeCalculated,
        lastForecastDate: farm.lastForecastDate,
        lat: farm.lat,
        long: farm.long,
        state: farm.state,
        fieldId: farm.fieldId
      }),
    };
    let response = await fetch(("http://localhost:7071/api/AddSensorEndpoint", requestOptions))
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default createSensor

