export const createField = async (farm) => {
  try {
    console.log("farm", farm)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: farm.name,
        alt: farm.alt,
        polygon: farm.polydon,
        farmId: farm.farmId,
        sensor: farm.sensor,
      }),
    };
    let response = await fetch(("http://localhost:7071/api/AddFieldEndpoint", requestOptions))
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
export default createField
