
const helpList = async () => {
    try {
        let response = await fetch('Help.json',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
  }
  export default helpList