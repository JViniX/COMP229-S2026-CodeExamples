import { jwtDecode } from 'jwt-decode'

const authenticate = (payload, cb)=>{
    if(typeof window !== "undefined"){
        sessionStorage.setItem("token", payload.accessToken);
        sessionStorage.setItem("userId", payload.uid);
        sessionStorage.setItem("username", payload.displayName);
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