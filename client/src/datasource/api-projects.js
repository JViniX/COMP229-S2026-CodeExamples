let baseUrl = import.meta.env.VITE_API_BASE_URL;
let endpoint = "/api/projects/";
import { getToken } from "../components/auth/auth-helper";

const list = async () => {
    try {
        let response = await fetch(baseUrl + endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error?.message || 'Unable to connect to the projects API.'
        };
    }
}

const remove = async (id) => {
    try {
        let response = await fetch(baseUrl + endpoint + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error?.message || 'Unable to connect to the projects API.'
        };
    }
}

const create = async (project) => {
    try {
        let response = await fetch(baseUrl + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(project)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error?.message || 'Unable to connect to the projects API.'
        };
    }
}

const update = async (id, project) => {
    try {
        let response = await fetch(baseUrl + endpoint + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(project)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error?.message || 'Unable to connect to the projects API.'
        };
    }
}

const read = async (id) => {
    try {
        let response = await fetch(baseUrl + endpoint + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error?.message || 'Unable to connect to the projects API.'
        };
    }
}

export { list, remove, create, update, read };