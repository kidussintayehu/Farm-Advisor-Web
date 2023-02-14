const displaySensor = async () => {
    try {
        let response = await fetch('"http://localhost:7071/api/users//farms/sensorData')
        return response
    } catch (error) {
        console.log(error)
    }
}

export default displaySensor