export default {
  global: {
    componenteFormativo: 'Aplicación de pruebas de <i>software</i>',
    descripcionCurso:
      'En este módulo el aprendiz identificará que un <i>software</i> con calidad implica la utilización de los diferentes tipos de pruebas, metodologías o procedimientos estándares para el análisis, diseño, programación y prueba del <i>software</i>, para lograr una mayor confiabilidad, mantenibilidad y facilidad de prueba, a la vez que eleve la productividad, tanto para la labor de desarrollo como para el control de la calidad.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Realización de pruebas de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: ' Tipos de pruebas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Agile testing',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaboración del plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificar el área de mejora',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Detectar las principales causas del problema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Formular el objetivo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Seleccionar las acciones de mejora',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Realizar una planeación ',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Seguimiento del plan de mejora',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Mera Paz, J. A. (19 de 10 de 2016). Pruebas de Calidad software. Repositorio Institucional. ',
      link: 'https://repository.ucc.edu.co/handle/20.500.12494/962',
    },
    {
      referencia:
        'Bustamante Ramírez, J. (2011). Sistema de informes para pruebas de software. Repositorio Dspace',
      link: 'http://bibliotecadigital.iue.edu.co/xmlui/handle/20.500.12717/153',
    },
    {
      referencia:
        'Clemente, P. J., & Gómez, A. (2014). Aplicación de un proceso de mejora continua en una asignatura de Desarrollo de <i>Software</i> Dirigido por Modelos. UPCommons. Portal de acceso abierto al conocimiento de la UPC',
      link: 'http://hdl.handle.net/2099/15497',
    },
    {
      referencia:
        'Beck, K., & Andres, C. (2004b). Extreme Programming Explained: Embrace Change, 2nd Edition (<i>The XP Series</i>) (2nd ed.). Addison-Wesley.',
    },
    {
      referencia:
        'Jeffries, R. (2011). What is Extreme Programming? Ronjeffries.Com.',
      link: 'https://ronjeffries.com/xprog/what-is-extreme-programming/',
    },
    {
      referencia:
        'Kruchten, P. (2003). The Rational Unified Process: An Introduction (3rd Edition) (3rd ed.). Addison-Wesley Professional',
    },
    {
      referencia:
        'Maida, EG, Pacienzia, J. (2015). Metodologías de desarrollo de software [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería “Fray Rogelio Bacon”. Universidad Católica Argentina, 2015.',
      link: ' https://bit.ly/3hJMwXP',
    },
    {
      referencia:
        'Manifiesto por el Desarrollo Ágil de Software. (2001). Agilemanifesto.Org.',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Martin, J. (1991). <i>Rapid Application Development</i>. Macmillan Coll Div.',
    },
    {
      referencia:
        '<i>Royce, W.W. (1970) Managing the Development of Large Software Systems. Proceedings of IEEE WESCON, 26, 328-388.</i>',
    },
    {
      referencia:
        'SCRUMstudy. (2013). A Guide to the Scrum Body of Knowledge (SBOK Guide) (2013th ed.). VMEdu Inc.',
    },
    {
      referencia:
        'Sommerville, I., Galipienso, M. I. A., & Martinez, A. B. (2005). Ingeniería del Software. Pearson Educación.',
    },
  ],
  glosario: [
    {
      termino: 'Automatización de pruebas',
      significado:
        'Es la práctica que permite controlar la ejecución de un producto software de manera automática.',
    },
    {
      termino: 'Aplicación',
      significado:
        'Una aplicación es un programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'ATDD',
      significado:
        'Desarrollo Orientado a pruebas de Aceptación (<i>Acceptance Test–Driven Development</i>) es una metodología de desarrollo basada en la comunicación entre los clientes comerciales, los desarrolladores y los evaluadores.',
    },
    {
      termino: 'BDD',
      significado:
        '<i>Behaviour Driven Development </i> es una estrategia de desarrollo dirigido por comportamiento, se define en un idioma común entre todos los <i>stakeholders</i>, lo que mejora la comunicación entre equipos tecnológicos y no técnicos..',
    },
    {
      termino: 'Incidencia',
      significado:
        'suceso que se produce durante una actividad y puede causar, una disminución de calidad de este.',
    },
    {
      termino: 'Integración continua',
      significado:
        'es una práctica de desarrollo de software por medio de la cual los desarrolladores combinan los cambios en el código en un repositorio.',
    },
    {
      termino: 'QA',
      significado:
        'Calidad de software (<i>Quality Software</i>) trata los conceptos, los métodos, las técnicas, los procedimientos y los estándares necesarios para producir productos y procesos software de alta calidad.',
    },
    {
      termino: 'TDD',
      significado:
        'Desarrollo Guiado por Pruebas (<i>Test Driven Development</i>), con el TDD se puede agilizar el proceso de creación de código. Este se centra más por el qué y el por qué antes del cómo.',
    },
    {
      termino: 'UX',
      significado:
        'Experiencia de usuario (<i>User Experience</i>) es el conjunto de factores y elementos relativos a la interacción del usuario con un entorno o dispositivo concretos, dando como resultado una percepción positiva o negativa de dicho servicio, producto o dispositivo',
    },
  ],
  complementario: [
    {
      texto:
        'SENA, E. d. (24 de 08 de 2021). Tipos de pruebas de software. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Uf1Kk52ONYc ',
    },
    {
      texto: 'IBM (2021). Pruebas Funcionales. <i>Rational Test Workbench</i>.',
      tipo: 'Documento',
      link:
        'https://www.ibm.com/docs/es/rtw/9.1.0?topic=SSBLQQ_9.1.0/com.ibm.rational.test.ft.doc/topics/Getting_Started_With_Ivory.html',
    },
    {
      texto: 'IBM (2021). Pruebas de rendimiento. Rational Test Workbench.',
      tipo: 'Documento',
      link:
        'https://www.ibm.com/docs/es/rtw/9.0.0?topic=phases-performance-testing',
    },
    {
      texto:
        'QA, H.-O. (04 de 09 de 2020). Cuadrantes de prueba. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gz7A7EMZT_4',
    },
    {
      texto:
        'Zapata, M. (07 de 06 de 2020). Pruebas unitarias y Test-Driven Development. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YuRdaR6wwWU ',
    },
    {
      texto:
        'SIlva, F. (2015, 27 mayo). Cómo mejorar la usabilidad de tu diseño web. Blog IDA Chile | Estrategia para el éxito de tu negocio',
      tipo: 'Blog',
      link: 'https://blog.ida.cl/diseno/como-mejorar-usabilidad-diseno-web/ ',
    },
    {
      texto:
        'Zamora, A., Benitez, J., & M. M. (25 de 06 de 2020). Test de usabilidad: identificando mejoras con nuestros usuarios. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EeRtQUljvOM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ervin Andrade',
        cargo: 'Experto temático',
        centro: 'Centro CTPI - Regional Cauca',
      },
      {
        nombre: 'Peter Pinchao',
        cargo: 'Experto temático',
        centro: 'Centro CTPI - Regional Cauca',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
