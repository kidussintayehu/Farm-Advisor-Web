const createField = async (farm) => {
    try {
      console.log("farm", farm)
      return  await farm
  
    } catch(err) {
        console.log(err)
    }
  }
  
export default createField