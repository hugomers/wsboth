const  MessagesInit = (Number, name) => {
    
    const data = JSON.stringify({
        messaging_product: "whatsapp",
        preview_url: false,
        recipient_type: "individual",
        to: Number,
        type: "interactive",
        interactive:{
            type:"list",
            body: {text:`Hola ${name} Gracias por comunicarte con Grupo Vizcarra Ecommerce. ¿Cómo podemos ayudarte?`},
            footer:{text:"Selecciona una de las opciones 😎"},
            action: {
                button:"Ver Opciones",
                sections: [
                    {
                        title:"Ecommerce",
                        rows: [
                            {
                                id:"catalogo",
                                title:"📇 Catalogo",
                            },
                            {
                                id:"info",
                                title:" 📖 Cotizaciones",
                            },
                            {
                                id:"Envios",
                                title:"✈️ Envios",
                            },
                            {
                                id:"Facturas",
                                title:"🎟️ Facturacion",
                            },
                            {
                                id:"Garantias",
                                title:"📃 Garantias",
                            },
                            {
                                id:"Sucursales",
                                title:"📍 Ubicaciones",
                            },  
                        ]
                    }
                ]
            }

        }
    })
    return data;

}

// const  MessagesCatalogo = (Number, name) => {
    
//     const data = JSON.stringify({
//         "messaging_product": "whatsapp",
//         "recipient_type": "individual",
//         "to": Number,
//         "type": "interactive",
//         "interactive": {
//             "type": "product_list",
//             "header": {
//                 "type": "text",
//                 "text": "Mochila"
//             },
//             "body": {
//                 "text": "Nuestro Catalogo :) "
//             },
//             "footer": {
//                 "text": "tan facil como seleccionarlo"
//             },
//             "action": {
//                 "catalog_id": "258030373997275",
//                 "sections": [
//                     {
//                         "title": "Mochila",
//                         "product_items": [
//                             {
//                                 "product_retailer_id": "29557"
//                             }
//                         ]
//                     },
//                 ]
//             }
//         }
//     })
//     return data;

// }

const  MessagesCatalogo = (Number, name) => {
    
    const data = JSON.stringify({
        messaging_product: "whatsapp",

        recipient_type: "individual",
        to: Number,
        type: "text",
        text:{ 
            preview_url: true,
            body: `Echale un vistazo al catálogo 2024 de Grupo Vizcarra ✨y enamórate de nuestros artículos de temporada 🤩 https://lc.cx/dPNLQT`
        }
    })
    return data;

}

const  MessagesEcommerce = (Number, name) => {
    
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": Number,
        "type": "contacts",
        "contacts": [
            {
                "emails": [
                    {
                        "email": "ecommerce@grupovizcarra.mx",
                        "type": "WORK"
                    }
                ],
                "name": {
                    "formatted_name": "Ecommerce Grupo Vizcarra",
                    "first_name": "ecommerce",
                    "last_name": "grupo",
                    "middle_name": "vizcarra",
                    "suffix": "",
                    "prefix": ""
                },
                "phones": [
                    {
                        "phone": "+52 1 55 3905 4416",
                        "wa_id": "5215539054416",
                        "type": "WORK"
                    }
                ]
            }
        ]
    })
    return data;
}

const  MessagesFactura = (Number, name) => {
    
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": Number,
        "type": "contacts",
        "contacts": [
            {
                "emails": [
                    {
                        "email": "facturacion@grupovizcarra.mx",
                        "type": "WORK"
                    }
                ],
                "name": {
                    "formatted_name": "Facturacion Grupo Vizcarra",
                    "first_name": "Facturacion",
                    "last_name": "Grupo",
                    "middle_name": "Vizcarra",
                    "suffix": "",
                    "prefix": ""
                },
                "phones": [
                    {
                        "phone": "+52 1 55 3934 5822",
                        "wa_id": "5215539345822",
                        "type": "WORK"
                    }
                ]
            }
        ]
    })
    return data;
}

const  MessagesEnvios = (Number, name) => {
    
    const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": Number,
            "context": {
                "message_id": "Info sobre envios"
            },
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Hacemos envíos a toda la República 🇲🇽 desde 1 pieza, con costo extra. El costo varía dependiendo de lo que pese tu paquete, el tamaño y el destino 🚛 Si ya trabajas con un transporte nosotros nos acoplamos 💁🏻 En el caso de CDMX te puedo cotizar para que se vaya en un Didi y te llega el mismo día 🤩 o recoger en sucursal. 👏🏻 Nuestros días de envío son lunes, miércoles y viernes 😄"
            }
        })
    return data;
}

const  MessagesGarantias = (Number, name) => {
    
    const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": Number,
            "context": {
                "message_id": "Info sobre garantias"
            },
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Tanto en línea y en sucursales tienes 8 días naturales para realizar tu cambio, solo aplica garantía por defectos de fabrica, presenta tu ticket/nota y tu producto con etiqueta en mostrador, para hacer valido tu cambio, en caso de hacer la compra en línea mándanos un video mostrando la falla de tu producto 🤓"
            }
        })
    return data;
}

