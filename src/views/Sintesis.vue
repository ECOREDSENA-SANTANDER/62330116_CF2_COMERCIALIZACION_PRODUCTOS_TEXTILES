<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda la comercialización y las ventas de productos textiles a partir de los fundamentos de mercadeo y <i>marketing</i>, la organización del portafolio, la construcción de marca y el posicionamiento, como elementos que permiten relacionar el producto con las necesidades del mercado. Asimismo, integra el análisis de la competencia, las mejores prácticas comerciales y el uso de herramientas digitales para fortalecer la presentación, comunicación y seguimiento de la oferta textil. También desarrolla la venta como un proceso que articula concepto, métodos, políticas, objetivos, argumentación comercial y atención al cliente, considerando las características técnicas del producto, los canales de venta y las condiciones de compra. Finalmente, reconoce la importancia de la presentación comercial, el uso de muestras, fichas técnicas, demostraciones, estrategias de comunicación, tipos de clientes, habilidades interpersonales y líneas de servicio, con el fin de favorecer una atención clara, organizada y coherente con las necesidades del cliente en el sector textil.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre comercialización y venta de productos textiles: fundamentos, competencia digital, ventas, presentación y servicio al cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
