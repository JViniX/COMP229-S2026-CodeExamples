
const list = async () => {
    try {
        let response = await fetch("http://localhost:3000/api/projects", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export { list };