export const locationMockup = {
  pathname: "/user/questionary",
  search: "",
  hash: "",
  state: {
    preguntaYRespuesta: [
      {
        "0": "SUAREZ, FRANCESCO",
        "1": "SUAREZ EZEQUIEL ANTONIO",
        "2": "SUAREZ, CIRO",
        "3": "SUAREZ, JONATHAN",
        ID: "1",
        pregunta: "Su nombre completo es:"
      },
      {
        "0": "01/07/1991",
        "1": "24/04/1991",
        "2": "30/04/1991",
        "3": "Ninguna es correcta",
        ID: "3",
        pregunta: "Su fecha de nacimiento es:"
      },
      {
        "0": "Ayala Asuncion",
        "1": "Nacini Carlos Angel",
        "2": "Flexsys Srl.",
        "3": "Ninguna es correcta",
        ID: "4",
        pregunta: "Trabaja o trabajo en alguna de estas empresas"
      },
      {
        "0": "Personal De La Industria Del Tabaco",
        "1": "Personal Superior Mercedes Benz Argentina",
        "2": "Personal De Aguas Gaseosas Y Afines",
        "3": "Ninguna es correcta",
        ID: "6",
        pregunta: "Esta o estuvo afiliado a alguna de estas obras sociales"
      },
      {
        "0": "Jubilado / Dependencia",
        "1": "Dependencia / Autonomo / Jubilado",
        "2": "Jubilado",
        "3": "Ninguna es correcta",
        ID: "9",
        pregunta: "Cual es su relacion laboral actual"
      }
    ],
    persona: true,
    formData: {
      documento: "35722753",
      sexo: "M",
      servicio: 1,
      email: "manuelpereiralds@gmail.com"
    },
    idconsulta: 55
  },
  key: "51lo3s"
};

export const approvedMockup = {
   "error": 0,
   "status": 200,
   "data": "Aprobado!",
   "idconsulta": "99"
};

export const revengeMockup = {
  "error": 1,
  "status": 201,
  "data": "El puntaje no es suficiente pero voy a devolver preguntas para revancha",
  "idconsulta": "13",
  "campos": {
      "preguntaYRespuesta": [
          {
              "0": "30/04/1991",
              "1": "08/09/1991",
              "2": "16/01/1991",
              "3": "Ninguna es correcta",
              "ID": "3",
              "pregunta": "Su fecha de nacimiento es:"
          }
      ],
      "persona": true
  }
}
