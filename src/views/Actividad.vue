<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion: '<b>Objetivo:</b> comprobar la comprensión de conceptos comerciales relacionados con mercadeo, marketing, ventas, comunicación, portafolio, clientes y servicio en productos textiles.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [{"id": 1, "texto": "¿Cómo contribuyen el mercadeo y el marketing a la comercialización de productos textiles?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Permiten analizar el mercado y comunicar el valor de la oferta.", "esCorrecta": true}, {"id": "b", "texto": "Se concentran únicamente en establecer el precio final.", "esCorrecta": false}, {"id": "c", "texto": "Se utilizan principalmente para controlar el inventario disponible.", "esCorrecta": false}, {"id": "d", "texto": "Permiten definir las características técnicas de fabricación.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 2, "texto": "¿Cuándo una necesidad del cliente se convierte en demanda comercial?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Cuando el producto se promociona en diferentes canales.", "esCorrecta": false}, {"id": "b", "texto": "Cuando el cliente manifiesta una preferencia, aunque no pueda comprar.", "esCorrecta": false}, {"id": "c", "texto": "Cuando el vendedor entrega una muestra física.", "esCorrecta": false}, {"id": "d", "texto": "Cuando existe intención y capacidad de compra.", "esCorrecta": true}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 3, "texto": "¿Qué criterio permite relacionar las características de un producto textil con la necesidad del cliente?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El uso final previsto para el material.", "esCorrecta": true}, {"id": "b", "texto": "La decoración general del punto de venta.", "esCorrecta": false}, {"id": "c", "texto": "La cantidad de fotografías sin ficha técnica.", "esCorrecta": false}, {"id": "d", "texto": "El nombre informal usado por vendedores.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 4, "texto": "¿Cuál es la diferencia entre una estrategia de comercialización y un método de venta?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La estrategia organiza la oferta y los canales; el método orienta la interacción de venta con el cliente.", "esCorrecta": true}, {"id": "b", "texto": "La estrategia define únicamente precios; el método organiza la identidad de marca.", "esCorrecta": false}, {"id": "c", "texto": "La estrategia se aplica después de vender; el método se aplica antes de planificar.", "esCorrecta": false}, {"id": "d", "texto": "La estrategia atiende reclamos; el método determina la fabricación del producto.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 5, "texto": "¿Cuál es la función principal del portafolio de productos textiles?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Registrar exclusivamente las existencias disponibles.", "esCorrecta": false}, {"id": "b", "texto": "Organizar la oferta para facilitar decisiones comerciales.", "esCorrecta": true}, {"id": "c", "texto": "Definir únicamente la identidad gráfica de la empresa.", "esCorrecta": false}, {"id": "d", "texto": "Sustituir las fichas técnicas de los productos.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 6, "texto": "¿Qué comunica la promesa de valor de una marca textil?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La ubicación exacta de todos los productos.", "esCorrecta": false}, {"id": "b", "texto": "El inventario disponible en cada temporada.", "esCorrecta": false}, {"id": "c", "texto": "La cantidad de vendedores del establecimiento.", "esCorrecta": false}, {"id": "d", "texto": "El beneficio principal ofrecido al mercado.", "esCorrecta": true}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 7, "texto": "¿Para qué sirve analizar los productos de la competencia?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Para comparar atributos, precios y presentación comercial.", "esCorrecta": true}, {"id": "b", "texto": "Para copiar portafolios sin adaptar la oferta.", "esCorrecta": false}, {"id": "c", "texto": "Para evitar revisar necesidades de clientes actuales.", "esCorrecta": false}, {"id": "d", "texto": "Para suspender la comunicación de la marca propia.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 8, "texto": "¿Qué riesgo puede generar un catálogo digital desactualizado?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Aumentar la precisión de todos los pedidos.", "esCorrecta": false}, {"id": "b", "texto": "Garantizar disponibilidad permanente de referencias.", "esCorrecta": false}, {"id": "c", "texto": "Ofrecer información incorrecta sobre referencias, precio o disponibilidad.", "esCorrecta": true}, {"id": "d", "texto": "Mejorar automáticamente la experiencia del cliente.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 9, "texto": "¿Qué herramienta digital permite presentar referencias, imágenes y descripciones textiles?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Un registro interno sin acceso comercial.", "esCorrecta": false}, {"id": "b", "texto": "Un catálogo digital organizado por productos.", "esCorrecta": true}, {"id": "c", "texto": "Un mensaje aislado sin datos técnicos.", "esCorrecta": false}, {"id": "d", "texto": "Un comprobante contable de compras anteriores.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 10, "texto": "¿Qué caracteriza la venta de productos textiles como proceso comercial?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Mostrar únicamente el precio sin explicación.", "esCorrecta": false}, {"id": "b", "texto": "Entregar muestras sin registrar información.", "esCorrecta": false}, {"id": "c", "texto": "Cerrar pedidos sin atender necesidades previas.", "esCorrecta": false}, {"id": "d", "texto": "Identificar, presentar, argumentar, negociar y hacer seguimiento.", "esCorrecta": true}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 11, "texto": "¿Qué método de venta se basa en diagnosticar la necesidad del cliente?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Venta consultiva con orientación técnica pertinente.", "esCorrecta": true}, {"id": "b", "texto": "Venta mayorista sin conocimiento del portafolio.", "esCorrecta": false}, {"id": "c", "texto": "Venta por catálogo sin preguntas orientadoras previas.", "esCorrecta": false}, {"id": "d", "texto": "Venta institucional sin atención ni seguimiento.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 12, "texto": "¿Cuál es la finalidad de las políticas de ventas en una empresa textil?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Modificar referencias sin informar al cliente.", "esCorrecta": false}, {"id": "b", "texto": "Evitar toda forma de control comercial.", "esCorrecta": false}, {"id": "c", "texto": "Ordenar precios, pagos, entregas y devoluciones.", "esCorrecta": true}, {"id": "d", "texto": "Sustituir objetivos comerciales por atención informal.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 13, "texto": "¿Qué recurso respalda técnicamente la presentación comercial de una tela?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El catálogo de tendencias sin información del producto.", "esCorrecta": false}, {"id": "b", "texto": "La ficha técnica con datos verificables del producto.", "esCorrecta": true}, {"id": "c", "texto": "La fotografía promocional de la tela.", "esCorrecta": false}, {"id": "d", "texto": "La lista de precios del establecimiento.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 14, "texto": "¿Cuál es el primer momento del protocolo de presentación comercial?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Cerrar la venta sin revisar condiciones.", "esCorrecta": false}, {"id": "b", "texto": "Aplicar descuentos sin analizar productos.", "esCorrecta": false}, {"id": "c", "texto": "Enviar publicidad sin reconocer al cliente.", "esCorrecta": false}, {"id": "d", "texto": "Preparar portafolio, muestras, precios y disponibilidad.", "esCorrecta": true}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 15, "texto": "¿Qué busca la argumentación por beneficio en la venta textil?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Relacionar atributos técnicos con necesidades del cliente.", "esCorrecta": true}, {"id": "b", "texto": "Usar términos complejos sin explicación comercial.", "esCorrecta": false}, {"id": "c", "texto": "Presentar productos sin describir su aplicación.", "esCorrecta": false}, {"id": "d", "texto": "Reemplazar muestras físicas por opiniones generales.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 16, "texto": "¿Qué características puede valorar directamente el cliente mediante una muestra física de tela?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Solamente los datos contables del proveedor.", "esCorrecta": false}, {"id": "b", "texto": "Únicamente la política interna de pagos.", "esCorrecta": false}, {"id": "c", "texto": "Tacto, textura, color, caída y apariencia.", "esCorrecta": true}, {"id": "d", "texto": "Exclusivamente la ubicación del almacén comercial.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 17, "texto": "¿Qué caracteriza a un cliente institucional en la compra textil?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Compra cantidades pequeñas y prioriza la orientación rápida.", "esCorrecta": false}, {"id": "b", "texto": "Requiere cotización formal, ficha técnica y cumplimiento documental.", "esCorrecta": true}, {"id": "c", "texto": "Compra de manera esporádica para uso personal.", "esCorrecta": false}, {"id": "d", "texto": "Prioriza exclusivamente variedad y exhibición.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 18, "texto": "¿Qué habilidad comunicativa ayuda a reconocer la necesidad real del cliente?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Repetición automática de argumentos comerciales generales.", "esCorrecta": false}, {"id": "b", "texto": "Entrega de precios sin escuchar la solicitud.", "esCorrecta": false}, {"id": "c", "texto": "Uso de tecnicismos sin validar comprensión.", "esCorrecta": false}, {"id": "d", "texto": "Escucha activa durante la interacción comercial.", "esCorrecta": true}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 19, "texto": "¿Qué función cumplen las líneas de servicio o canales de atención al cliente?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Atender consultas, pedidos, reclamos y seguimiento.", "esCorrecta": true}, {"id": "b", "texto": "Eliminar registros sobre acuerdos comerciales realizados.", "esCorrecta": false}, {"id": "c", "texto": "Impedir la comunicación entre empresa y comprador.", "esCorrecta": false}, {"id": "d", "texto": "Reemplazar la calidad del producto ofrecido.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}, {"id": 20, "texto": "¿Qué integra una comercialización textil orientada al cliente?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Producto, producción, inventario, almacenamiento y despacho.", "esCorrecta": false}, {"id": "b", "texto": "Marca, publicidad, diseño, confección y exhibición.", "esCorrecta": false}, {"id": "c", "texto": "Mercado, producto, comunicación, venta y servicio.", "esCorrecta": true}, {"id": "d", "texto": "Precio, promoción, fabricación, transporte y contabilidad.", "esCorrecta": false}], "mensaje_correcto": "Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.", "mensaje_incorrecto": "Revise nuevamente el contenido del componente formativo."}], 
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion: '<b>Objetivo:</b> comprobar la comprensión de conceptos comerciales relacionados con mercadeo, marketing, ventas, comunicación, portafolio, clientes y servicio en productos textiles.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
