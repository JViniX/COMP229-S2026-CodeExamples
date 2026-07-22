


let baseUrl = import.meta.env.VITE_API_BASE_URL;
let endpoint = "/api/projects/";

const list = async () => {
    try {
        let response = await fetch(baseUrl + endpoint, {
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

const remove = async (id) => {
    try {
        let response = await fetch(baseUrl + endpoint + id, {
            method: 'DELETE',
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

const create = async (project) => {
    try {
        let response = await fetch(baseUrl + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const update = async (id, project) => {
    try {
        let response = await fetch(baseUrl + endpoint + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const read = async (id) => {
    try {
        let response = await fetch(baseUrl + endpoint + id, {
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

export { list, remove, create, update, read };