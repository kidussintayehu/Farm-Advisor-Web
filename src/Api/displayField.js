const displayField = async () => {
    try {
        let response = await fetch('"http://localhost:7071/api/users/farms/fields')
        return response
    } catch (error) {
        console.log(error)
    }
}

export default displayField