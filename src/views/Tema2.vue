<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 2
        h1 Competencia y herramientas digitales para la comercialización
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/1.png' data-aos='fade-right')
      
      p.mb-5(data-aos='fade-right') El análisis de la competencia y el uso de herramientas digitales permiten ampliar la lectura comercial de los productos textiles. En un mercado donde diferentes empresas pueden ofrecer telas, insumos, prendas o servicios similares, resulta necesario reconocer cómo se presentan esas ofertas, qué atributos comunican, qué canales utilizan y qué prácticas fortalecen su relación con el cliente.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png')
        .col-sm-12.col-lg-7
            p.mb-4 La competencia no se analiza únicamente desde el precio. También se estudia a partir de la calidad del producto, la variedad del portafolio, la disponibilidad, la presentación comercial, la experiencia de compra, la atención, los canales digitales, la comunicación de marca y la capacidad de responder a las necesidades del mercado. Esta lectura favorece la identificación de oportunidades de mejora sin copiar propuestas externas ni perder la identidad comercial propia.
            p.mb-0 Las herramientas digitales, por su parte, permiten organizar, comunicar y proyectar la oferta textil en entornos virtuales. Páginas web, catálogos digitales, redes sociales, plataformas de comercio electrónico, formularios de contacto, bases de datos, aplicaciones de mensajería y sistemas de gestión comercial facilitan la presentación de productos, el seguimiento de clientes y la circulación de información técnica y comercial.
      
      .bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h4 Competencia y herramientas digitales en productos textiles
          p.mb-0 El estudio de la competencia permite reconocer cómo se comporta el mercado. Las herramientas digitales permiten responder a ese entorno mediante canales de comunicación, exhibición y seguimiento comercial. En productos textiles, esta relación favorece la organización de la oferta, la comparación de atributos y la construcción de presencia comercial en medios físicos y virtuales.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de análisis y función comercial

      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/4.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Competencia directa
          p.mb-0 Identifica empresas que ofrecen productos similares y permite comparar telas, insumos, prendas, precios, calidad y disponibilidad.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/5.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Competencia indirecta
          p.mb-0 Reconoce alternativas que satisfacen una necesidad similar, como sustitución entre materiales, proveedores, servicios o formatos de compra.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/6.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Prácticas comerciales
          p.mb-0 Permite revisar acciones usadas por otras empresas para atraer y atender clientes, como catálogos, muestras, promociones, asesorías, vitrinas digitales o tiempos de entrega.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/7.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Canales digitales
          p.mb-0 Facilitan la presentación y circulación de la oferta mediante página web, redes sociales, comercio electrónico, mensajería y catálogos virtuales.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/8.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Información comercial
          p.mb-0 Organiza datos útiles para la decisión de compra, como fichas técnicas, fotografías, precios, referencias, colores, cuidados y disponibilidad.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/9.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Seguimiento
          p.mb-0 Permite registrar interacciones y oportunidades comerciales mediante control de consultas, pedidos, clientes frecuentes y productos solicitados.


      p.mb-0(data-aos='fade-right') La revisión del entorno competitivo y digital aporta insumos para mejorar la comercialización. Su utilidad radica en analizar el mercado con criterio técnico, reconocer referentes pertinentes y ajustar la oferta textil de acuerdo con las condiciones reales de compra y comunicación.






      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Análisis de la competencia y mejores prácticas
      
      
      
      .row.justify-content-center.mb-5.bg-color-3(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/11.png')
        .col-sm-12.col-lg-7.p-4
          img.mb-4.wcus-1(src='@/assets/curso/temas/t2/10.svg')
          p.mb-3 Los productos de la competencia corresponden a las ofertas textiles que otras empresas presentan en el mismo mercado o en mercados relacionados. Su análisis permite comparar características, beneficios, precios, canales, presentación, calidad percibida y argumentos de comercialización. Esta revisión no busca reproducir lo que hacen otras empresas, sino identificar elementos que ayuden a comprender la dinámica comercial del sector.
          p.mb-0 En productos textiles, la competencia puede encontrarse en proveedores de telas, distribuidores de insumos, marcas de confección, almacenes especializados, plataformas digitales, empresas de dotación, comercializadores mayoristas o negocios de venta al detal. Cada actor puede competir por precio, variedad, cercanía, especialización, servicio, disponibilidad, calidad o posicionamiento.

      p.mb-5(data-aos='fade-right') La comparación de productos requiere revisar atributos verificables y aspectos de percepción comercial. Entre los primeros se encuentran composición, gramaje, acabado, ancho, solidez del color, resistencia, presentación y ficha técnica. Entre los segundos se ubican imagen de marca, experiencia de compra, confianza, recomendación, facilidad de contacto y visibilidad en canales digitales.

      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aspectos para comparar productos de la competencia
      


      .tarjeta.bg-color-1.pcus-4.pcus-3.mb-5(data-aos='fade-right')
        SlyderA.pcus-2.pcus-1(tipo="a")
          .row.justify-content-center.pcus-2.pcus-1
            .col-sm-12.col-lg-4
              h4 Características del producto
              p.mb-0 Permiten identificar similitudes y diferencias frente a telas, insumos o prendas propias, a partir de composición, acabado, textura, resistencia, color o presentación.
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/12.png')

          .row.justify-content-center.pcus-2.pcus-1
            .col-sm-12.col-lg-4
              h4 Precio
              p.mb-0 Permite establecer rangos comerciales y revisar la competitividad de la oferta frente a productos comparables.
            .col-sm-12.col-lg-8.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/13.png')

          .row.justify-content-center.pcus-2.pcus-1
            .col-sm-12.col-lg-4
              h4 Variedad
              p.mb-0 Ayuda a reconocer la amplitud del portafolio, la cantidad de referencias, colores, usos o líneas disponibles, así como posibles vacíos del mercado.
            .col-sm-12.col-lg-8.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/14.png')

          .row.justify-content-center.pcus-2.pcus-1
            .col-sm-12.col-lg-4
              h4 Calidad percibida
              p.mb-0 Permite analizar el valor que el cliente asocia con el producto o proveedor, considerando confianza, durabilidad, cumplimiento y presentación.
            .col-sm-12.col-lg-8.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/15.png')

          .row.justify-content-center.pcus-2.pcus-1
            .col-sm-12.col-lg-4
              h4 Canal de venta
              p.mb-0 Facilita comparar medios utilizados para ofrecer y entregar el producto, como punto físico, venta digital, distribuidores, ferias o atención directa.
            .col-sm-12.col-lg-8.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/16.png')

          .row.justify-content-center.pcus-2.pcus-1
            .col-sm-12.col-lg-4
              h4 Comunicación
              p.mb-0 Permite revisar la forma en que se presentan atributos y beneficios mediante catálogos, fotografías, fichas técnicas, descripciones, mensajes comerciales y otros recursos.
            .col-sm-12.col-lg-8.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/17.png')
      
      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Nota técnica
        p.mb-0 La comparación con productos de la competencia requiere criterios equivalentes. No resulta pertinente comparar una tela básica con un textil especializado si sus usos, calidades, acabados o segmentos de mercado son diferentes.
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/18.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Este análisis favorece una lectura más precisa del mercado textil. Al reconocer qué ofrecen otros actores, cómo presentan sus productos y qué características valoran los clientes, la empresa puede ajustar su portafolio, mejorar su comunicación y fortalecer sus argumentos comerciales.
          p.mb-0 Las mejores prácticas de la competencia son acciones comerciales, operativas o comunicativas que han mostrado utilidad para atraer clientes, presentar productos, mejorar la atención, facilitar la compra o fortalecer la percepción de marca. Su análisis permite identificar referentes de mejora, siempre que se interpreten de manera crítica y se adapten al contexto de cada empresa.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/19.png')
        .col-sm-12.col-lg-7
            p.mb-3 En comercialización textil, una buena práctica puede estar relacionada con catálogos bien organizados, muestras identificadas, fichas técnicas claras, tiempos de respuesta oportunos, presencia digital activa, segmentación del portafolio, fotografías de calidad, políticas de atención, seguimiento posventa o claridad en precios y disponibilidad. Estas prácticas aportan referencias para mejorar la gestión comercial, pero no garantizan resultados si se aplican sin considerar recursos, tipo de cliente, capacidad operativa o identidad de marca.
            p.mb-0 El análisis de ventajas y desventajas permite evitar decisiones improvisadas. Una práctica identificada en otra empresa puede ser conveniente para mejorar visibilidad, pero también puede exigir inversión, personal capacitado, actualización constante o cambios en procesos internos. Por ello, antes de adoptarla, resulta necesario valorar su pertinencia, viabilidad y coherencia con la oferta textil.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mejores prácticas de la competencia: ventajas y riesgos

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-green" data-aos='fade-right')
        .row.justify-content-center(titulo="Catálogo digital organizado")
          .col-sm-12.col-lg-5
            p.mb-0 Facilita la consulta de productos, referencias, colores y usos. Sin embargo, requiere actualización permanente para evitar información desactualizada.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/20.png')

        .row.justify-content-center(titulo="Fichas técnicas disponibles")
          .col-sm-12.col-lg-5
            p.mb-0 Aportan confianza y sustentan las características del producto. No obstante, exigen control documental y verificación de datos técnicos.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/21.png')

        .row.justify-content-center(titulo="Fotografías de producto de buena calidad")
          .col-sm-12.col-lg-5
            p.mb-0 Mejoran la presentación gráfica y la percepción de la oferta. También pueden generar expectativas incorrectas si no representan fielmente color, textura o escala.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/22.png')

        .row.justify-content-center(titulo="Atención por canales digitales")
          .col-sm-12.col-lg-5
            p.mb-0 Agiliza la comunicación con clientes y consultas comerciales. Puede saturarse si no existe seguimiento ordenado de mensajes y solicitudes.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/23.png')

        .row.justify-content-center(titulo="Segmentación del portafolio")
          .col-sm-12.col-lg-5
            p.mb-0 Ayuda a orientar productos según tipo de cliente o uso final. Puede volverse confusa si las categorías no están claramente definidas.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/24.png')

        .row.justify-content-center(titulo="Promociones comerciales")
          .col-sm-12.col-lg-5
            p.mb-0 Incentivan la rotación de productos o la captación de clientes. Pueden reducir el margen o afectar la percepción de valor si se usan de forma excesiva.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/25.png')

        .row.justify-content-center(titulo="Seguimiento posventa")
          .col-sm-12.col-lg-5
            p.mb-0 Fortalece la confianza, la recompra y la relación con el cliente. Requiere registro, tiempo y criterios claros de atención.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t2/26.png')

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 ● Uso crítico de las mejores prácticas

      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/27.png')
        .col-sm-12.col-lg-10
            p.mb-4 Una práctica competitiva resulta útil cuando mejora la experiencia del cliente y puede sostenerse con los recursos disponibles. En productos textiles, la adopción de referentes externos requiere conservar coherencia entre oferta, capacidad de respuesta, calidad del producto y comunicación de marca.
            p.mb-0 La revisión de mejores prácticas contribuye a identificar oportunidades sin perder diferenciación. Analizar el mercado permite aprender de sus dinámicas, pero la decisión comercial requiere adaptar cada acción al tipo de producto, al perfil del cliente y a los objetivos de la empresa.








      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Herramientas digitales y tecnologías de la información
      
      .bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/28.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La comercialización de productos textiles en entornos comerciales contemporáneos se apoya en recursos digitales que facilitan la comunicación, la exhibición, el registro y el seguimiento de la oferta. Las páginas web, herramientas virtuales y tecnologías de la información permiten presentar productos, organizar catálogos, atender consultas, gestionar pedidos, compartir fichas técnicas y fortalecer la relación con clientes.
          p.mb-0 Una página web comercial puede funcionar como vitrina institucional, catálogo de productos, medio de contacto o canal de venta. En el sector textil, su contenido puede incluir información sobre la empresa, líneas de productos, fotografías, fichas técnicas, usos recomendados, colores disponibles, condiciones de compra, medios de contacto y políticas de atención. La claridad de esta información incide en la confianza del cliente y en la facilidad para tomar decisiones.
 
      p.mb-5(data-aos='fade-right') Las herramientas virtuales complementan la gestión comercial mediante recursos como catálogos digitales, hojas de cálculo, formularios, aplicaciones de mensajería, plataformas de videollamada, gestores de clientes, redes sociales y sistemas de comercio electrónico. Estas herramientas permiten mejorar la organización interna y ampliar la visibilidad de los productos textiles en diferentes canales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas digitales y uso comercial

      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/30.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Página web
          p.mb-0 Presenta información institucional y oferta de productos. En textiles, permite exhibir telas, insumos, prendas, servicios, contactos y líneas comerciales.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/31.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Catálogo digital
          p.mb-0 Organiza referencias, imágenes, descripciones y usos. Puede mostrar composición, colores, acabados, precios o disponibilidad.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/32.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Redes sociales
          p.mb-0 Comunican novedades, tendencias, productos y contenidos de marca. Permiten publicar lanzamientos, muestras, aplicaciones, promociones o material educativo.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/33.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Formulario de contacto
          p.mb-0 Recibe solicitudes, cotizaciones o consultas. Facilita registrar intereses de clientes, cantidades requeridas y datos de contacto.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/34.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Aplicaciones de mensajería
          p.mb-0 Agilizan la atención y el seguimiento comercial. Permiten enviar fotografías, fichas técnicas, confirmaciones o información de disponibilidad.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/35.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Hojas de cálculo
          p.mb-0 Organizan inventario, precios, clientes o pedidos. Ayudan a controlar referencias, cantidades, rotación y consultas frecuentes.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t2/36.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Comercio electrónico
          p.mb-0 Facilita la compra o reserva de productos en línea. Permite ofrecer telas, insumos o productos terminados con información de pago y entrega.

      p.mb-5(data-aos='fade-right') El uso de tecnologías de la información exige organización y consistencia. La información publicada en medios digitales debe coincidir con el inventario real, las características del producto, los precios vigentes y las condiciones de atención. Una comunicación desactualizada puede afectar la confianza del cliente y generar dificultades en el proceso comercial.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/37.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h4 Información digital y producto textil
          p.mb-3 En textiles, la fotografía no reemplaza la muestra física ni la ficha técnica. El color, la textura, el brillo, la caída y el tacto pueden variar según pantalla, iluminación o formato de visualización. Por ello, la información digital requiere complementarse con descripciones claras, datos técnicos, recomendaciones de uso y, cuando sea necesario, envío o revisión de muestras.
          p.mb-0 La integración de páginas web, herramientas virtuales y tecnologías de la información fortalece la comercialización cuando responde a una planificación clara. Su aporte se evidencia en la posibilidad de presentar mejor la oferta, ampliar el alcance comercial, registrar información útil y mantener una comunicación más ordenada con el mercado.























  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
