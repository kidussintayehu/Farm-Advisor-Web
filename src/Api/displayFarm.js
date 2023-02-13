const displayFarm = async () => {
    try {
        let response = await fetch('"http://localhost:7071/api/users/farms')
        return response
    } catch (error) {
        console.log(error)
    }
}

export default displayFarm