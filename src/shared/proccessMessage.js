const whats = require("../shared/messagesWA") 
const services = require("../services/whatsappService")

const Process = (textUser, number, name) =>{
    textUser = textUser.toLowerCase()
    const saludos = ['hola','hol','ola','olis','ila','iwis','tarde','menu','hello','hey'];
    const sucursales = ['sanpablo','correo1','correo2','ramoncorona','brasil','corregidora','bolivia','apartado1','apartado2','puebla']
    const despedidas = ['adios','gracias'];
    const cotPre =  ['coti','prec','inf'];
    const models = [];
    if(saludos.some(saludo => textUser.includes(saludo))){
        let model = whats.MessagesInit(number,name);
        // console.log(model);
        models.push(model);
    }else if(textUser.includes('catalogo')){
        let model = whats.MessagesCatalogo(number,name);
        models.push(model);
    }else if(cotPre.some(cot => textUser.includes(cot))){
        let mssg = "No tenemos lista de precios pero comparteme los artículos que quieras adquirir con la cantidad de piezas a el contacto de acontinuacion  y te hago tu cotización 😄"
        let model
        model = whats.MessageInformativo(number,mssg);
        models.push(model);
        model = whats.MessagesEcommerce(number,name);
        models.push(model);
    }else if(textUser.includes('factura')){
        let mssg = "Si necesitas factura se cobra el 16% de IVA extra vale, necesitas tus datos fiscales y ticket; con el contacto a continuacion te ayudan con todo tu proceso vale 😉"
       
        let model
        model = whats.MessageInformativo(number,mssg);
        models.push(model);
        model = whats.MessagesFactura(number,name);
        models.push(model);
    }else if(textUser.includes('envi')){
        let model = whats.MessagesEnvios(number,name);
        models.push(model);
    }else if(textUser.includes('garant')){
        let model = whats.MessagesGarantias(number,name);
        models.push(model);
    }else if(textUser.includes('sucu')){
        let model = whats.MessagesSucursales(number,name);
        models.push(model);
    }else if(sucursales.some(sucursal => textUser.includes(sucursal))){
        let mensaje = `${name} a continuacion te envio la ubicacion y el contacto de la sucursal`
        let mmsg = whats.MessageInformativo(number, mensaje)
        services.sendMessagesWhatsapp(mmsg)
        const storelist = stores(textUser);
        const delay = 500; // Tiempo de retraso en milisegundos (1 segundo)
        const processInterleaved = (sucursales, contacts) => {
            let indexSucursal = 0;
            let indexContact = 0;

            const processNext = () => {
                if (indexSucursal < sucursales.length || indexContact < contacts.length) {
                    if (indexSucursal < sucursales.length) {
                        let model = whats.MessagesUbicacion(number, sucursales[indexSucursal]);
                        services.sendMessagesWhatsapp(model)
                        indexSucursal++;
                    }
    
                    if (indexContact < contacts.length) {
                        let model = whats.MessagesContact(number, contacts[indexContact]);
                        services.sendMessagesWhatsapp(model)
                        indexContact++;
                    }
    
                    setTimeout(processNext, delay); 
                } else {
                    console.log(models);
                }
            };
    
            processNext();
        };

        processInterleaved(storelist.sucursal, storelist.contact);

    }else if(despedidas.some(despedida => textUser.includes(despedida))){
        let model = whats.MessagesDespedida(number,name);
        models.push(model);
    }else{
        console.error('no me llego el mensaje')
        let mssg = `Lo siento  ${name} no logre entender tu mensaje, prueba algunas de nuestras opciones :)`
        let mmsg = whats.MessageInformativo(number, mssg)
        services.sendMessagesWhatsapp(mmsg)
        let model = whats.MessagesInit(number,name);
        // console.log(model);
        services.sendMessagesWhatsapp(model)
    }

    models.forEach( e => {
        services.sendMessagesWhatsapp(e)
    })
}

