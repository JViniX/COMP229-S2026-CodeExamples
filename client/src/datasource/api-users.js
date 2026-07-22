


let baseUrl = import.meta.env.VITE_API_BASE_URL;

const create = async (user) => {
    try {
        let response = await fetch(baseUrl + "/api/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const signin = async (user) => {
    try {
        let response = await fetch(baseUrl + "/auth/signin", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


export { create, signin };