const  MessagesSucursales = (Number, name) => {
    
    const data = JSON.stringify({ messaging_product: "whatsapp",
        preview_url: false,
        recipient_type: "individual",
        to: Number,
        type: "interactive",
        interactive:{
            type:"list",
            // header:{type:"text",text:"Sucursales"},
            body: {text:`Contamos con sucursales por temporada con un horario de lunes a sábado de 9:00 am a 6:30 pm ¡TE ESPERAMOS! 🥳`},
            footer:{text:"selecciona alguna para saber la ubicacion 📍 😎"},
            action: {
                button:"Sucursales",
                sections: [
                    {
                        title:"Sucursales",
                        rows: [
                            // {
                            //     "id": "sp1",
                            //     "title": "SAN PABLO 1 ",
                            //     "description":"(CDMX) (🌂 paraguas)"
                            //    },
                               {
                                "id": "sanpablo",
                                "title": "SAN PABLO ",
                                "description":"(CDMX) (Mochila 🎒, 🧸juguetes,🌂 paraguas, 📚 Papelería y hogar 🏠)"

                               },
                            //    {
                            //     "id": "spc",
                            //     "title": "SAN PABLO C",
                            //     "description":"(CDMX) (📚 Papelería y hogar 🏠)"
                            //    },
                            //    {
                            //     "id": "sot",
                            //     "title": "SOTANO",
                            //     "description":" (CDMX) (🧸juguetes)"
                            //    },
                               {
                                "id": "correo1",
                                "title": "CORREO 1",
                                "description":"(CDMX) (Mochila 🎒)"
                               },
                               {
                                "id": "correo2",
                                "title": "CORREO 2",
                                "description": "(CDMX) (📚papelería)"
                               },
                               {
                                "id": "ramoncorona",
                                "title": "RAMON CORONA",
                                "description":"(CDMX)(Mochila, Papelería y Hogar 🎒)"
                               },
                               {
                                "id": "brasil",
                                "title": "BRASIL",
                                "description":" (CDMX) (🧸juguetes)"
                               },
                               {
                                "id": "corregidora",
                                "title": "CORREGIDORA",
                                "description": " (CDMX) (Mochila 🎒)"
                               },
                               {
                                "id": "bolivia",
                                "title": "BOLIVIA",
                                "description":" (CDMX) (Mochila 🎒)"
                               },
                               {
                                "id": "apartado1",
                                "title": "APARTADO 1",
                                "description":"(CDMX) (Mochila 🎒)"

                               },
                               {
                                "id": "apartado2",
                                "title": "APARTADO 2",
                                "description":"(CDMX) (🧸papelería y juguete)"
                               },
                               {
                                "id": "puebla",
                                "title": "PUEBLA",
                                "description":"(PUEBLA) (Mochila 🎒)"
                               } 
                        ]
                    },
                ]
            }
        }
    })
    return data;
}


const  MessagesUbicacion = (Number, store) => {
    
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": Number,
        "type": "location",
        "location": {
            "latitude": store.latitude,
            "longitude": store.longitude,
            "name": store.name,
            "address": store.address
        }
    })
    return data;
}

const MessagesContact = (Number, Store) => {
    const data = JSON.stringify({
    "messaging_product": "whatsapp",
            "to": Number,
            "type": "contacts",
            "contacts": [
                {
                    "emails": [
                        {
                            "email": Store.email,
                            "type": "WORK"
                        }
                    ],
                    "name": {
                        "formatted_name": Store.formatted_name,
                        "first_name": Store.first_name,
                        "last_name": Store.last_name,
                        "middle_name": Store.middle_name,
                        "suffix": "",
                        "prefix": ""
                    },
                    "phones": [
                        {
                            "phone": Store.phone,
                            "wa_id": Store.wa_id,
                            "type": "WORK"
                        }
                    ]
                }
        ]
    })
    return data;
}

const MessageInformativo = (Number, Mssg) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": Number,
        "context": {
            "message_id": "Info"
        },
        "type": "text",
        "text": {
            "preview_url": false,
            "body":Mssg
        }
    })
return data;
}

const  MessagesDespedida = (Number, name) => {
    
    const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": Number,
            "context": {
                "message_id": "Despedida"
            },
            "type": "text",
            "text": {
                "preview_url": false,
                "body": `Fue un placer atenderte ${name} hasta pronto 😋`
            }
        })
    return data;
}


module.exports = {
    MessagesInit,
    MessagesCatalogo,
    MessagesEcommerce,
    MessagesFactura,
    MessagesEnvios,
    MessagesGarantias,
    MessagesSucursales,
    MessagesUbicacion,
    MessagesContact,
    MessagesDespedida,
    MessageInformativo
}