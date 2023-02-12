const createField = async (farm) => {
    try {
      //   let response = await fetch('http://localhost:3000/api/books', {
      //       method: 'POST',
      //       headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json',
      //       'Authorization': 'Bearer ' + credentials.t
      //   },
      //       body: JSON.stringify(book)
      // })
      //   return await response.json()
      console.log("farm", farm)
      return  await farm
  
    } catch(err) {
        console.log(err)
    }
  }
  
export default createField