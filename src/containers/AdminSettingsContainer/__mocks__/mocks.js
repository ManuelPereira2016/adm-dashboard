export const mockServices = {
  error: 0,
  data: [
    {
      id_servicio: 1,
      desc_servicio: "Alta de cliente, validando la identidad"
    },
    { id_servicio: 2, desc_servicio: "Cambio de producto/mercado/titularidad" },
    { id_servicio: 3, desc_servicio: "Nominatividad" },
    {
      id_servicio: 4,
      desc_servicio:
        "Cambio de terminal validando identidad de las personas físicas"
    },
    { id_servicio: 5, desc_servicio: "Venta de líneas nuevas" },
    {
      id_servicio: 6,
      desc_servicio: "Venta de líneas nuevas y acceso a internet"
    },
    { id_servicio: 7, desc_servicio: "Venta de acceso a internet" },
    { id_servicio: 8, desc_servicio: "Venta de servicios de TV" },
    { id_servicio: 9, desc_servicio: "Administrador" }
  ]
};

export const mockConfig = {
  error: 0,
  servicio: {
    por_validacion: 100,
    por_revancha: 70,
    cant_preg: 5,
    t_desbloqueo: 24,
    cant_intentos: 5
  },
  pregunta: [
    {
      id_pregunta: 1,
      desc_pregunta: "Su nombre completo es",
      ponderacion: 4,
      activa: 1,
      aleatoria: 1,
      revancha: 0
    },
    {
      id_pregunta: 2,
      desc_pregunta: "Vive o vivio en alguno de estos domicilos",
      ponderacion: 5,
      activa: 0,
      aleatoria: 0,
      revancha: 0
    },
    {
      id_pregunta: 3,
      desc_pregunta: "Su fecha de nacimiento es",
      ponderacion: 1,
      activa: 1,
      aleatoria: 1,
      revancha: 0
    },
    {
      id_pregunta: 4,
      desc_pregunta: "Trabaja o trabajo en alguna de estas empresas",
      ponderacion: 5,
      activa: 1,
      aleatoria: 1,
      revancha: 0
    },
    {
      id_pregunta: 5,
      desc_pregunta: "Esta o estuvo relacionado con alguna de estas personas",
      ponderacion: 5,
      activa: 0,
      aleatoria: 0,
      revancha: 0
    },
    {
      id_pregunta: 6,
      desc_pregunta: "Esta o estuvo afiliado a alguna de estas obras sociales",
      ponderacion: 3,
      activa: 1,
      aleatoria: 1,
      revancha: 0
    },
    {
      id_pregunta: 7,
      desc_pregunta: "Tiene cuenta en alguno de estos Bancos",
      ponderacion: 3,
      activa: 0,
      aleatoria: 0,
      revancha: 0
    },
    {
      id_pregunta: 8,
      desc_pregunta: "Alguno de estos numeros de telefono le resulta familiar",
      ponderacion: 3,
      activa: 0,
      aleatoria: 0,
      revancha: 0
    },
    {
      id_pregunta: 9,
      desc_pregunta: "Cual es su relacion laboral actual",
      ponderacion: 3,
      activa: 1,
      aleatoria: 0,
      revancha: 0
    },
    {
      id_pregunta: 10,
      desc_pregunta: "Que codigo postal corresponde a su domicilio",
      ponderacion: 3,
      activa: 0,
      aleatoria: 0,
      revancha: 0
    }
  ],
  data: ""
};

export const mockConfig2 = {
  "error": 0,
  "data": "Configuración actualizada!"
};
