export default {
  global: {
    Name: 'Comercialización y ventas de productos textiles',
    Description:
      'El componente formativo “Comercialización y ventas de productos textiles” aborda fundamentos de mercadeo, <i>marketing</i>, comercialización y ventas aplicados al sector textil, mediante conceptos de mercado, cliente, producto, portafolio, marca, posicionamiento, competencia, herramientas digitales, métodos de venta, comunicación y servicio al cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos comerciales para productos textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mercadeo, <i>marketing</i> y comercialización textil',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Estrategias de comercialización, portafolio, marca y posicionamiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Competencia y herramientas digitales para la comercialización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis de la competencia y mejores prácticas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas digitales y tecnologías de la información',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ventas de productos textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, métodos, políticas y objetivos de ventas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Proceso comercial y argumentación de la venta textil',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Presentación comercial del producto textil',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolo de presentación de productos y servicios',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estrategias de comunicación, demostraciones y muestras',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cliente, comunicación y servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de clientes y habilidades de comunicación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Líneas de servicio al cliente',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Canal de comercialización',
      significado:
        'medio físico, digital o institucional mediante el cual una empresa presenta, distribuye o vende sus productos y servicios al cliente.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona, empresa o institución que adquiere o puede adquirir productos textiles de acuerdo con una necesidad, expectativa o condición de compra.',
    },
    {
      termino: 'Comercialización',
      significado:
        'conjunto de acciones orientadas a presentar, distribuir, comunicar y posicionar productos o servicios en el mercado.',
    },
    {
      termino: 'Competencia',
      significado:
        'conjunto de empresas, marcas o proveedores que ofrecen productos o servicios similares, o alternativas que satisfacen necesidades parecidas del cliente.',
    },
    {
      termino: 'Comunicación comercial',
      significado:
        'proceso mediante el cual se transmiten atributos, beneficios, condiciones y argumentos de valor de un producto o servicio.',
    },
    {
      termino: 'Estrategia de comercialización',
      significado:
        'plan de acción que articula objetivos, productos, públicos, canales, mensajes, recursos y seguimiento para conectar la oferta con el mercado.',
    },
    {
      termino: 'Herramientas digitales',
      significado:
        'recursos utilizados para presentar productos, atender clientes, organizar información, gestionar pedidos o apoyar procesos comerciales de forma digital.',
    },
    {
      termino: 'Marca',
      significado:
        'signo o conjunto de signos que identifica y diferencia productos, servicios o empresas en el mercado.',
    },
    {
      termino: '<i>Marketing</i>',
      significado:
        'conjunto de procesos orientados a crear, comunicar, entregar e intercambiar ofertas de valor para clientes, empresas y sociedad.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'estudio del mercado, los clientes, la competencia, los canales, los precios y las condiciones que influyen en la comercialización.',
    },
    {
      termino: 'Método de venta',
      significado:
        'forma organizada de abordar al cliente, presentar la oferta, responder inquietudes y conducir el proceso comercial.',
    },
    {
      termino: 'Portafolio',
      significado:
        'conjunto organizado de productos y servicios que una empresa ofrece al mercado, clasificado según líneas, usos, características o segmentos.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'percepción que el cliente construye sobre una marca, producto o empresa en relación con otras alternativas del mercado.',
    },
    {
      termino: 'Protocolo de presentación',
      significado:
        'secuencia ordenada para exponer productos o servicios ante el cliente, considerando preparación, explicación, atención de inquietudes y seguimiento.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'conjunto de acciones de atención, orientación, respuesta, seguimiento y solución de novedades antes, durante y después de la venta.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Marketing Association. (s. f.). The definition of marketing.',
    },
    {
      referencia:
        'Chaffey, D., Ellis-Chadwick, F., & Abed-Rabbo, M. (2025). Digital marketing (9th ed.). Pearson.',
    },
    {
      referencia:
        'Ingram, T. N., LaForge, R. W., Avila, R. A., Schwepker, C. H. Jr., & Williams, M. R. (2024). Sales management: Analysis and decision making (11th ed.). Routledge.',
    },
    {
      referencia:
        'Jobber, D., Lancaster, G., & Le Meunier-FitzHugh, K. (2024). Selling and sales management (12th ed.). Pearson.',
    },
    {
      referencia:
        'Kotler, P., Armstrong, G., & Balasubramanian, S. (2023). Principles of marketing: Global edition (19th ed.). Pearson.',
    },
    {
      referencia:
        'Kotler, P., Keller, K. L., & Chernev, A. (2022). Marketing management (16th ed.). Pearson.',
    },
    {
      referencia:
        'Solomon, M. R. (2020). Consumer behavior: Buying, having, and being (13th ed.). Pearson.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
