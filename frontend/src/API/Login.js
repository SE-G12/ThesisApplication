const url = 'http://localhost:8081/';

async function login(username,password){

    let respJson;
    let response;
    try{
        response = await fetch(url+"user/validate/", {
            method: 'POST',
            headers : { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ "username" : username, "password" :password}),
        });
        respJson = await response.json();
    }catch (e) {
        throw {status:404,detail:"Cannot communicate with server",instance:"/user/validate/"}
    }
    console.log(response)
    if(response.ok && respJson.error==null)
        return respJson.access_token; //userJwt
    else
        throw respJson;
}
export default {login}