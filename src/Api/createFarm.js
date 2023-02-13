const createFarm = async (farm) => {
  console.log("farm", farm)
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: farm.name,
        postcode: farm.postcode,
        city: farm.city,
        country: farm.country,
        notification: farm.notification,
        field:farm.field,
        userId : farm.userId
      }),
    };
    let response = await fetch(("http://localhost:7071/api/AddFarmEndpoint", requestOptions))
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
  
export default createFarm