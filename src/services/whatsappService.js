const https = require('https');



const sendMessagesWhatsapp = (data) => {
    const token = process.env.TOKEN ;
    const opts = {
        host:"graph.facebook.com",
        path:"/v19.0/329848156871424/messages",
        method:"POST",
        body:data,
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        }
    }
    const req = https.request(opts, res => {
        res.on("data", d=>{process.stdout.write(d)})
    })
    req.on("error",error => {console.error(error)})
    req.write(data);
    req.end();
}

module.exports = {
    sendMessagesWhatsapp
};