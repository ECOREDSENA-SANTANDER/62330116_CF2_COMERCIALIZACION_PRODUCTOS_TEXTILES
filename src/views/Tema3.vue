<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 3
        h1 Ventas de productos textiles
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.svg')
        .col-sm-12.col-lg-6.p-5.bg-color-4
          p.mb-0.mcus-1 La venta de productos textiles corresponde al proceso mediante el cual una empresa presenta, argumenta, negocia y entrega una oferta al cliente, de acuerdo con sus necesidades, condiciones de compra y expectativas de uso. En este proceso intervienen conocimientos técnicos del producto, habilidades de comunicación, manejo de información comercial, capacidad de orientación y seguimiento a la relación con el comprador.
      
      p.mb-3(data-aos='fade-right') En el sector textil, vender no significa únicamente ofrecer una tela, prenda, insumo o servicio. La acción comercial requiere explicar composición, usos recomendados, acabados, disponibilidad, precio, calidad, condiciones de entrega, cuidados y beneficios frente a la necesidad del cliente. Esta información permite que la venta se apoye en argumentos claros y no solo en la apariencia del producto o en el valor económico.

      p.mb-5(data-aos='fade-right') Las ventas pueden desarrollarse en espacios presenciales, digitales, institucionales, mayoristas o minoristas. Cada contexto exige una forma distinta de atención, presentación y negociación. Una venta en punto físico puede apoyarse en la manipulación de muestras; una venta digital requiere fotografías, fichas técnicas y mensajes precisos; una venta institucional demanda cumplimiento, trazabilidad, cotización formal y capacidad de respuesta.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h4 Sentido técnico de la venta textil
          p.mb-3 La venta textil integra producto, cliente, comunicación y servicio. Su efectividad depende de reconocer la necesidad del comprador, presentar el producto con información verificable, argumentar sus beneficios, responder inquietudes y acompañar el proceso hasta el cierre o seguimiento comercial.
          p.mb-0 La gestión de ventas se fortalece cuando la información del producto y la atención al cliente se desarrollan de manera organizada. En productos textiles, la claridad técnica, la escucha comercial y el cumplimiento de lo ofrecido inciden directamente en la confianza del comprador.


      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Concepto, métodos, políticas y objetivos de ventas
      
      .row.justify-content-center.mb-5.bg-color-3(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.png')
        .col-sm-12.col-lg-7.p-5
          p.mb-3 La venta es una actividad comercial orientada a facilitar el intercambio entre una empresa y un cliente, mediante la presentación de productos o servicios que responden a una necesidad específica. En productos textiles, este intercambio puede involucrar telas, hilos, insumos, prendas, muestras, servicios de asesoría, distribución o soluciones asociadas a la confección y comercialización.
          p.mb-0 El concepto de venta incluye varias acciones: identificar al cliente, reconocer su necesidad, presentar alternativas, explicar beneficios, resolver inquietudes, acordar condiciones y concretar una decisión comercial. Por tanto, la venta no se limita al momento del pago; abarca la preparación previa, la interacción con el comprador y el seguimiento posterior.
      
      p.mb-5(data-aos='fade-right') En el contexto textil, la venta requiere dominio de información técnica. Un comprador puede consultar por composición, rendimiento, resistencia, acabados, cuidado, color, disponibilidad o uso recomendado. La respuesta comercial debe ser precisa, coherente con la ficha técnica y ajustada a la necesidad del cliente.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aspectos del concepto de venta
      
      
      .tarjeta.bg-color-2.pcus-4.pcus-3.mb-5(data-aos='fade-right')
        SlyderA.pcus-1(tipo="b")
          .row.justify-content-center
            .col-sm-12.col-lg-4
              h4 Intercambio comercial
              p.mb-0 Relaciona la oferta de la empresa con la necesidad del cliente, por ejemplo, la venta de rollos de tela a un taller de confección.
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/4.png')

          .row.justify-content-center
            .col-sm-12.col-lg-4
              h4 Atención a la necesidad
              p.mb-0 Permite reconocer el uso o problema que busca resolver el comprador, como la selección de una tela resistente para uniformes.
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/5.png')

          .row.justify-content-center
            .col-sm-12.col-lg-4
              h4 Presentación de beneficios
              p.mb-0 Explica atributos que aportan valor, como fácil mantenimiento, buena estabilidad dimensional o adecuación al uso final.
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/6.png')

          .row.justify-content-center
            .col-sm-12.col-lg-4
              h4 Acuerdo de condiciones
              p.mb-0 Define precio, cantidad, entrega, pago o servicio, por ejemplo, una cotización de insumos textiles con tiempos de despacho.
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/7.png')

          .row.justify-content-center
            .col-sm-12.col-lg-4
              h4 Continuidad comercial
              p.mb-0 Incluye el seguimiento después de la compra, como el registro de cliente frecuente o la verificación de satisfacción con el producto.
            .col-sm-12.col-lg-7.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/8.png')

      .cajon.color-primario.p-4.mb-0(data-aos='fade-right')
        h4 Nota técnica
        p.mb-0 La venta textil requiere relacionar el lenguaje comercial con el lenguaje técnico del producto. Esta relación permite presentar la oferta con claridad y evitar interpretaciones incorrectas sobre uso, calidad o desempeño.
      .bg-full-width.bg-fondo-2.mb-0(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-5.align-items-center
            .col-sm-12.col-lg-8
                p.mb-3 El concepto de venta permite comprender que la relación con el cliente no se reduce a una transacción inmediata. En el sector textil, una atención bien orientada puede generar recompra, recomendación y continuidad en el suministro de productos.
                p.mb-3 Los métodos de ventas son formas organizadas de abordar al cliente, presentar la oferta y conducir el proceso comercial. Su elección depende del tipo de producto, el canal utilizado, el perfil del comprador, el volumen de compra y los objetivos de la empresa. En textiles, estos métodos permiten adaptar la atención a clientes minoristas, mayoristas, institucionales, digitales o especializados.
                p.mb-0 Algunos métodos se centran en la atención directa y personalizada; otros se apoyan en medios digitales, catálogos, visitas comerciales o relaciones con empresas. Cada método exige preparación de información, manejo de muestras, claridad en precios, conocimiento del portafolio y capacidad para resolver inquietudes técnicas.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/9.png')
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.svg')
        .col-sm-12.col-lg-6.p-5.bg-color-4
          p.mb-0.mcus-1 La aplicación de un método de venta no debe entenderse como una fórmula rígida. En una misma empresa pueden coexistir diferentes formas de venta: atención en mostrador, venta por catálogo, venta consultiva, venta digital, venta institucional o venta mayorista. La coherencia se logra cuando cada método responde al tipo de cliente y al producto ofrecido.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Métodos de venta en productos textiles

      TabsC.color-primario.mb-5(data-aos='fade-right')
        .py-3.py-md-4(titulo="Venta directa")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/11.png')
            .col-sm-12.col-lg-7
              p.mb-0 Permite el contacto inmediato entre vendedor y cliente. Se realiza sin intermediarios entre la empresa y el cliente, mediante atención presencial o contacto directo por otros canales.

        .py-3.py-md-4(titulo="Venta consultiva")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/12.png')
            .col-sm-12.col-lg-7
              p.mb-0 Se basa en el diagnóstico de la necesidad del cliente. Permite recomendar textiles según uso final, calidad, acabado o presupuesto.

        .py-3.py-md-4(titulo="Venta por catálogo")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/13.png')
            .col-sm-12.col-lg-7
              p.mb-0 Presenta la oferta mediante catálogos impresos o digitales con referencias, imágenes y características del producto. Facilita mostrar telas, colores, insumos o líneas de producto mediante catálogo.

        .py-3.py-md-4(titulo="Venta digital")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/14.png')
            .col-sm-12.col-lg-7
              p.mb-0 Utiliza medios virtuales para exhibir, cotizar o cerrar pedidos. Se apoya en página web, redes sociales, mensajería o comercio electrónico.

        .py-3.py-md-4(titulo="Venta mayorista")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/15.png')
            .col-sm-12.col-lg-7
              p.mb-0 Se orienta a la comercialización por volumen o cantidades significativas. Puede aplicarse en distribución de rollos, insumos o prendas a talleres, tiendas o empresas.

        .py-3.py-md-4(titulo="Venta institucional")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/16.png')
            .col-sm-12.col-lg-7
              p.mb-0 Atiende empresas, entidades o compradores organizacionales. Se aplica en dotaciones, uniformes, textiles corporativos o pedidos con especificaciones formales.




      .bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/17.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          h4 Selección del método de venta
          p.mb-3 El método de venta se selecciona según la forma en que el cliente compra y la información que necesita para decidir. Un cliente institucional puede requerir cotización, ficha técnica y cumplimiento de especificaciones; un comprador minorista puede valorar asesoría rápida, muestra física y disponibilidad inmediata.
          p.mb-0 La elección del método adecuado mejora la interacción comercial porque permite adaptar el mensaje, los recursos y el seguimiento. En productos textiles, esta adaptación facilita que la información técnica llegue al cliente de forma comprensible y útil para la compra.


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/18.png')
        .col-sm-12.col-lg-7
            p.mb-5 Las #[b políticas de ventas] establecen criterios internos que orientan la actuación comercial de una empresa. Estas políticas pueden definir condiciones de precios, descuentos, formas de pago, tiempos de entrega, manejo de devoluciones, atención de reclamos, reserva de productos, venta mínima, garantías comerciales y procedimientos de cotización. Su propósito es ordenar el proceso de venta y mantener coherencia en la atención al cliente.
            p.mb-0 Los #[b objetivos de ventas] expresan los resultados que la empresa busca alcanzar en un periodo determinado. Pueden relacionarse con incremento de ingresos, captación de nuevos clientes, rotación de inventario, posicionamiento de una línea textil, expansión de canales, recuperación de clientes o fortalecimiento del servicio. Estos objetivos deben ser claros, medibles y coherentes con la capacidad comercial y operativa de la empresa.

      p.mb-5(data-aos='fade-right') En productos textiles, las políticas y objetivos permiten reducir improvisaciones. Si una empresa comercializa telas por rollo, por metro, por referencia o por pedido especial, necesita definir condiciones precisas para evitar errores en cantidades, precios, tiempos y responsabilidades. De igual manera, los objetivos ayudan a priorizar esfuerzos comerciales según productos, clientes o canales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Políticas y objetivos de ventas

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-green" data-aos='fade-right')
        .row.justify-content-center(titulo="Política de precios")
          .col-sm-12.col-lg-5
            p.mb-0 Define valores, descuentos y condiciones comerciales, como precio por metro, por rollo, por volumen o por cliente mayorista.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/19.png')

        .row.justify-content-center(titulo="Política de pagos")
          .col-sm-12.col-lg-5
            p.mb-0 Determina formas y plazos de pago, como pago anticipado, crédito aprobado, transferencia o pago contra entrega.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/20.png')

        .row.justify-content-center(titulo="Política de entrega")
          .col-sm-12.col-lg-5
            p.mb-0 Organiza tiempos, condiciones y responsabilidades de despacho, como entrega en punto físico, envío a domicilio o despacho a taller.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/21.png')

        .row.justify-content-center(titulo="Política de cambios o devoluciones")
          .col-sm-12.col-lg-5
            p.mb-0 Establece condiciones para gestionar novedades, como revisión de defectos, errores de referencia o diferencias en el pedido.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/22.png')

        .row.justify-content-center(titulo="Objetivo de crecimiento")
          .col-sm-12.col-lg-5
            p.mb-0 Busca aumentar ventas o ampliar clientes, por ejemplo, mediante el incremento de puntos de venta de una línea textil durante una temporada.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/23.png')

        .row.justify-content-center(titulo="Objetivo de rotación")
          .col-sm-12.col-lg-5
            p.mb-0 Busca incrementar la salida de determinados productos y mantener niveles de inventario acordes con la demanda.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/24.png')

        .row.justify-content-center(titulo="Objetivo de fidelización")
          .col-sm-12.col-lg-5
            p.mb-0 Busca mantener clientes y fortalecer la recompra mediante registro de clientes frecuentes y seguimiento a necesidades recurrentes.
          .col-sm-12.col-lg-6
            img.d-none.d-lg-block(src='@/assets/curso/temas/t3/25.png')

      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        h4 Nota técnica
        p.mb-0 Las políticas de ventas deben comunicarse con claridad al cliente y aplicarse de forma consistente. La falta de criterios puede generar confusión, reclamos o diferencias entre lo ofrecido y lo entregado.

      p.mb-0(data-aos='fade-right') Una gestión comercial ordenada requiere que los objetivos orienten la acción y que las políticas definan los límites operativos. Esta relación permite vender con mayor control, sostener acuerdos claros y proteger la confianza entre empresa y cliente.





      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Proceso comercial y argumentación de la venta textil
      
        
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/26.png')
        .col-sm-12.col-lg-7
            p.mb-4 El proceso comercial en productos textiles integra las acciones que permiten atender al cliente desde la identificación de la necesidad hasta el seguimiento posterior a la atención inicial. Este proceso requiere información técnica del producto, claridad en la comunicación y capacidad para relacionar los atributos del textil con beneficios concretos para el comprador.
            p.mb-4 En este proceso, la argumentación de la venta cumple una función central, porque permite explicar por qué una tela, insumo, prenda o servicio puede responder a una necesidad específica. La argumentación no debe centrarse únicamente en el precio o en la apariencia del producto, sino en la relación entre composición, acabado, gramaje, uso recomendado, disponibilidad, calidad, cuidado y condiciones comerciales.
            p.mb-0 Acceda al pódcast e identifique cómo la argumentación comercial permite relacionar las características técnicas de un producto textil con los beneficios que necesita comprender el cliente durante el proceso de venta.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t3/27.png')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-secundario.mb-0.p-4(
              texto="Pódcast: vender textiles con argumentos: del dato técnico al beneficio del cliente"
              :audio="require_src('@/assets/curso/temas/audio/podcast.mp3')"
          )

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta del proceso comercial en la venta textil

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/28.png')
        .col-sm-12.col-lg-6
           LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Identificación de la necesidad")
              .col-sm-12.col-lg-12
                p.mb-0 Reconoce el uso, cantidad, calidad, precio o condición requerida por el cliente, por ejemplo, si necesita tela para moda, dotación, hogar, decoración o producción.

            .row(numero="2" titulo="Presentación del producto")
              .col-sm-12.col-lg-12
                p.mb-0 Expone características técnicas y comerciales de la oferta, como composición, acabado, gramaje, ancho, color, textura, rendimiento o disponibilidad.

            .row(numero="3" titulo="Argumentación comercial")
              .col-sm-12.col-lg-12
                p.mb-0 Relaciona atributos del producto con beneficios para el cliente, como durabilidad, facilidad de cuidado, tendencia, resistencia o valor agregado.

            .row(numero="4" titulo="Manejo de objeciones")
              .col-sm-12.col-lg-12
                p.mb-0 Responde dudas sobre precio, calidad, tiempos, usos o condiciones, y aclara diferencias entre materiales, acabados, rendimientos o alternativas disponibles.

            .row(numero="5" titulo="Cierre de venta o avances comerciales")
              .col-sm-12.col-lg-12
                p.mb-0 Formaliza la decisión de compra o el siguiente paso comercial, mediante confirmación de pedido, cotización, muestra, pago, despacho o agenda de seguimiento.

            .row(numero="6" titulo="Seguimiento")
              .col-sm-12.col-lg-12
                p.mb-0 Mantiene comunicación posterior a la atención inicial, con el fin de verificar satisfacción, resolver novedades, registrar recompra o atender solicitudes futuras.




      p.mb-0(data-aos='fade-right') La argumentación comercial fortalece la venta cuando traduce la información técnica del producto en beneficios comprensibles para el cliente. De esta manera, el comprador puede tomar decisiones con mayor seguridad y la empresa puede sostener relaciones comerciales basadas en claridad, cumplimiento y confianza.


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
