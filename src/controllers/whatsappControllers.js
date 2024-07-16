const Process = require('../shared/proccessMessage')
const VerifiToken = (req,res) => {
    try{
        const mode = req.query['hub.mode'];
        const accessToken = "#130822%Ait**";
        const token = req.query["hub.verify_token"];
        const challenge = req.query['hub.challenge'];

        if(mode === "subscribe" && token === accessToken){
            res.status(200).send(challenge)
            console.log('Escuchamos brou')
        } else {
            res.sendStatus(403);
            console.log('saquese')
          }

    }catch(e){
        res.status(400).send()
    }
}

const receiptMessage = (req, res) => {
    try{
        // console.log(JSON.stringify(req.body));
        const name = req.body['entry'][0]['changes'][0]['value']['contacts'][0]['profile']['name'];
        const message = (req.body['entry'][0]['changes'][0]['value']['messages'][0]);
        console.log(message);

        if(typeof message != 'undefinded'){
            let number = message['from']
            let text = GetTexUser(message);
            if(text != ""){
                Process.Process(text,number,name)
            }
        }
        
        res.send('EVENT_RECEIVED');

    }catch(e){
        res.send('EVENT_RECEIVED');
    }
} 

const GetTexUser = (message) => {
    let text = ""
    let typeMessage = message['type'];
    if(typeMessage == "text"){
        text = (message['text'])['body'];
    }else if(typeMessage == "interactive"){
        let interactive = message['interactive']
        let typeInteractive = interactive['type']
        if(typeInteractive == 'button_reply'){
            text = (interactive['button_reply'])['id']
            console.log(text)
        }else if(typeInteractive == 'list_reply'){
            text = (interactive['list_reply'])['id']
            console.log(text)
        }else{
            console.log('sin Mensaje')
        }
    }else{
        console.log('sin Mensaje')
    }
    return text;
}

module.exports = {
    VerifiToken,
    receiptMessage 
}