const stores = (texto) => {
    let sucursal = [];
    let contact = []
    if(texto == 'sanpablo'){
        sucursal = [
            {latitude:'19.426354211368377',longitude:'-99.1302953542278',name:'San Pablo 1 (🌂 paraguas)',address:'San Pablo #10. Local G. Col. Centro CDMX'},
            {latitude:'19.426461201693886',longitude:'-99.13042202833206',name:'San Pablo 2 (Mochila 🎒)',address:'San Pablo #10 Loc. A y B. Col. Centro, Cuauhtémoc. CDMX'},
            {latitude:'19.426461201693886',longitude:'-99.13042202833206',name:'San Pablo C (📚 Papelería y hogar 🏠)',address:'San Pablo #10. Loc. C. Col. Centro Cuauhtémoc. CDMX'},
            {latitude:'19.42637612270273',longitude:'-99.13017707176053',name:'Sotano (🧸 juguetes)',address:'San Pablo #10 Loc. Sotano. Col. Centro, Cuauhtémoc CDMX'},
        ]

        contact = [
        {email:'sanpablouno@grupovizcarra.mx',formatted_name:'GV SAN PABLO 1 (paraguas)',first_name:'Luisa',last_name:'GV',middle_name:'Tolentino', phone:'+52 1 55 3450 7385', wa_id:'5215534507385'},
        {email:'sanpablodos@grupovizcarra.mx',formatted_name:'GV SAN PABLO 2 (mochila)',first_name:'Guillermo',last_name:'GV',middle_name:'Rodriguez', phone:'+52 1 55 3714 8456', wa_id:'5215537148456'},
        {email:'sanpabloc@grupovizcarra.mx',formatted_name:'GV SAN PABLO C (Papelería y hogar)',first_name:'Isabel',last_name:'GV',middle_name:'Musino', phone:'+52 1 55 3553 8498', wa_id:'5215535538498'},
        {email:'sotano@grupovizcarra.mx',formatted_name:'GV SOTANO (juguetes)',first_name:'Vianey',last_name:'GV',middle_name:'Coyote', phone:'+52 1 55 4391 8004', wa_id:'5215543918004'},

        ]


    }else if(texto == 'correo1'){
        sucursal = [
            {latitude:'19.42871645033228',longitude:'-99.13053300314317',name:'Correo 1 (Mochila 🎒)',address:'Correo Mayor #84 Col. Centro Cuauhtémoc. CDMX'},
        ]
        contact = [
            {email:'correouno@grupovizcarra.mx',formatted_name:'GV Correo 1 (Mochila)',first_name:'Luis',last_name:'GV',middle_name:'Reyes', phone:'+52 1 55 3994 5073', wa_id:'5215539945073'},
        ]
    }else if(texto == 'correo2'){
        sucursal = [
            {latitude:'19.426612278586184',longitude:'-99.13076054945078',name:'Correo 2 (📚papelería)',address:'Correo Mayor #122 Col. Centro, Cuauhtémoc. CDMX'},
        ]
        contact = [
            {email:'correodos@grupovizcarra.mx',formatted_name:'GV Correo 2 (papelería)',first_name:'Norma',last_name:'GV',middle_name:'Rodriguez', phone:'+52 1 55 5902 4985', wa_id:'5215559024985'},
        ]
    }else if(texto == 'ramoncorona'){
        sucursal = [
            {latitude:'19.427595521810332',longitude:'-99.12671976768955',name:'Ramon Corona (Mochila, Papelería y Hogar 🎒)',address:'Ramón Corona #15. Loc. B y C. Col. Centro, Cuauhtémoc. CDMX'},
        ]
        contact = [
            {email:'ramoncuno@grupovizcarra.mx',formatted_name:'GV Ramon Corona (Mochila, Papelería y Hogar)',first_name:'Joaquin',last_name:'GV',middle_name:'Hernandez', phone:'+52 1 55 5469 9569', wa_id:'5215554699569'},
        ]
    }else if(texto == 'brasil'){
        sucursal = [
            {latitude:'19.44019177601479',longitude:'-99.13327259053462',name:'Brasil (🧸juguetes)',address:'Rep. Brasil #60 #62 Col. Centro, Cuauhtémoc. CDMX'},
        ]
        contact = [
            {email:'brasil@grupovizcarra.mx',formatted_name:'GV Brasil (juguetes)',first_name:'Rigoberto',last_name:'GV',middle_name:'Quinto', phone:'+52 1 55 6228 7490', wa_id:'5215562287490'},
        ]
    }else if(texto == 'corregidora'){
        sucursal = [
            {latitude:'19.43145310508761',longitude:'-99.12932206769592',name:'Corregidora (Mochila 🎒)',address:'Corregidora #26 Local 1 y 2 col. Centro. Cuauhtémoc. CDMX'},
        ]
        contact = [
            {email:'corregidora@grupovizcarra.mx',formatted_name:'GV Corregidora (Mochila)',first_name:'Michell',last_name:'GV',middle_name:'Rodriguez', phone:'+52 1 55 4037 6653', wa_id:'5215540376653'},
        ]
    }else if(texto == 'bolivia'){
        sucursal = [
            {latitude:'19.4391411018106',longitude:'-99.13223793266253',name:'Bolivia (Mochila 🎒)',address:'Rep. Bolivia #15. Col. Centro, Cuauhtémoc CDMX'},
        ]
        contact = [
            {email:'bolivia@grupovizcarra.mx',formatted_name:'GV Bolivia (Mochila)',first_name:'Yessenia',last_name:'GV',middle_name:'Rodriguez', phone:'+52 1 55 4013 9765', wa_id:'5215540139765'},
        ]
    }else if(texto == 'apartado1'){
        sucursal = [
            {latitude:'19.44034359635863',longitude:'-99.12951863884632',name:'Apartado 1 (Mochila 🎒)',address:'Apartado #34 Loc. 2 y 3 Col. Centro, Cuauhtémoc CDMX'},
        ]
        contact = [
            {email:'apartadouno@grupovizcarra.mx',formatted_name:'GV Apartado 1 (Mochila)',first_name:'Maurilio',last_name:'GV',middle_name:'Carmona', phone:'+52 1 55 3911 0690', wa_id:'5215539110690'},
        ]
    }else if(texto == 'apartado2'){
        sucursal = [
            {latitude:'19.440308609282585',longitude:'-99.12963489281557',name:'Apartado 2 (🧸papelería y juguete)',address:'Apartado #32 Col. Centro, Cuauhtémoc CDMX'},
        ]
        contact = [
            {email:'apartadodos@grupovizcarra.mx',formatted_name:'GV Apartado 2 (papelería y juguete)',first_name:'Juan',last_name:'GV',middle_name:'Gonzalez', phone:'+52 1 55 6155 7873', wa_id:'5215561557873'},
        ]
    }else if(texto == 'puebla'){
        sucursal = [
            {latitude:'19.04991951861899',longitude:' -98.19891743466094',name:'Puebla (Mochila 🎒)',address:'Av. 10 Pte. 316, Centro histórico de Puebla, 72000 Heroica Puebla de Zaragoza, Pue'},
        ]
        contact = [
            {email:'puebla@grupovizcarra.mx',formatted_name:'GV Puebla (Mochila)',first_name:'Jaqueline',last_name:'Mendoza',middle_name:'GV', phone:'+52 1 222 490 7069', wa_id:'5212224907069'},
        ]
    }
    const resp = {
        "sucursal":sucursal,
        "contact":contact,
    }
    return resp
}

module.exports = {
    Process
}