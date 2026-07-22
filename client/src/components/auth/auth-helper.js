import { jwtDecode } from 'jwt-decode'

const authenticate = (token, cb)=>{
    if(typeof window !== "undefined"){
        sessionStorage.setItem("token", token);

        let payload = jwtDecode(token);
        sessionStorage.setItem("userId", payload.id);
        sessionStorage.setItem("username", payload.username);
        sessionStorage.setItem("email", payload.email);
    }
    cb();
}

const isAuthenticated = ()=>{
    if(typeof window === "undefined"){
        return false;
    }
    return !!sessionStorage.getItem('token');
}

const getToken = ()=>{
    if(typeof window === "undefined"){
        return false;
    }
    return sessionStorage.getItem('token');
}

const getUsername = ()=>{
    if(typeof window === "undefined"){
        return false;
    }
    return sessionStorage.getItem('username');
}

const clearSession = ()=>{
    if(typeof window !== "undefined"){
        sessionStorage.clear();
    }    
}

export { authenticate, isAuthenticated, getToken, getUsername, clearSession }