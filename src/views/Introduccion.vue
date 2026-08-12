<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img.mb-5(src='@/assets/curso/temas/intro/1.png')
    p.mb-5 La comercialización y venta de productos textiles requiere comprender cómo se relacionan el mercado, el cliente, el producto, la marca, la comunicación y el servicio. En este proceso, el mercadeo y el <i>marketing</i> permiten identificar necesidades, reconocer oportunidades comerciales y presentar productos textiles de manera coherente con sus características técnicas, funcionales y comerciales.

    .row.justify-content-center.mb-5.align-items-end
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png') 
      .col-sm-12.col-lg-7
          p.mb-3 Este componente formativo aborda la comercialización textil como un proceso planificado, en el que la oferta no se limita a mostrar productos, sino que exige organizar portafolios, definir atributos de marca, reconocer la competencia y utilizar herramientas digitales para fortalecer la presencia comercial. De esta manera, el aprendiz podrá comprender cómo se estructura una propuesta de valor acorde con las condiciones del mercado y las expectativas del cliente.
          p.mb-0 Asimismo, se estudia la venta de productos textiles como una interacción que integra información técnica, comunicación clara y orientación al comprador. Para ello, se consideran los métodos de venta, las políticas comerciales, los objetivos de ventas, la presentación del producto, el uso de muestras, la argumentación comercial y la atención a diferentes tipos de clientes.

    .row.justify-content-center.mb-0.align-items-center
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/3.svg')
      .col-sm-12.col-lg-11
          p.mb-0 Finalmente, el componente permite relacionar la planeación comercial con el servicio al cliente antes, durante y después de la venta. Esta integración favorece una gestión más organizada, pertinente y confiable, en la que los productos textiles se presentan con argumentos claros y se comercializan de acuerdo con las necesidades del mercado.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
