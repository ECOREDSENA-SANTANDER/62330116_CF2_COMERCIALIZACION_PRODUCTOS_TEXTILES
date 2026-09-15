<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 1
        h1 Fundamentos comerciales para productos textiles
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/2.svg')
            .col-sm-12.col-lg-10 La comercialización de productos textiles requiere comprender la relación entre mercado, cliente, producto, comunicación y valor. En este marco, el mercadeo y el #[i marketing] aportan herramientas para analizar necesidades, organizar la oferta, reconocer oportunidades comerciales y proyectar productos textiles hacia segmentos específicos.
          p.mb-0 El mercadeo permite estudiar las condiciones del mercado: quién compra, qué necesita, qué productos existen, cómo se comporta la competencia, cuáles son los canales disponibles y qué factores influyen en la decisión de compra. El #[i marketing], por su parte, articula acciones orientadas a posicionar productos, comunicar beneficios, fortalecer la marca y generar intercambios comerciales sostenibles.

      p.mb-5(data-aos='fade-right') En el sector textil, estos fundamentos tienen una aplicación directa porque las telas, hilos, insumos, prendas y servicios asociados no se comercializan únicamente por precio. También intervienen aspectos como composición, calidad, tendencia, acabados, disponibilidad, presentación, portafolio, canal de venta, servicio y capacidad para resolver una necesidad del cliente.

      .bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h4 Función del mercadeo y el #[i marketing] en textiles
          p.mb-3 El mercadeo permite reconocer el comportamiento del mercado; el #[i marketing] organiza la forma en que una empresa presenta, comunica y posiciona su oferta. En productos textiles, ambos enfoques facilitan la selección de productos, la construcción de argumentos comerciales y la definición de estrategias acordes con las necesidades del cliente.
          p.mb-0 El dominio de estos fundamentos permite interpretar la comercialización textil como un proceso planificado. La oferta adquiere mayor coherencia cuando se conocen las necesidades del mercado, las características del producto y los argumentos que sustentan su valor frente al cliente.

      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Mercadeo, #[i marketing] y comercialización textil
      
      
      p.mb-5(data-aos='fade-right') Para ordenar una propuesta comercial resulta necesario reconocer los conceptos que estructuran el mercadeo y el #[i marketing]. Estos conceptos aportan una lectura particular sobre la manera en que una empresa identifica oportunidades y presenta sus productos textiles de acuerdo con el mercado, el cliente y la necesidad que busca atender.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Conceptos básicos de mercadeo y #[i marketing]
      
      TabsB.color-acento-botones.tab-hover.mb-4(data-aos='fade-right')
        .p-5.bg-color-1(titulo="Mercado y cliente" :icono="require_src('@/assets/curso/temas/t1/6.svg')")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/7.png')
            .col-sm-12.col-lg-7
              p.mb-0 El mercado corresponde al conjunto de personas, empresas o instituciones que pueden requerir un producto o servicio. En el contexto textil, puede estar conformado por talleres de confección, marcas de moda, almacenes, distribuidores, empresas de dotación, compradores institucionales, negocios de decoración o consumidores finales. El cliente es la persona, empresa o institución que compra o puede comprar un producto.

        .p-5.bg-color-1(titulo="Necesidad, deseo y demanda" :icono="require_src('@/assets/curso/temas/t1/8.svg')")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/9.png')
            .col-sm-12.col-lg-7
              p.mb-0 La necesidad hace referencia a un requerimiento que busca ser satisfecho, como vestuario, protección, comodidad, decoración, identidad corporativa, durabilidad, tendencia o funcionalidad. El deseo aparece cuando esa necesidad se orienta hacia una preferencia específica, como una tela suave, un acabado particular, un color de temporada o una fibra determinada. La demanda se configura cuando existe intención y capacidad de compra frente al producto.

        .p-5.bg-color-1(titulo="Producto y valor" :icono="require_src('@/assets/curso/temas/t1/10.svg')")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/11.png')
            .col-sm-12.col-lg-7
              p.mb-0 El producto es el bien o servicio ofrecido al mercado. En textiles, puede corresponder a telas, hilos, insumos, prendas, muestras, catálogos o asesoría textil. El valor se relaciona con el beneficio percibido en relación con el costo, el uso y el desempeño del producto.

        .p-5.bg-color-1(titulo="Segmentación" :icono="require_src('@/assets/curso/temas/t1/12.svg')")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/13.png')
            .col-sm-12.col-lg-7
              p.mb-0 La segmentación consiste en agrupar clientes con características o necesidades similares. En productos textiles, permite diferenciar clientes de moda, dotación, hogar, deporte, decoración o venta mayorista.

        .p-5.bg-color-1(titulo="Posicionamiento" :icono="require_src('@/assets/curso/temas/t1/14.svg')")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/15.png')
            .col-sm-12.col-lg-7
              p.mb-0 El posicionamiento corresponde al lugar que ocupa un producto o marca en la percepción del cliente. Un textil puede ser reconocido por calidad, precio competitivo, innovación, tendencia, servicio o especialización.
              
      
      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Nota técnica
        p.mb-0 Los conceptos de mercadeo y #[i marketing] se relacionan entre sí. La identificación de una necesidad orienta la selección del producto, la segmentación permite definir el público objetivo y el posicionamiento ayuda a construir una imagen clara frente al cliente.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/16.png')
        .col-sm-12.col-lg-7
            p.mb-4 La #[b comercialización de productos textiles] comprende las actividades mediante las cuales telas, hilos, insumos, prendas, muestras, servicios o soluciones textiles se presentan y distribuyen en el mercado. Este proceso integra la selección del producto, la organización del portafolio, la definición de precios, la comunicación de atributos, el uso de canales comerciales y la atención a los requerimientos del cliente.
            p.mb-0 En este ámbito, la información técnica del textil cumple una función comercial. La composición, el gramaje, el ancho útil, la textura, el acabado, la solidez del color, la resistencia o la facilidad de mantenimiento permiten construir argumentos para orientar la decisión de compra. No obstante, estos atributos requieren relacionarse con el uso final del producto para que resulten comprensibles y pertinentes para el cliente.
      
      p.mb-5(data-aos='fade-right') Los #[b canales de comercialización] pueden variar según el tipo de producto, el volumen de venta y el perfil del comprador. Una empresa textil puede trabajar mediante punto físico, venta directa, distribuidores, ferias, catálogos, páginas web, redes sociales, comercio electrónico o atención institucional. La elección del canal incide en la forma de presentar el producto, gestionar inventarios, atender consultas y cerrar negociaciones.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 ● Factores que orientan la comercialización textil

      SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/17.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Tipo de producto
          p.mb-0.text-center Permite definir si la oferta corresponde a telas, hilos, insumos, prendas, muestras o servicios.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/18.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Uso final
          p.mb-0.text-center Permite recomendar materiales según confección, dotación, moda, hogar o decoración.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/19.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Perfil del cliente
          p.mb-0.text-center Ajusta el lenguaje comercial, el volumen, el precio y la presentación de beneficios.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/20.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Canal comercial
          p.mb-0.text-center Determina si la atención será presencial, digital, institucional, mayorista o minorista.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/21.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Información técnica
          p.mb-0.text-center Sustenta composición, calidad, cuidados, acabados, rendimiento y desempeño.

        .tarjeta.bg-color-2.p-4.hcard-1
          .row.justify-content-center.mb-4
            .col-7
              img(src='@/assets/curso/temas/t1/22.svg')
          .bg-color-acento-botones.mb-4.py-1
            h4.mb-0.text-center.fw-bold Servicio asociado
          p.mb-0.text-center Incluye asesoría, muestras, tiempos de entrega, fichas técnicas y seguimiento.


      p.mb-0(data-aos='fade-right') La comercialización de productos textiles adquiere mayor solidez cuando combina conocimiento del material con lectura del mercado. Esta relación permite presentar los productos con argumentos técnicos, organizar la oferta según el tipo de cliente y fortalecer la toma de decisiones comerciales.


      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Estrategias de comercialización, portafolio, marca y posicionamiento
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/24.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/23.svg')
            .col-sm-12.col-lg-10 Una estrategia de comercialización define la forma en que una empresa organiza sus productos, canales, comunicación y recursos para participar en el mercado. A diferencia de los métodos de venta, que se centran en la acción directa con el cliente, la estrategia de comercialización se orienta a planear cómo se posiciona la oferta textil, cómo se estructura el portafolio y qué acciones permiten conectar el producto con un segmento determinado.
          p.mb-0 En productos textiles, la estrategia puede dirigirse a introducir una nueva línea de telas, fortalecer el reconocimiento de una marca, organizar un portafolio por segmentos, mejorar la presencia digital, ampliar canales de distribución o destacar atributos diferenciales como calidad, tendencia, durabilidad, funcionalidad o facilidad de mantenimiento.

      p.mb-5(data-aos='fade-right') El diseño de una estrategia requiere partir de un diagnóstico comercial. Este diagnóstico permite reconocer el comportamiento del mercado, los productos con mayor demanda, las prácticas de la competencia, las características del cliente y las oportunidades de diferenciación. A partir de esa información se definen objetivos, públicos, mensajes, canales y recursos de apoyo para la comercialización.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta para definir una estrategia de comercialización textil  
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
          .col-sm-12.col-lg-10  
            PasosA.color-acento-contenido(tipo="l")
              .row.align-items-center
                .col-sm-12.col-lg-10
                  h4 Diagnóstico del mercado
                  p.mb-0 Permite reconocer clientes, competencia, canales y comportamiento de compra, con el fin de identificar qué telas, insumos o prendas presentan mayor oportunidad comercial.
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/25.svg')

              .row.align-items-center
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/26.svg')
                .col-sm-12.col-lg-10
                  h4 Definición del público objetivo
                  p.mb-0 Precisa el segmento al que se dirige la oferta y diferencia clientes de moda, dotación, decoración, hogar, deporte o venta mayorista.

              .row.align-items-center
                .col-sm-12.col-lg-10
                  h4 Organización del portafolio
                  p.mb-0 Estructura productos según características, usos o líneas comerciales, como composición, acabado, uso final, precio, color o tendencia.
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/28.svg')

              .row.align-items-center
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/29.svg')
                .col-sm-12.col-lg-10
                  h4 Propuesta de valor
                  p.mb-0 Establece los beneficios que diferencian la oferta, como calidad, disponibilidad, ficha técnica, variedad, asesoría o valor agregado.

              .row.align-items-center
                .col-sm-12.col-lg-10
                  h4 Selección de canales
                  p.mb-0 Define los medios para presentar y distribuir el producto, como punto de venta, catálogo digital, página web, redes sociales, ferias o distribuidores.
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/30.svg')

              .row.align-items-center
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/31.svg')
                .col-sm-12.col-lg-10
                  h4 Comunicación comercial
                  p.mb-0 Construye mensajes claros sobre atributos y beneficios, mediante composición, cuidados, aplicaciones, ventajas y recomendaciones de uso.
              .row.align-items-center
                .col-sm-12.col-lg-10
                  h4 Seguimiento
                  p.mb-0 Revisa resultados y ajusta acciones comerciales a partir de consultas, productos más solicitados, rotación, aceptación y oportunidades de mejora.
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/49.svg')


      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Nota técnica
        p.mb-0 Una estrategia de comercialización no equivale a una técnica de cierre de venta. Su función es organizar las condiciones para que el producto llegue al mercado de manera coherente, diferenciada y alineada con las necesidades del cliente.

      .row.justify-content-center.mb-5.bg-color-3(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/32.png')
        .col-sm-12.col-lg-7.p-5
          img.mb-4.wcus-1(src='@/assets/curso/temas/t1/33.svg')
          p.mb-3 La estrategia resulta pertinente cuando conecta información técnica, comportamiento del mercado y comunicación de valor. En el sector textil, esta conexión permite que una empresa no solo disponga de productos, sino que estructure una oferta comprensible, competitiva y adaptable a diferentes segmentos comerciales.
          p.mb-0 La organización comercial de productos textiles requiere una estructura que permita presentar la oferta de manera clara, diferenciada y coherente con el mercado. En este contexto, el portafolio, la marca y el posicionamiento cumplen una función estratégica, ya que facilitan la identificación de los productos, orientan la comunicación con el cliente y fortalecen la percepción de valor frente a la competencia.

      p.mb-3(data-aos='fade-right') El portafolio reúne los productos y servicios que una empresa pone a disposición del mercado. La marca permite reconocer, diferenciar y asociar una oferta con determinados atributos, valores o experiencias. El posicionamiento corresponde a la forma en que el cliente percibe esa marca o producto en relación con otras alternativas disponibles.
      p.mb-5(data-aos='fade-right') En la comercialización de productos textiles, estos tres elementos se relacionan de manera directa. Un portafolio desorganizado dificulta la presentación de la oferta; una marca poco definida limita el reconocimiento comercial; y un posicionamiento débil reduce la capacidad de diferenciarse en mercados donde existen productos similares en composición, precio, apariencia o uso final.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre portafolio, marca y posicionamiento

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/34.png')
        .col-sm-12.col-lg-6
           LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Portafolio")
              .col-sm-12.col-lg-12
                p.mb-0 Ordena los productos y servicios disponibles para el cliente, como telas, hilos, insumos, prendas, muestras, asesorías o servicios asociados.

            .row(numero="2" titulo="Marca")
              .col-sm-12.col-lg-12
                p.mb-0 Identifica la oferta y la diferencia de otras alternativas del mercado mediante nombre, identidad gráfica, promesa de valor, estilo comercial y atributos reconocibles.

            .row(numero="3" titulo="Posicionamiento")
              .col-sm-12.col-lg-12
                p.mb-0 Determina la percepción del cliente frente al producto o empresa, a partir de calidad, precio, variedad, disponibilidad, tendencia, servicio o especialización.

            .row(numero="4" titulo="Comunicación comercial")
              .col-sm-12.col-lg-12
                p.mb-0 Explica beneficios, usos y atributos de la oferta mediante fichas técnicas, catálogos, muestras, redes sociales, página web o atención directa.

            .row(numero="5" titulo="Coherencia de oferta")
              .col-sm-12.col-lg-12
                p.mb-0 Relaciona producto, marca, precio, canal y cliente objetivo mediante líneas textiles organizadas según segmento, necesidad, uso final o nivel comercial.
      p.mb-3(data-aos='fade-right') La articulación entre portafolio, marca y posicionamiento fortalece la gestión comercial porque permite presentar los productos textiles con un criterio definido. Esta organización favorece que el cliente comprenda qué se ofrece, por qué resulta pertinente y qué diferencia a la empresa dentro del mercado.
      p.mb-5(data-aos='fade-right') El #[b portafolio de productos y servicios] corresponde al conjunto organizado de bienes, soluciones y apoyos comerciales que una empresa ofrece a sus clientes. En el sector textil, puede incluir telas, hilos, avíos, insumos, prendas, productos confeccionados, muestras, fichas técnicas, asesoría en selección de materiales, servicios de distribución, atención posventa o acompañamiento comercial.

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/35.svg')
        .col-sm-12.col-lg-11
            p.mb-0 Su función principal consiste en facilitar la presentación de la oferta. Un portafolio estructurado permite identificar con claridad las líneas de producto, sus características, usos, precios, disponibilidad, condiciones de compra y beneficios. Esta organización contribuye a que el cliente compare opciones, seleccione materiales acordes con su necesidad y reconozca el valor de la empresa como proveedor.

      .bg-color-3.p-4.mb-5(data-aos='fade-right')
        p.mb-0 La construcción del portafolio requiere clasificar los productos según criterios pertinentes para la comercialización. En productos textiles, esta clasificación puede realizarse por tipo de material, composición, uso final, línea de producto, nivel de precio, acabado, color, temporada, tipo de cliente o volumen de compra. También puede incluir servicios complementarios que fortalecen la experiencia comercial.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 ● Criterios para organizar el portafolio textil

      .bg-full-width.bg-fondo-1.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/36.svg')
            .col-sm-12.col-lg-8
              SlyderF.mb-0.arrow-white(columnas="col-md-6 col-xl-4")
                .tarjeta.bg-color-4.p-4.hcard-1
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t1/37.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Tipo de producto
                  p.mb-0.text-center Agrupa la oferta según la naturaleza del bien o servicio, como telas, hilos, insumos, prendas, muestras, catálogos o asesorías.

                .tarjeta.bg-color-4.p-4.hcard-1
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t1/38.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Uso final
                  p.mb-0.text-center Clasifica los productos según la aplicación prevista, como moda, dotación, hogar, decoración, deporte o uso institucional.

                .tarjeta.bg-color-4.p-4.hcard-1
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t1/39.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Composición
                  p.mb-0.text-center Ordena los materiales según fibras o mezclas, como algodón, poliéster, viscosa, elastano, mezclas sintéticas o fibras naturales.

                .tarjeta.bg-color-4.p-4.hcard-1
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t1/40.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Acabado
                  p.mb-0.text-center Diferencia productos por procesos o características superficiales, como suavizado, estampado, repelente al agua, antiarrugas o antiencogimiento.

                .tarjeta.bg-color-4.p-4.hcard-1
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t1/41.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Segmento de cliente
                  p.mb-0.text-center Relaciona productos con grupos comerciales específicos, como talleres de confección, marcas de moda, empresas de dotación, distribuidores o compradores finales.

                .tarjeta.bg-color-4.p-4.hcard-1
                  .row.justify-content-center.mb-4
                    .col-7
                      img(src='@/assets/curso/temas/t1/42.svg')
                  .bg-color-acento-botones.mb-4.py-1
                    h4.mb-0.text-center.fw-bold Nivel comercial
                  p.mb-0.text-center Ubica la oferta según precio, calidad, disponibilidad o valor percibido, como línea básica, línea especializada, productos de alta rotación o referencias diferenciadas.

      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Nota técnica
        p.mb-0 El portafolio no corresponde únicamente a una lista de productos. También funciona como herramienta de comunicación comercial, debido a que ordena la información que permite explicar atributos, usos, beneficios y condiciones de compra.
      p.mb-3(data-aos='fade-right') Una estructura adecuada del portafolio permite mejorar la atención al cliente y optimizar el proceso comercial. Al contar con información organizada, la empresa puede responder con mayor precisión a consultas sobre composición, usos, precios, cantidades disponibles, tiempos de entrega y recomendaciones de aplicación.
      p.mb-5(data-aos='fade-right') El portafolio adquiere mayor utilidad cuando integra información suficiente para orientar la decisión de compra. En el caso de productos textiles, conviene que la presentación incluya datos técnicos y comerciales que respalden la oferta.


      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 ● Elementos que puede incluir un portafolio textil


      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 A
            p.text-center
              b Nombre o referencia del producto
            p.text-center Permite identificar cada tela, insumo, prenda o servicio.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 B
            p.text-center
              b Descripción técnica
            p.text-center Presenta composición, estructura, gramaje, ancho, acabado o características principales.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 C
            p.text-center
              b Uso recomendado
            p.text-center Relaciona el producto con aplicaciones posibles en moda, dotación, hogar, decoración o confección.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 D
            p.text-center
              b Muestra física o apoyo gráfico
            p.text-center Facilita reconocer textura, color, caída, brillo, apariencia o acabado.
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 E
            p.text-center
              b Precio o rango comercial
            p.text-center Orienta la decisión de compra según presupuesto, volumen y nivel de calidad.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 F
            p.text-center
              b Condiciones de disponibilidad
            p.text-center Informa colores, cantidades, tiempos de entrega o referencias activas.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 G
            p.text-center
              b Beneficios principales
            p.text-center Resume el valor agregado del producto frente a la necesidad del cliente.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.p-5.hcus-1
            .tarjeta-numerada__numero
              .h2 H
            p.text-center
              b Servicio complementario
            p.text-center Incluye asesoría, entrega, fichas técnicas, atención posventa o soporte comercial.

      p.mb-5(data-aos='fade-right') La presentación del portafolio aporta orden y confianza al proceso de comercialización. Cuando la información se encuentra clara, completa y actualizada, el cliente puede valorar mejor la oferta y tomar decisiones con mayor seguridad.


      .row.justify-content-center.mb-5.bg-color-3(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/44.png')
        .col-sm-12.col-lg-7.p-4
          img.mb-4.wcus-1(src='@/assets/curso/temas/t1/43.svg')
          p.mb-0 #[b La marca] constituye un signo de identificación comercial que permite reconocer una empresa, producto o servicio dentro del mercado. Está compuesta por elementos como nombre, identidad gráfica, lenguaje, promesa de valor, atributos diferenciales, experiencia de compra y relación con el cliente. En el sector textil, la marca ayuda a distinguir una oferta frente a otras que pueden compartir características similares en composición, precio o función.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/45.svg')
        .col-sm-12.col-lg-7.p-5.bg-color-4
          p.mb-0 #[b El posicionamiento] se refiere al lugar que una marca o producto ocupa en la percepción del cliente. Esta percepción puede construirse a partir de calidad, precio, variedad, disponibilidad, cumplimiento, innovación, sostenibilidad, atención, especialización, trayectoria o cercanía con las necesidades del comprador. Una marca textil puede posicionarse por ofrecer telas de alta resistencia, insumos de bajo costo, productos alineados con tendencias, amplia variedad de referencias o asesoría técnica confiable.

      p.mb-5(data-aos='fade-right') Marca y posicionamiento no funcionan de manera aislada. La marca comunica quién ofrece el producto y qué valor representa; el posicionamiento refleja cómo esa oferta es interpretada por el mercado. Por ello, la coherencia entre lo que la empresa promete y lo que el cliente experimenta resulta fundamental para sostener una imagen comercial confiable.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 ● Elementos de la marca

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/46.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-4.p-4(titulo="Nombre comercial")
              p.mb-0 Identifica la empresa, línea o producto, y permite recordar y diferenciar una oferta textil.

            .tarjeta.bg-color-4.p-4(titulo="Identidad gráfica")
              p.mb-0 Reúne logotipo, colores, tipografía, empaques o piezas de comunicación, y fortalece el reconocimiento en catálogos, etiquetas, muestras, página web o redes sociales.

            .tarjeta.bg-color-4.p-4(titulo="Promesa de valor")
              p.mb-0 Expresa el beneficio principal que la marca ofrece, como calidad constante, variedad, precio competitivo, asesoría técnica o disponibilidad.

            .tarjeta.bg-color-4.p-4(titulo="Atributos diferenciales")
              p.mb-0 Distingue la oferta frente a la competencia mediante acabados especiales, tendencias, fichas técnicas completas, servicio ágil o productos especializados.

            .tarjeta.bg-color-4.p-4(titulo="Experiencia del cliente")
              p.mb-0 Integra la percepción generada durante la interacción comercial, como atención, claridad de información, cumplimiento, seguimiento y solución de necesidades.

            .tarjeta.bg-color-4.p-4(titulo="Coherencia comercial")
              p.mb-0 Relaciona producto, precio, comunicación y servicio para reforzar la confianza y la continuidad en la relación con compradores.
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/47.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h4.mb-4 Posicionamiento en el mercado textil
          p.mb-0 El posicionamiento se construye a partir de percepciones repetidas. Si una empresa comunica calidad, el producto debe sostener esa promesa mediante composición, acabado, comportamiento y servicio. Si comunica precio competitivo, la oferta debe mantener equilibrio entre costo, disponibilidad y valor percibido.

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 ● Tipos de posicionamiento

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/48.png')
        .col-sm-12.col-lg-6
           LineaTiempoD.color-acento-botones
            .row(numero="A" titulo="Por calidad")
              .col-sm-12.col-lg-12
                p.mb-0 Resalta desempeño, durabilidad y cumplimiento técnico. Se aplica en telas para uniformes, dotación, prendas de alto uso o productos especializados.

            .row(numero="B" titulo="Por precio")
              .col-sm-12.col-lg-12
                p.mb-0 Destaca accesibilidad y competitividad económica. Se aplica en referencias de alta rotación para producción en volumen.

            .row(numero="C" titulo="Por variedad")
              .col-sm-12.col-lg-12
                p.mb-0 Enfatiza amplitud de referencias, colores, acabados o usos. Se aplica en portafolios textiles para moda, hogar, decoración o confección general.

            .row(numero="D" titulo="Por especialización")
              .col-sm-12.col-lg-12
                p.mb-0 Atiende necesidades específicas de un segmento. Se aplica en textiles deportivos, institucionales, técnicos o funcionales.

            .row(numero="E" titulo="Por tendencia")
              .col-sm-12.col-lg-12
                p.mb-0 Se apoya en actualidad estética, color, textura o temporada. Se aplica en bases textiles para colecciones de moda o lanzamientos comerciales.

            .row(numero="F" titulo="Por servicio")
              .col-sm-12.col-lg-12
                p.mb-0 Diferencia la oferta mediante atención, asesoría y cumplimiento. Se aplica en acompañamiento en selección de materiales, muestras, fichas técnicas y seguimiento.









      p.mb-0(data-aos='fade-right') El posicionamiento se fortalece cuando la marca mantiene consistencia entre lo que comunica y lo que entrega. En la comercialización textil, esta consistencia permite construir confianza, facilitar la recordación y diferenciar la oferta en mercados donde los productos pueden parecer similares a primera vista.
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
