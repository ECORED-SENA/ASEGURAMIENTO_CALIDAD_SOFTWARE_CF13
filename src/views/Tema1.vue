<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Realización de pruebas de <i>software</i>
 
    .col-lg-12.mb-3
      img(src="@/assets/curso/images/tema1/img_1.png", alt= "")

    p.mb-3 En este punto para realizar las pruebas de <i>software</i> se debe establecer qué tipos de pruebas serán requeridas por el producto, puesto que para probar un producto no se requiere utilizar todos los tipos de prueba que existen sino más bien los que sean necesarios para cada caso, por esta razón, es importante que el QA o líder de pruebas determine qué tipos de prueba se adaptan al proyecto en evaluación. En el plan de pruebas se deben listar los tipos de pruebas a realizar, por lo que a continuación se especifican y describen los tipos de pruebas que se pueden utilizar.

    Separador 
   
    #t_1_1.titulo-segundo
      h2 1.1  Tipos de pruebas
    
    .row.align-items-end.justify-content-center.mb-5.fondo-7
      .col-lg-8.ofVisible
        p.mb-5.small.text Las pruebas de <i>software</i> se pueden clasificar en dos tipos principales: pruebas funcionales y pruebas no funcionales. Teniendo en cuenta los diferentes frentes y aspectos de un producto <i>software</i>, con lo cual se requerirán diferentes tipos de pruebas, tales como: pruebas unitarias, pruebas de integración, pruebas de estrés, pruebas de rendimiento, pruebas de escalabilidad, entre otras. Cada uno de estos tipos de pruebas de <i>software</i> determinan la visibilidad de la aplicación, desde el código fuente hasta la interacción y experiencia con el usuario. Entrando en detalles, a continuación se invita a observar el siguiente video donde podrá identificar los tipos de pruebas de <i>software</i>.
      .col-lg-4.lg-0
        figure
          img(src='@/assets/curso/images/tema1/img_2.svg' alt='' style="width:300px; display:block; margin:4rem 0;")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .jumbotron-1.p-3
          p.text-center.mb-0 Algunos de los tipos de pruebas más comunes se describen en los siguientes puntos.

    h3 Pruebas funcionales

    p.mb-3 Se llevan a cabo para verificar las características esenciales para el negocio, la funcionalidad y la usabilidad. Estas garantizan que las características y funciones del <i>software</i> operan y se comportan según lo esperado sin problemas. Valida toda la aplicación respecto a las especificaciones definidas en el documento de requisitos de <i>software</i> (SRS). En estas pruebas se incluyen las pruebas unitarias, pruebas de regresión, pruebas de interfaz, entre otras. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 1 
          span Tipos de pruebas funcionales  
        img(src="@/assets/curso/images/tema1/img_3.svg", alt="")
      .col-lg-4.mb-5.mb-lg-0.mt-5
        .cajon.color-custom-1.p-4
          p.mb-3 IBM (2021) plantea que estas pruebas se basan en la ejecución y revisión de las funciones y en su interoperabilidad con sistemas específicos, se llevan a cabo en todos los niveles de prueba, buscan evaluar cada una de las opciones con las que cuenta el paquete informático, principalmente en el comportamiento externo del producto o aplicativo, también se las identifica como de tipo caja negra.
    
    h3.mb-3 Pruebas unitarias 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3  Estas pruebas se enfocan en validar elementos como componentes/unidades/piezas de forma individual e independiente de un producto <i>software</i> dado el principio SDLC. Cualquier bloque de código sea procedimiento, función, método, constructor, clase o módulo, puede ser una unidad y deberá ser considerado y sometido a pruebas unitarias, con lo cual se podrá determinar su comportamiento y validarlo versus el resultado esperado. Estas pruebas deben ser las primeras que se lleven a cabo en la fase de desarrollo y las deberán implementar los desarrolladores.
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 De acuerdo a Mera (2016) también se las conoce como unit testing son pequeños tests en los cuales se revisa que el comportamiento de un objeto y su lógica funcione adecuadamente.
      .col-lg-4.mb-5.mb-lg-0
        img(src="@/assets/curso/images/tema1/img_4.svg", alt="")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .jumbotron-2.p-2.mb-2
            i.lista-ul__vineta
              | Son rápidas de realizar, por lo que se pueden realizar en gran cantidad
        .jumbotron-3.p-2.mb-2
            i.lista-ul__vineta
              | Sirven como documentación de apoyo para el proyecto.
        .jumbotron-2.p-2.mb-2
            i.lista-ul__vineta
              | Demuestran que la lógica del código funciona en todos los casos. 
        .jumbotron-3.p-2.mb-2
            i.lista-ul__vineta 
              | Permite a los programadores a entender bien el código base, lo que permite realizar cambios oportunos.
        .jumbotron-2.p-2.mb-2
            i.lista-ul__vineta
              | Se obtendrá un código de calidad.

    p.mb-5 En algunos casos las pruebas pueden hacerse de manera manual pero lo mejor es usar herramientas que permitan ejecutar el servicio de la mejor manera posible, hay muchas herramientas en el mercado y estas varían en función del lenguaje de programación que se esté utilizando, aquí se mencionan algunas de las más conocidas.
    
    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-2.mb-4.mb-xl-0.tarjeta.fblue-1.boxShadow.p-4.m-2
        .p-4
          figure
            img(src='@/assets/curso/images/tema1/avatar_1.svg', alt='imagen relacionada').mb-1.mx-auto
          p.text-center Es una herramienta de pruebas unitarias para el framework .NET
        .row
          .col-auto
            a.boton.color-primario.indicador__container(@click="modal1 = true")
              span XUnit
              .indicador--click(v-if="mostrarIndicador")
          .col
            p 
              a.lnk(@click="modal1 = true") 
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 XUnit
              p Es una herramienta de pruebas unitarias para el framework .NET
        
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/unit.jpg', alt='Texto que describa la imagen')
                figcaption XUnit
      .col-sm-6.col-lg-2.mb-4.mb-xl-0.tarjeta.fblue-3.boxShadow.p-4.m-2
        .p-4
          figure
            img(src='@/assets/curso/images/tema1/avatar_2.svg', alt='imagen relacionada').mb-4.mx-auto
          p.text-center  Es una herramienta de pruebas de aplicaciones Java.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
              span Junit
              .indicador--click(v-if="mostrarIndicador")
          .col
            p 
              a.lnk(@click="modal2 = true") 
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Junit
              p  Es una herramienta de pruebas de aplicaciones Java.
        
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/junit.jpg', alt='Texto que describa la imagen')
                figcaption Junit
      .col-sm-6.col-lg-2.mb-4.mb-xl-0.tarjeta.fblue-2.boxShadow.p-4.m-2
        .p-4
          figure
            img(src='@/assets/curso/images/tema1/avatar_3.svg', alt='imagen relacionada').mb-4.mx-auto
          p.text-center Es una herramienta de pruebas de plataformas .NET
        .row.justify-content-center
          .col-auto
            a.boton.color-primario.indicador__container(@click="modal3 = true")
              span Nunit
              .indicador--click(v-if="mostrarIndicador")
          .col
            p 
              a.lnk(@click="modal3 = true") 
        ModalA(:abrir-modal.sync="modal3")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Nunit
              p Es una herramienta de pruebas de plataformas .NET
        
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/nunit.jpg', alt='Texto que describa la imagen')
                figcaption Nunit
      .col-sm-6.col-lg-2.mb-4.mb-xl-0.tarjeta.fblue-4.boxShadow.p-4.m-2
        .p-4
          figure
            img(src='@/assets/curso/images/tema1/avatar_4.svg', alt='imagen relacionada').mb-4.mx-auto
          p.text-center Es una herramienta de pruebas de programación PHP
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
              span PhpUnit
              .indicador--click(v-if="mostrarIndicador")
          .col
            p 
              a.lnk(@click="modal4 = true") 
        ModalA(:abrir-modal.sync="modal4")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 PhpUnit
              p Es una herramienta de pruebas de programación PHP.
        
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema1/phpunit.jpg', alt='Texto que describa la imagen')
                figcaption PhpUnit


    p.mb-5.text-center Para realizar las pruebas unitarias debemos tener en cuenta los siguientes criterios. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.verticalLine
      .bloque-texto-g__img.m-left(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_5.png')})`}"
    )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          i.lista-ul__vineta 
            p Se debe probar un sólo código a la vez #[BR]
          i.lista-ul__vineta 
            p Hay que realizar pruebas frecuentemente mientras se programa #[BR]
          i.lista-ul__vineta 
            p Se debe corregir los bugs identificados en las pruebas antes de continuar #[BR]
          i.lista-ul__vineta 
            p Cualquier cambio que se realice también debe pasar el test #[BR] #[BR]

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-5.mb-lg-0
        h3 Pruebas de integración
        p.mb-3 Estas pruebas se enfocan en validar diferentes módulos o componentes de un producto <i>software</i> de tal manera que se valide como un grupo funcional. Una aplicación de <i>software</i>, un sistema de información o una aplicación <i>web</i>, entre otros productos <i>software</i>  están compuestos por diferentes componentes, módulos y submódulos distribuidos en diferentes niveles y capas, que trabajan juntos y se orquestan en diferentes funcionalidades. La finalidad de estas pruebas es validar que la integración entre estos componentes sea correcta y encontrar posibles problemas o errores relacionados con la sinergia y comunicación entre ellos.
      .col-lg-5.mb-5.mb-lg-0 
        img.my-3(src="@/assets/curso/images/tema1/img_6.svg", alt="")

    .row.align-items-center.mb-4 
      .col-lg-12.tarjeta.ofvisible(style='background-color:#1565c0;')
        .col-auto.ms-5
          img(src='@/assets/curso/images/tema1/comilla1.svg' alt='"' style='width:73px;margin-top:-10px;')
        .col-11.mx-auto.p-5
          p.text-white Las pruebas de integración se encargan de probar las interfaces entre los componentes o módulos; por ejemplo, el componente validación de usuario con el sistema operativo, el sistema de archivos en integración con el hardware
          h6.text-right.fRight.mb-5 <span class='text-white'>(Mera  (2016) ).</span> <i class='fas fa-square cac'></i>

    p.mb-5.text-center  De acuerdo a esto, se debe tener en cuenta los objetos típicos de prueba:

    .jumbotron-4.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.mb-5.mb-lg-0
          .jumbotron-5.p-3.mb-3
            ul.lista-ul--color
              li  
                i.lista-ul__vineta
                | Bases de datos de subsistemas
          .jumbotron-5.p-3.mb-3
            ul.lista-ul--color
              li  
                i.lista-ul__vineta
                | Datos de configuración
          .jumbotron-5.p-3.mb-3
            ul.lista-ul--color
              li  
                i.lista-ul__vineta
                | Configuración del sistema
          .jumbotron-5.p-3.mb-3
            ul.lista-ul--color
              li  
                i.lista-ul__vineta
                | Infraestructura
          .jumbotron-5.p-3.mb-3
            ul.lista-ul--color
              li  
                i.lista-ul__vineta
                | Interfaces 
        .col-lg-5.mb-5.mb-lg-0 
          img.my-3(src="@/assets/curso/images/tema1/img_7.svg", alt="")
    
    h3.mb-3 Pruebas no funcionales

    p.mb-5 Estas pruebas son como las pruebas funcionales, con la diferencia que se prueban bajo carga de rendimiento para poder establecer la fiabilidad, usabilidad, escalabilidad, instalación, confiabilidad y seguridad. Estas pruebas generalmente se ejecutan por medio de herramientas o soluciones automatizadas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
        .col-lg-12.tarjeta.ofvisible(style='background-color:#1565c0;')
          .col-auto.ms-5
            img(src='@/assets/curso/images/tema1/comilla1.svg' alt='"' style='width:73px;margin-top:-10px;')
          .col-11.mx-auto.p-5
            p.text-white En este tipo de pruebas se comprueban los requisitos basados en la operación de un <i>software</i>. Para verificar la carga que resiste el producto <i>software</i>, identificando si su rendimiento es el adecuado o si es estable a nivel de contacto con el servidor. 
            h6.text-right.fRight.mb-5 <span class='text-white'>(Mera  (2016) ).</span> <i class='fas fa-square cac'></i>
      .col-lg-4.mb-5.mb-lg-0 
        img.my-3(src="@/assets/curso/images/tema1/img_8.svg", alt="")

    p.mb-5 Hay algunos aspectos que pueden ser complejos, como el rendimiento de una aplicación, sin embargo, esta prueba permite comprobar la calidad del <i>software</i> que se va a probar. La calidad depende principalmente del tiempo, la precisión, la estabilidad, la corrección y la durabilidad de un producto en diversas circunstancias adversas. Con base en estos aspectos de calidad podemos estudiar diferentes tipos de pruebas no funcionales:

    .col-lg-10.mx-auto.mb-5
      LineaTiempoD.color-secundario.especial
        .p-4(titulo='Pruebas de carga (Load test)' numero='1')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de carga (Load test)
              p Simulan la demanda esperada que puede tener una aplicación y mide el resultado.
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_9.svg' alt='')
        .p-4(titulo='Pruebas de rendimiento (Performance test)' numero='2')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de rendimiento
              p Se calcula la respuesta del programa con diferentes medidas de peticiones del usuario.
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_10.svg' alt='')

        .p-4(titulo='Pruebas de estrés (<i>Stress test</i>)' numero='3')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de estrés (<i>Stress test</i>)
              p Nos permite saber cuántos usuarios o peticiones puede soportar el programa, con esta prueba se determina si el sistema es estable. 
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_11.svg' alt='')
         
        .p-4(titulo='Pruebas de volumen (volume test)' numero='4')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de volumen
              p Consiste en probar el funcionamiento del programa con ciertos volúmenes de datos.
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_12.svg' alt='')

        .p-4(titulo='Pruebas de usabilidad (usability test)' numero='5')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de usabilidad
              p Se centran en validar que tan fácil se utiliza el programa en cuanto a facilidad de aprendizaje, eficiencia, memorización, errores y satisfacción.
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_13.svg' alt='')

        .p-4(titulo='Pruebas robustez (test for robustness)' numero='5')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de robustez
              p Son las encargadas de verificar la capacidad del programa para soportar entradas o instrucciones incorrectas. Una de sus características principales es implementar mecanismos de <i>software</i> de detección de errores en el hardware.
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_14.svg' alt='')

    h3.mb-3 Pruebas de rendimiento

    p.mb-3 Son un tipo de pruebas no funcionales, las cuales se realizan con la finalidad de determinar la estabilidad, escalabilidad y velocidad de una funcionalidad en el producto <i>software</i>. El objetivo de este tipo de pruebas es verificar el comportamiento de la aplicación teniendo en cuenta diferentes puntos de referencia del sistema y de la red, tales como la CPU, la velocidad de renderizado o carga de la página, el control de tráfico, la concurrencia, consumo de recursos de servidor, entre otros. En esta categoría podemos encontrar las pruebas de carga y de esfuerzo. 


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
        .col-lg-12.tarjeta.ofvisible(style='background-color:#1565c0;')
          .col-auto.ms-5
            img(src='@/assets/curso/images/tema1/comilla1.svg' alt='"' style='width:73px;margin-top:-10px;')
          .col-11.mx-auto.p-5
            p.text-white Estas pruebas sirven para evaluar lo rápido que el programa realiza una tarea en condiciones específicas de trabajo, también evalúa la escalabilidad, fiabilidad y uso de los recursos.
            h6.text-right.fRight.mb-5 <span class='text-white'>IBM (2021).</span> <i class='fas fa-square cac'></i>
      .col-lg-4.mb-5.mb-lg-0 
        img.my-3(src="@/assets/curso/images/tema1/img_15.svg", alt="")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5.mb-lg-0
        .jumbotron-6.p-3
          p.text-center.mb-3 El mismo autor expresa que los objetivos de estas pruebas son:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5.mb-lg-0
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_1.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Identificar y localizar problemas de rendimiento. Es permitir encontrar un fallo en el rendimiento, y también ayudar a localizar en que parte está ese problema para poder solucionarlo.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_2.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Verificar el cumplimiento de los SLA (Acuerdos de Nivel de Servicio). Se utiliza para medir los tiempos de respuesta del <i>software</i> en condiciones y tiempos específicos.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Localizar cuellos de botella. Ayudar a detallar en qué lugar se generan estos cuellos de botellas si se debe a problemas de hardware como CPU, memoria, o es el ancho de banda.
          hr

    h3.mb-3 Ventajas y desventajas de los tipos de pruebas

    p.mb-3 Aplicar los tipos de pruebas puede asegurar que el <i>software</i> funcione como se espera en todo momento y garantizar su calidad, por lo tanto, es necesario para su aplicación, identificar sus ventajas y desventajas para determinar las diferencias entre cada tipo; se puede observar en el siguiente recurso las ventajas de estos tipos de pruebas.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="Tipo 1. Pruebas de rendimiento")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-10
            p.mb-3 Entre los aspectos denominados negativos en la experiencia con páginas <i>web</i>, están:

              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Evalúa la velocidad y escalabilidad de la aplicación. 
                li 
                  i.fas.fa-angle-right
                  | Determina los cuellos de botella para las mejoras de rendimiento.
                li 
                  i.fas.fa-angle-right
                  | Detecta errores que se pasan por alto en las pruebas funcionales..
                li 
                  i.fas.fa-angle-right
                  | Mejoras de características y optimización del sistema.
                li 
                  i.fas.fa-angle-right
                  | Garantiza la fiabilidad de la aplicación <i>web</i> bajo una gran carga.
        .row.align-items-center.justify-content-center
          .col-lg-8
            figure  
              img(src='@/assets/curso/images/tema1/img_17.svg' alt="")

      div(titulo="Tipo 2. Pruebas funcionales")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-6
            ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Se asegura que la aplicación esté libre de defectos.
                li 
                  i.fas.fa-angle-right
                  | Garantiza el comportamiento requerido de las funcionalidades.
                li 
                  i.fas.fa-angle-right
                  | Verifica que la arquitectura sea la correcta con la seguridad requerida.
                li 
                  i.fas.fa-angle-right
                  | Mejora las funcionalidades generales y la calidad.

          .col-lg-6
            figure  
              img(src='@/assets/curso/images/tema1/img_16.svg' alt="", style="width:300px; display:block; margin:auto 0;")
      
      div(titulo="Tipo 3. Pruebas de integración")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-6
            ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Asegura que en la aplicación todos los módulos se encuentren bien integrados y funcionen juntos según lo requerido.
                li 
                  i.fas.fa-angle-right
                  | Detecta conflictos y problemas interconectados para solucionarlos antes de crear un problema más grande. 
                li 
                  i.fas.fa-angle-right
                  | Verifica la fiabilidad, estabilidad y funcionalidad entre módulos diferentes.
          .col-lg-6        
            figure  
              img(src='@/assets/curso/images/tema1/img_18.svg' alt="", style="width:300px; display:block; margin:auto 0;")
      
      div(titulo="Tipo 4. Pruebas unitarias")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-6
            ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Detecta errores en las nuevas funcionalidades desarrolladas de manera temprana.
                li 
                  i.fas.fa-angle-right
                  | Detecta problemas desde el inicio, esto permite reducir los costos de las pruebas.
                li 
                  i.fas.fa-angle-right
                  | Con una mejor refactorización del código mejora la calidad del código.
                  | Permite una buena documentación y simplifica la integración.
          .col-lg-6        
            figure  
              img(src='@/assets/curso/images/tema1/img_19.svg' alt="", style="width:300px; display:block; margin:auto 0;")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-5.mb-lg-0
        h3 Desventajas de los tipos de pruebas
        p.mb-3 Todos los tipos de pruebas mejoran la experiencia del usuario, las funcionalidades y garantizan la calidad, es decir, no hay desventajas sino más bien ventajas, por lo tanto, lo que sí se podría establecer como desventaja sería el tiempo y el costo relacionado con la prueba de <i>software</i>. Realizar pruebas requiere de recursos y esfuerzos, y se puede dar un riesgo asociado con resultados inexactos. No obstante, el no realizar pruebas a las aplicaciones podría traer problemas al producto.
      .col-lg-5.mb-5.mb-lg-0 
        img.my-3(src="@/assets/curso/images/tema1/img_20.svg", alt="")

    h3.mb-3 Documentos de caso de pruebas
    
    p.mb-3 Los productos que resultan del proceso de desarrollo de <i>software</i> son identificados como artefactos, por ejemplo, el código fuente, defectos, plan, casos y script de pruebas.
    p.mb-5 El aseguramiento de la calidad de <i>software</i> se compone de artefactos específicos que se forman en las diversas etapas del proceso de SQA, como se muestra en la siguiente infografía. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
        .jumbotron-7.p-2
          p.text-white.text-center <b>Artefactos de prueba en las etapas del proceso de SQA</b>
        img.my-3(src="@/assets/curso/images/tema1/img_21.svg", alt="")
    
    .jumbotron-8.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-6.mb-5.mb-lg-0
            img.my-3(src="@/assets/curso/images/tema1/img_22.svg", alt="")
        p.mb-3  En el diseño de las pruebas de <i>software</i> se deben identificar y describir casos de prueba, por lo tanto para documentar un caso de pruebas se debe comprender que este contiene un conjunto de variables o condiciones en la cual un tester determina si un sistema funciona según lo esperado, así mismo cabe resaltar que la documentación de un caso de prueba se convierte en una actividad sin dificultad, si tenemos la información necesaria para su proceso de elaboración, teniendo en cuenta que al momento de probar un <i>software</i> es de gran aporte, puesto que se transforma en una herramienta esencial en el proceso de registro, seguimiento y control.

    p.text-center A continuación, se nombran los elementos principales que debe contener un caso de prueba.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1 
          span <i>Elementos de un caso de prueba</i>

        .tabla-b.color-secundario.table.mb-5
          .tabla-b__header
            h5.mb-0 Caso de prueba
          table
            tr
              td Identificador
              td Puede ser alfanumérico o numérico
            tr
              td Nombre
              td Nombre del caso de prueba de manera concisa 
            tr
              td Descripción 
              td Objetivo del caso de prueba, también describe que probará, en ciertas ocasiones se incluye el ambiente de pruebas.
            tr
              td Número de orden de ejecución 
              td Orden en la cual se ejecuta el caso de prueba, en la situación de que se tengan múltiples casos de prueba.
            tr
              td Requerimiento asociado
              td Si se plantea un caso de prueba se debe saber a qué requerimiento va asociado para mantener la trazabilidad
            tr
              td Precondición
              td Estado en la cual se debe encontrar el sistema antes de comenzar la pruebe
            tr
              td Postcondición
              td El estado en que debe encontrarse el sistema luego de ejecutar la prueba
            tr
              td Resultado esperado
              td Objetivo que debe ser alcanzado posterior a ejecutarse la prueba.
      
      p.mb-5 Identificar, describir y documentar casos de pruebas facilita el trabajo cuando se requiere evaluar y comparar las modificaciones a los requerimientos que inicialmente ha definido el cliente a lo largo del tiempo, este seguimiento permite comprobar que los resultados obtenidos están acordes con lo requerido o solicitado, logrando así la satisfacción del cliente, lo que los define como un aliado principal al momento de garantizar la calidad del <i>software</i>.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-5.mb-lg-0
        h3 Ejecución de las pruebas
        p.mb-3 La ejecución de pruebas inicia creando los datos de prueba requeridos para ejecutar los casos de prueba establecidos. La ejecución de los casos de prueba se puede realizar de forma automatizada o manual, en cualquiera de las dos formas se debe registrar y documentar los fallos detectados en el sistema y su posterior corrección. En la Figura 2, se puede observar el flujo de las actividades en relación a la ejecución de pruebas. 
      .col-lg-7.mb-5.mb-lg-0 
        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 2 
              span <i>Elementos de un caso de prueba</i>
        img.my-3(src="@/assets/curso/images/tema1/img_23.svg", alt="")

    p.mb-5 El diagrama de actividades anterior expresa el flujo que se debe tener en cuenta al momento de ejecutar las pruebas de <i>software</i>, es por eso que a continuación se describen cada una de las actividades.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5.mb-lg-0.fondo
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_1.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Planificar calendario detallado de ejecución:</b> definir el calendario que especifique la ejecución de los casos de prueba, teniendo en cuenta el plan y los casos de prueba.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_2.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Verificar el entorno de pruebas:</b> verificar que el ambiente de pruebas tenga un funcionamiento correcto.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Integrar los datos de pruebas:</b> realizar una recolección de los datos de prueba a utilizar en la ejecución de pruebas.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_4.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Evaluar criterios de entrada:</b> analizar los criterios de entrada contenidos en el plan de pruebas, de tal forma que se pueda verificar la ejecución de las pruebas.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_5.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Ejecutar las pruebas:</b> se incluyen las siguientes actividades: #[BR]
              
                  i.lista-ul__vineta
                    | Ejecutar casos y script de prueba. #[BR]
                  i.lista-ul__vineta
                    | Analizar y registrar los resultados.
          hr

    Separador

    #t_1_1.titulo-segundo
      h2 1.2 Agile testing
    
    p.mb-5 Las metodologías ágiles proveen un conjunto de pautas y principios que buscan facilitar y priorizar la entrega de producto sobre procesos de documentación exhaustiva, haciéndolos más simples, donde interactúa el cliente final desde las primeras etapas del proyecto, lo cual es de resaltar que una metodología ágil tiene iteraciones o sprints, cada sprint tiene una duración que no es muy extensa, aproximadamente dos a cuatro semanas y así mismo, cuando se finaliza la iteración, es en este momento donde ya existen funcionalidades del <i>software</i> que pueden ser utilizadas por el cliente.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-5.mb-lg-0
        p.mb-3 Habiendo recordado las metodologías ágiles, se puede especificar que las pruebas ágiles <i>(Agile testing)</i>es una práctica que se realiza en cada iteración, por lo tanto existen dos tipos de planificaciones reléase/entrega que hace referencia a las entregas frecuentes al cliente, es decir, poner en producción nuevas versiones del producto y sprint/iteración que hace referencia a que un proyecto se ejecuta en bloques temporales cortos y fijos, no obstante, estas se pueden dar en un mismo momento, es decir, que puede incluir una sola planificación con actividades tanto del release como del sprint, tal como se muestra en la figura 3.
      .col-lg-7.mb-5.mb-lg-0 
        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 3
              span <i>Actividades sprints release </i>
        img.my-3(src="@/assets/curso/images/tema1/img_24.svg", alt="")

    p.mb-3 Por otro lado, también se debe tener en cuenta que la metodología de desarrollo de <i>software</i> tradicional en cascada utiliza diferentes tipos de pruebas de <i>software</i> que probaran tanto requerimientos funcionales como no funcionales de manera secuencial. No obstante, en metodologías ágiles, específicamente en las pruebas ágiles, también se consideran varios tipos de pruebas, pero teniendo en cuenta que se utilizan sprints o interacciones cortas e interacciones continúas entre los equipos de desarrollo, diseño y pruebas. 

    p.mb-5 Las pruebas ágiles contienen principios que se aplican al desarrollo ágil de <i>software</i>, así mismo existen ciertos cuadrantes que se pueden tener en cuenta al momento de planificarlas, lo cual a continuación se describen tanto los principios como los cuadrantes: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5.mb-lg-0
        h3.mb-3 Principios de las pruebas ágiles (<i>Agile testing</i>)

        p.mb-5 El <i>Agile testing</i> contiene los siguientes principios que son aplicados a un buen desarrollo de <i>software</i>:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.fondo(titulo="Integración continua")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Integración continua
            p Los equipos de diseño y desarrollo ejecutan pruebas continuamente, puesto que es una forma de asegurar el avance continuo del producto.
          .col-lg-5
            figure
              img.mx-5(src='@/assets/curso/images/tema1/img_25.png' alt='')
      .py-3.py-md-4.fondo(titulo='Entrega continua')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Entrega continua
            p Se soporta en la integración continua, en este punto los desarrolladores realizan un control y la cantidad de veces que se realiza la entrega continua.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema1/img_26.png' alt='')
      .py-3.py-md-4.fondo(titulo='Elaborar menos documentación')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Elaborar menos documentación 
            p Los participantes de los equipos en metodologías ágiles pueden crear listas y tomar notas para centrarse en probar el <i>software</i>, lo que permite no enfocarse en detalles secundarios que tomarían mucho tiempo. 
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema1/img_27.png' alt='')
      .py-3.py-md-4.fondo(titulo='Responder con velocidad a la retroalimentación ')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h3 Responder con velocidad a la retroalimentación 
            p Los involucrados en el negocio del producto están estrechamente conectados con las interacciones del producto, además el tiempo de respuesta se reduce debido a la realimentación continua en cada parte de la interacción.
          .col-lg-5
              figure
                img.mx-5(src='@/assets/curso/images/tema1/img_28.png' alt='')
      .py-3.py-md-4.fondo(titulo='Proporcionar retroalimentación constante')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h3 Proporcionar retroalimentación constante
            p En las pruebas ágiles, la retroalimentación es continua de modo que el diseño del producto logre los propósitos del negocio requeridos.
          .col-lg-5
              figure
                img.mx-5(src='@/assets/curso/images/tema1/img_29.png' alt='')
              
    h3.mb-3 Cuadrantes de las pruebas ágiles (<i>Agile testing</i>)
    p.mb-3 Para planificar las pruebas ágiles nos podemos basar en los cuadrantes del <i>agile testing</i>, que nos aporta una biblioteca de tipos de pruebas que se pueden usar para cumplir con los requerimientos.
    p.mb-5 Los cuatro cuadrantes son una clasificación que contribuye al momento de planificar las pruebas ágiles, asegurando que se tengan en cuenta los métodos y recursos para alcanzar productos de <i>software</i> de calidad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
        .jumbotron-9.mb-3.p-3
          .row.align-items-center.justify-content-center
            .col-lg-8
              p.mb-3 Si es de su interés conocer más sobre los cuadrantes de pruebas ágiles, se le invita a consultar el videotutorial en el  material complementario, al cual puede acceder en el siguiente enlace. 
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=gz7A7E" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Cuadrantes de prueba, Hands-on QA, VA-25.Curso de Interacción Persona-Ordenador
      .col-lg-4.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/images/tema1/img_30.svg", alt="")

    .row.align-items-center.mb-5
      .col-lg-6.mb-lg-0.p-4.fondo-2.mt-5
          p Las pruebas de los cuadrantes se enfocan en apoyar al equipo de desarrollo a través del desarrollo del producto, puesto que orientan el desarrollo de la funcionalidad, posteriormente contribuyen a la introducción de nuevo código y la refactorización sin que genere resultados imprevistos en el comportamiento del sistema. En la Figura 4, se puede observar los cuadrantes de las pruebas ágiles, teniendo como ejes ‘las pruebas de apoyo al equipo’ y las tecnologías que facilitan el proceso. 
      .col-lg-6.mb-lg-0.p-3
        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 4
              span <i>Cuadrantes pruebas ágiles</i>
          img(src="@/assets/curso/images/tema1/img_25_1.svg" alt="", style="width:450px; display:block; margin: 0 3rem;")

    p.text-center.mb-5 A continuación, se realizará una exploración de los diferentes cuadrantes expuestos:

    SlyderA.fondo-3.mb-3
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 Pruebas de cara al negocio (Business Facing) 
          p Son pruebas del Q2 y Q3, pruebas funcionales y pruebas UAT, se enfoca en realizar pruebas manuales y criticando al producto con las pruebas de aceptación.
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_31.svg" alt="", style="width:300px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 Pruebas de cara a la tecnología (Technology Facing)
          p Pueden ser automatizadas y utilizando herramientas, incluye el Q1 y Q4.
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_32.svg" alt="", style="width:300px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 Pruebas soportando la programación o soporte del equipo (Supporting the Team)
          p Comprenden pruebas automatizadas y manuales del cuadrante Q2 y Q1 donde se realizan pruebas unitarias y de componentes y pruebas funcionales con prototipos y simuladores.
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_33.svg" alt="", style="width:200px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 Pruebas de críticas al producto (Critique the Product) 
          p Estas pruebas pueden tener un carácter positivo, puesto que a partir de ellas se pueden sugerir o realizar mejoras. Cuando se ejecutan estas pruebas, la idea es simular lo más que se pueda un ambiente real en el cual serán ejecutadas, así mismo estas pruebas frecuentemente son realizadas por los usuarios finales como pruebas de aceptación (UAT).
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_35.svg" alt="", style="width:200px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 El primer cuadrante (Q1) contiene los siguientes tipos de pruebas:
          p ●  Pruebas unitarias.
          p ●  Pruebas de componente.
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_36.svg" alt="", style="width:200px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 El Segundo cuadrante (Q2) definen las funcionalidades que el cliente solicita:
          p ●   Pruebas funcionales.
          p ●   Pruebas de historias.
          p ●   Pruebas de prototipos y simulaciones.
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_37.svg" alt="", style="width:200px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 El tercer cuadrante (Q3) contiene los siguientes tipos de pruebas:
          p ●   Pruebas exploratorias.
          p ●   Pruebas de usabilidad.
          p ●   Pruebas de escenarios.
          p ●   Pruebas de aceptación de usuario
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_38.svg" alt="", style="width:200px; display:block; margin:0 auto;")
      .row.align-items-center.justify-content-center
        .col-lg-5
          h3 El cuarto cuadrante (Q4) contiene pruebas técnicas
          p Relacionadas con los requerimientos no funcionales, por lo que validan el cumplimiento de estos, analizando la seguridad, el desempeño y la robustez. 
          p ●   Pruebas de rendimiento y de estrés.
          p ●   Pruebas de seguridad.
          p ●   Pruebas de robustez. 
        .col-lg-4
          figure
            img(src="@/assets/curso/images/tema1/img_39.svg" alt="", style="width:200px; display:block; margin:0 auto;")
        
    p.mb-5 A continuación, se describen algunas recomendaciones para tener en cuenta al momento de trabajar con pruebas de <i>software</i> ágiles (<i>Agile testing</i>).

    TabsA.color-primario.mb-5
    
      .tarjeta.back-tab.p-4(titulo="Realizar las pruebas en el proyecto al inicio, en cada sprint y constantemente")
        
        .row 
          .col-lg-8.mb-4
            h4 Realizar las pruebas en el proyecto al inicio, en cada sprint y constantemente
            p.mb-3  ● Integrar pruebas unitarias, funcionales y de carga en la planificación desde el principio.
            p ● Identificar y rectificar problemas de forma temprana, antes que se conviertan en problemas complejos que puedan influir el proyecto.
          .col-lg-4.mb-4
              figure
                img(src='@/assets/curso/images/tema1/img_40.svg')
             
      .tarjeta.back-tab.p-4(titulo="Incluye a analistas de pruebas en el equipo de desarrollo")
        
        .row 
          .col-lg-8.mb-4
            h4 Incluye a analistas de pruebas en el equipo de desarrollo
            p.mb-3  ● Los testers tienen el conocimiento para asegurar que se entregue un producto de calidad y que cumpla los requerimientos del cliente.
            p ● Al integrar a los testers al equipo de desarrollo se logra compartir el conocimiento.
          .col-lg-4.mb-4
              figure
                img(src='@/assets/curso/images/tema1/img_41.svg')
        
      
      .tarjeta.back-tab.p-4(titulo="Los testers deben revisar las pruebas unitarias")
         
        .row 
          .col-lg-8.mb-4
            h4 Los testers deben revisar las pruebas unitarias
            p.mb-3 ● Los desarrolladores suelen deliberar de forma distinta que los testers.
            p ● Para mejorar las pruebas unitarias, se debe permitir que los analistas de pruebas revisen las pruebas unitarias y realicen sugerencias. 
          .col-lg-4.mb-4
              figure
                img(src='@/assets/curso/images/tema1/img_42.svg')

      .tarjeta.back-tab.p-4(titulo="Ejecutar las pruebas de carga (estrés) diariamente")
        
        .row 
          .col-lg-8.mb-4
            h4 Ejecutar las pruebas de carga (estrés) diariamente
            p.mb-3 ● Las pruebas de estrés son cada vez más críticas para el éxito, considerando que el <i>software</i> de hoy se diseña para implementaciones masivas que puedan escalar.
            p ● Deben incorporarse pruebas de estrés en todas las construcciones de <i>software</i> a diario.
          .col-lg-4.mb-4
              figure
                img(src='@/assets/curso/images/tema1/img_43.svg')

      .tarjeta.back-tab.p-4(titulo="Automatizar las pruebas de <i>software</i>")
        
        .row 
          .col-lg-8.mb-4
            h4 Automatizar las pruebas de <i>software</i>
            p.mb-3 ● Hacer uso de herramientas de automatización de pruebas. De esta forma será más eficiente y eliminará inexactitudes.
            p ● La automatización de pruebas permitirá ejecutar con mayor eficiencia las pruebas de regresión cada vez que se incorpore actualizaciones.
          .col-lg-4.mb-4
              figure
                img(src='@/assets/curso/images/tema1/img_44.svg')
      
    h3.mb-3 Test Driven Development (TDD)

    p.mb-3 Es una técnica de desarrollo que permite crear test antes del código de producción, es decir, en la implementación final. La esencia del TDD es crear un test antes de la implementación, de tal modo que se realice la alimentación y el test pueda pasar y que además va de la mano con la refactorización. Normalmente se tienen requerimientos que son transmitidos en historias de usuario como criterios de aceptación o pueden ser requerimientos como casos de uso, posteriormente se recrean esos requerimientos por medio de pruebas automatizadas, luego estas guían para realizar el funcionamiento con buenas prácticas de desarrollo.
      
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          span <i>Flujo del TDD</i>
        img.my-3(src="@/assets/curso/images/tema1/img_45.svg", alt="")

    p.mb-5.text-center En esencia son tres pasos del desarrollo guiado por pruebas TDD: 

    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-5(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-5
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/tj1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.text-white  Es así debido a que se crea un test que falle y cuando falla en la consola aparece con letras rojas.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-6(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-6
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/tj2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-6
              p.text-center.text-white   Este paso es hacer que el test pase y es llamado Green porque cuando pasa un test, normalmente en la consola aparece con letras verdes.	

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-7(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-7
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/tj3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-7
              p.text-center.text-white  Una vez que el test pasa, se va a detectar u observar código que se pueda mejorar y si no se está aplicando una buena práctica, es el momento de hacerlo.
  
    p.mb-3 A continuación, se mostrará en términos generales como sería el flujo del TDD con pasos y un ejemplo sencillo, no obstante también se hace la invitación a observar el videotutorial llamado “Pruebas unitarias y <i>Test-Driven Development</i>”.

    .jumbotron-9.p-5.mb-5
      .row.align-items-center.justify-content-center
        .col-lg-7
          p.mb-3 Si es de su interés conocer más sobre el proceso de realizar las pruebas unitarias y <i>Test-Driven Development</i>, se le invita a consultar el videotutorial en el  material complementario, al cual puede acceder en el siguiente enlace.
        .col-lg-5 
          a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=YuRdaR6w" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Pruebas unitarias y <i>Test-Driven Development</i>

    p.mb-3 En la siguiente tabla se puede verificar cada uno de los pasos guiados por las pruebas TDD, donde se explican cada uno y se dan ejemplos. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .tabla-b.color-primario.mt-5
          table
            thead
              tr.text-center
                th 
                th Pasos
                th Ejemplo 
            tbody
              tr
                td.th-1.text-center.cs Red
                td 1. Lo primero es que el cliente escriba una historia de usuario. #[br] #[br]2. Los criterios de aceptación de esta historia se escriben con el cliente, deben estar bien detallados. #[br] #[br] 3. Se debe seleccionar el criterio de aceptación más sencillo y se traduce en una prueba unitaria.
                td Supóngase que el cliente solicita que se desarrolle una aplicación con operaciones matemáticas sencillas que sume y reste. #[br] #[br] Se define con el cliente que el criterio de aceptación está relacionado con: si se introduce en la aplicación dos números y se suma o resta, entonces la aplicación visualiza el resultado en pantalla. #[br] #[br] De acuerdo a este criterio, se empieza a especificar o definir el funcionamiento del algoritmo para la suma y la resta y luego se convierte el criterio de aceptación en una prueba específica, por ejemplo, un algoritmo que si se introduce los números 3 y 8 devuelve 11.Ejemplo de cómo sería la clase para calcular:  public void testSuma() { assertEquals(8, Operaciones.suma(3,8)); }
              tr
                td.th-2.text-center.cs-2 Green
                td 5.  Se escribe el código que hace pasar la prueba. #[br] #[br] 6. Se ejecutan todas las pruebas automatizadas.
                td El siguiente paso es escribir el código de la clase, en este momento ya se sabe cómo se va a comportar. #[br] #[br] public class Operaciones { public static int suma (int a, int b) { int c = a + b; return c; } } #[br] #[br] Posteriormente se ejecuta la prueba y en este momento se tiene el código funcionado con la prueba pasada.
              tr
                td.th-3.text-center.cs-3 Refactor
                td 7. Se ejecutan todas las pruebas automatizadas. #[br] #[br] 8. Se refactoriza y se limpia el código.
                td Cuando esté todo funcionando, se pasa a refactorizar y a eliminar código duplicado. #[br] #[br] Es necesario pasar todos los test después de refactorizar.
                  
    h3.mb-3 Acceptance Test Driven Development (ATDD)

    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span <i>Imagen ATDD</i>
      .row.justify-content-center
        .col-lg-8
          img.my-3(src="@/assets/curso/images/tema1/img_46.svg", alt="")
        .col-lg-4 
          p.mt-4 El desarrollo guiado por pruebas de aceptación (ATDD) es una metodología de desarrollo basada en la comunicación entre los clientes empresariales, los desarrolladores y los testers. Antes de que los desarrolladores comiencen a codificar, ATDD incluye las pruebas de aceptación, pero destaca la escritura de pruebas de aceptación. El proceso ATDD sigue estos pasos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0.fondo-4
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_6.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Seleccione la historia de usuario:</b> en este punto se asume que se realizó una priorización que permite conocer cuál historia de usuario es la próxima a elegir.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_7.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Escribir la prueba de aceptación:</b> en este punto todos los involucrados deben participar colaborativamente.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_8.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Implementar la historia de usuario - Automatizar las pruebas:</b>) para este paso existen variadas formas de llevarla a cabo, sin embargo, lo importante es que, a partir de las pruebas de aceptación del paso anterior, se obtienen pruebas ejecutables, que permitirán conocer cuánto de la funcionalidad aún falta.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_9.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Implementar el código:</b> al igual que el paso anterior, existen diversas formas de hacerlo, una de ellas es utilizando el TDD.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_10.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 <b>Realizar pequeños cambios/refactorización:</b> es la base de esta práctica al igual que TDD, es una práctica iterativa que finaliza cuando los requerimientos del cliente han sido satisfechos.
          hr
      .col-12.col-lg-4.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema1/img_47.svg' alt="")

      p.mb-3.mt-5 De acuerdo con lo anterior, se parte de un desarrollo al que los programadores han aplicado TDD. Si lo han hecho correctamente, deberían haber obtenido un código limpio y refactorizado, que ha sido probado por pruebas unitarias. El código, por lo tanto, es bueno, pero ¿sucede lo mismo con la aplicación?

      p.mb-3 ATDD no es una técnica de desarrollo o una buena práctica; tiene un enfoque superior. Es una metodología de trabajo para desarrollar <i>software</i>, que busca comprobar si los pasos que se siguen en el desarrollo son los mejores para llegar al objetivo. Con TDD solo se ve si lo que se desarrolla está codificado correctamente y sin errores, es un enfoque miope, solo centrado en desarrollar código de calidad, no la aplicación en su conjunto.

      p.mb-3  Al igual que ocurre en TDD, ATDD consta de una serie de pasos secuenciales que se presentan en la siguiente figura 6.

    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span <i>ATDD</i>
        img.my-3(src="@/assets/curso/images/tema1/img_48.svg", alt="")


    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span <i>Imagen BDD</i>
        .row.justify-content-center
          .col-lg-8
            img.my-3(src="@/assets/curso/images/tema1/img_49.svg", alt="")
          .col-lg-4 
            p El desarrollo dirigido por comportamiento (BDD) propuesto inicialmente por Dan North, es una síntesis y refinamiento de las prácticas de ingeniería de <i>software</i> que ayudan a los equipos generar y entregar <i>software</i> de mayor calidad rápidamente. El proceso de BDD es similar a TDD y sigue estos pasos:  

            p 1. Escribir un escenario.

            p 2. Ejecutar el escenario que falla.

            p 3. Escribir la prueba que corresponde a las especificaciones del escenario.

            p 4. Escribir el código más simple para pasar la prueba y el escenario.

            p 5. Refactorizar para eliminar la duplicación.


    p.mb-3 BDD está basado en la técnica TDD, y corrige ciertas deficiencias que presenta TDD. El principal problema de TDD se produce cuando un <i>software</i> pasa correctamente un test y no consigue la funcionalidad deseada. Que un <i>software</i> pase correctamente un test no significa que haga lo que el cliente esperaba de él.

    p.mb-3 Un ejemplo muy sencillo es el siguiente: primero definimos la característica o funcionalidad a implementar en la historia de usuario.

    p.mb-3 Característica: un usuario quiere acceder a una plataforma <i>web</i>universitaria para descargar sus apuntes. Posteriormente se invita a ver la siguiente imagen que contiene dos escenarios a partir de la historia de usuario definida.

    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9
          span <i>Infografía ejemplo BDD</i>
    
        img.my-3(src="@/assets/curso/images/tema1/fig_1.svg", alt="")

    h3.mb-3 <i>Testing</i> exploratorio

    p.mb-3 Las pruebas exploratorias han sido de gran interés en la comunidad de pruebas de <i>software</i>.
    
    p.mb-3 Este enfoque de pruebas generalmente implica probar, aprender y diseñar nuevas pruebas como actividades que interactúan simultáneamente. 

    p.mb-3 Casi todos los testers exploran cómo es el rendimiento de su trabajo, ya sea que lo reconozcan o no. Por ejemplo, considere las pruebas de regresión de errores. Para verificar si se corrigió un error, el tester puede comenzar con los pasos exactos enumerados en el informe de errores, pero después de que el programa pase esta prueba simple, el tester probablemente intentará pruebas adicionales para verificar si el error está completamente solucionado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
        p.mb-3 El <i>testing</i> exploratorio es una combinación del diseño, ejecución y aprendizaje sobre el aplicativo que está bajo prueba, lo cual tiene un proceso de exploración y aprendizaje del producto bajo prueba. No se utiliza un guion o script de pruebas previamente diseñado, además es útil en metodologías ágiles.
        .jumbotron-9.mb-3.p-3
          .row.align-items-center.justify-content-center
            .col-lg-8
              p.mb-3 Si es de su interés conocer más sobre el <i>Testing</i> exploratorio, se le invita a consultar el webinar en el  material complementario, al cual puede acceder en el siguiente enlace.
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=j0eAvY" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Webinar: El arte de hacer <i>Testing</i> Exploratorio
      .col-lg-4.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/images/tema1/img_55.svg", alt="")
    
    
    .row.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10
          span <i>Imagen testing exploratorio</i>
    .jumbotron-10.p-5
        .row.justify-content-center
          .col-lg-8
            img.my-3(src="@/assets/curso/images/tema1/img_56.svg", alt="")
          .col-lg-4 
            p ● <b>Exploración del producto:</b> para conocer a fondo cómo cumplir con los requisitos hay que registrar los objetivos, las funciones, los tipos de datos que se procesan y las zonas de inestabilidad del producto. 

            p ● <b>Diseño de pruebas:</b> crear diferentes estrategias para observar y evaluar por completo el producto.

            p ● <b>Ejecución de pruebas:</b> explorar el producto para poder formular una hipótesis de cómo funciona y cuáles pueden ser sus puntos débiles.

            p ● <b>Heurística:</b> reglas generales que ayudarán a cómo probar correctamente el producto.


            p ● <b> Resultados revisables:</b> cuando se finalicen las pruebas exploratorias, el tester debe ser capaz de explicar cualquier aspecto del programa y mostrar cómo se cumplen los requisitos indicados en el procedimiento. 

    h3.mb-3 Automatización de pruebas de regresión

    p.mb-3 Aseguran que el cambio realizado en la aplicación o sistema no provoca una falla en la funcionalidad anterior, además consume mucho tiempo si es de manera manual, ya que en ocasiones es más caro la prueba de regresión que lo nuevo que se va a probar y es propenso a tener errores por el factor humano.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.mb-5.mb-lg-0
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0  Las pruebas de regresión se efectúan por flujos completos, es ejecutar y realizar las pruebas con las distintas opciones con la que se cuentan, con base en la lógica del negocio, pueden contener a las partes del código modificado, porque una vez que ese elemento tiene cambios, se debe asegurar que hay una conexión que no tiene problemas con el ambiente en donde va a vivir.

          p Se debe analizar los flujos que son los que más convienen y no limitarse a probarlos, debido a que será más costoso que falle en producción.
      .col-lg-4.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/images/tema1/img_57.svg", alt="")

    .cajon-b.cajon-b--c.color-primario.p-4
      p.mb-0 Estas pruebas toman tiempo en ejecutarlas, sin embargo, al automatizar pruebas, las pruebas de regresión serán asertivas y rápidas, también si se cuenta con los scripts de las pruebas cualquier persona podrá ejecutarlas, sin requerir de un grupo de testers capacitados para estas pruebas, de hecho, si la aplicación original ya tiene mucho tiempo desde la primera vez que se liberó a producción, entonces el riesgo de no contar con alguien que tenga el conocimiento de los flujos se reduce.

    h3.mb-3 Pruebas de regresión

    p.mb-5 Este tipo de pruebas son lanzadas por los desarrolladores o los tester, y es posible su automatización. Para este tipo de pruebas se utilizan las mismas herramientas que se usan en las pruebas unitarias y en las de sistemas, pero también tienen herramientas especializadas de código abierto como:

    .row.align-items-center.justify-content-center.mb-5
        .col-lg-auto(style='z-index:1')
          figure
            img(src='@/assets/curso/images/tema1/img_59.svg' alt='Atención' style='height:260px')
        .col-lg-6
          .p-4(style='background-color:rgba(77,208,225,.2);padding-left:50px !important;margin-left:-50px')
            p.mb-0 Winrunner, VTest, Canoo, AdventNet y QEngine. Y otras herramientas comerciales para aplicar este tipo de pruebas son HP UFT, Seapine QA Wizart Pro, IBM Rational Test Workbench, SmartBear Test Complete, SOASTA, Ranorex UI y OpKey.

    h3.mb-3 Pruebas de exploratorias, usabilidad y aceptación

    p.mb-3 Las pruebas de usabilidad y las pruebas de aceptación del usuario pueden tener diversas semejanzas en términos de resultados y objetivos. No obstante, se podría decir que la primera encuentra errores en el sistema y la segunda demuestra que el sistema está listo, es decir, uno trata de realizar un mejor producto y el otro trata de terminarlo.

    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.color-tab.fondo(titulo="Pruebas exploratorias")
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Pruebas exploratorias
            p El <i>testing</i>exploratorio se define como el aprendizaje, el diseño de casos de prueba y la ejecución de las pruebas en forma simultánea. En otras palabras, es una técnica de prueba en la cual quien prueba controla activamente el diseño mientras son realizadas, y utiliza la información obtenida en la exploración para diseñar nuevas y mejores pruebas.
          .col-lg-5
            figure
              img.mx-5(src='@/assets/curso/images/tema1/img_60.svg' alt='')
      .py-3.py-md-4.color-tab.fondo(titulo='Pruebas de usabilidad')
        .row.align-items-center.justify-content-center
          .col-lg-5
            h3 Pruebas de usabilidad
            p.mb-3  El diseño no es solo como se ve y como se siente. El diseño es cómo funciona, y para conocer cómo funciona se debe de tener el conocimiento de usabilidad, por lo tanto, es un método para evaluar la experiencia del usuario de una aplicación o producto <i>software</i>. Cuando se prueba la usabilidad con un conjunto representativo de clientes o usuarios, los evaluadores de la experiencia de usuario saben por ejemplo si los usuarios reales pueden usar la aplicación o el producto <i>software</i> de forma sencilla e intuitiva.

            La usabilidad es una parte crítica del proceso de desarrollo <i>software</i>, debido a su naturaleza iterativa. Una evaluación de usabilidad es la mejor manera de poner un producto en manos de usuarios reales para ver si lo usan y cómo lo usan antes del lanzamiento del producto.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema1/img_62.svg' alt='')
      .py-3.py-md-4.color-tab.fondo(titulo='Pruebas de aceptación')
        .row.align-items-center.justify-content-center.p-4
          h3 Pruebas de aceptación
          p.mb-3 Estas pruebas se realizan asignando a los usuarios unas tareas muy específicas con pasos a seguir para comprobar la funcionalidad de un sistema, es decir, identificar los bugs, que posteriormente los desarrolladores deben trabajar para solucionarlos. 
          .col-lg-7
            
            p.mb-3 Durante las pruebas de aceptación de usuario, el usuario solicita un producto de <i>software</i> para asegurarse de que cumple con sus requerimientos, satisface sus expectativas y que su resultado es factible, es decir, que el <i>software</i> le permita realizar su trabajo.

            p La UAT se centra en el usuario debido a la colaboración entre el equipo de desarrollo y los usuarios finales al momento de detallar los criterios de aceptación para cada historia de usuario desarrollada. En este sentido los desarrolladores o el equipo de desarrollo los utiliza con el propósito de diseñar casos de prueba automatizados que se ejecutan cada vez que se realiza una compilación de integración.
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema1/img_63.svg' alt='')
      
    h3.mb-3 Pruebas desempeño, carga y seguridad

    p.mb-5 Es un momento exitoso cuando se finaliza la programación de una aplicación, lo cual, al transcurrir el tiempo, tener un producto terminado es un logro importante. No obstante, es momento también de probar varios aspectos del <i>software</i>, para asegurar su funcionamiento y controlar su calidad. Desempeño, seguridad y carga son factores importantes que se deben revisar con todo el producto <i>software</i> que se desarrolle, a continuación se describe cada uno: 
    

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.color-tab.fondo-5(titulo="Pruebas de desempeño")
        .row.align-items-center.justify-content-center
          .col-lg-8
            h3 Pruebas de desempeño
            p Las pruebas de desempeño permiten determinar el comportamiento de un sistema en términos de estabilidad y respuesta con respecto a un escenario en particular, referente a la carga de trabajo, concurrencia, ancho de banda, características particulares de equipos o servidores, como Ram, CPU. También permiten identificar, medir, investigar, validar o verificar otros aspectos de calidad, tales como la seguridad, escalabilidad y el consumo de recursos. Estas pruebas constituyen unos estándares de ejecución en la implementación, diseño y arquitectura de un producto <i>software</i>. Por lo tanto, una de las pruebas de desempeño esenciales es la prueba de carga que se menciona a continuación. 
          .col-lg-3
            figure
              img(src='@/assets/curso/images/tema1/img_64.svg' alt='')
      .py-3.py-md-4.color-tab.fondo-5(titulo='Pruebas de carga')
        .row.align-items-center.justify-content-center
          .col-lg-8
            h3 Pruebas de carga
            p.mb-3  Las pruebas de carga se centran en determinar o validar las características de rendimiento del sistema o la aplicación sometida a un test cuando se enfrenta a diferentes volúmenes de cargas de trabajo prevista durante las operaciones de producción (Meier, y otros, 2007). 
          .col-lg-3
            figure
              img(src='@/assets/curso/images/tema1/img_65.svg' alt='')
      .py-3.py-md-4.color-tab.fondo-5(titulo='Pruebas de seguridad')
        .row.align-items-center.justify-content-center.p-4
          .col-lg-8
            h3 Pruebas de seguridad
            p.mb-3 Las pruebas de seguridad son la serie de actividades que son ejecutadas para encontrar fallas y vulnerabilidades, con la finalidad de minimizar el impacto de ataques, acceso a información susceptible y la pérdida de información. 

            p.mb-3 Estas pruebas son primordiales dado que los productos <i>software</i> deben asegurar siempre la confidencialidad, disponibilidad e integridad de los datos y funcionalidades que maneja el producto y es importante denotar lo crítico que sería la pérdida o corrupción de esta información en el contexto empresarial. Estas pruebas deben ir de la mano y ejecución en todas las fases del proyecto. 
          .col-lg-3
            figure
              img(src='@/assets/curso/images/tema1/img_66.svg' alt='')

        p.mb-5.text-center Para ilustrar mejor el concepto de las pruebas de carga se presenta el siguiente video tutorial:
        .row.align-items-center.justify-content-center
          .col-lg-8
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        p.mb-5.text-center A continuación, se presenta el siguiente video tutorial de instalación del <i>software</i> OWASP para realizar una prueba de seguridad:
        .row.align-items-center.justify-content-center
          .col-lg-8
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.mb-3 Elaboración de informe de resultados

    p.mb-5 Una vez ejecutadas las pruebas se deben analizar los resultados y los fallos detectados, teniendo en cuenta el reporte de defectos, directrices para detectarlos y el informe de resultados de pruebas. Para ello se puede realizar lo descrito a continuación:

    .row.justify-content-center.mb-5
        .col-lg-3.tarjeta.fblue-1.boxShadow.mx-3
          .p-4
            figure
              img(src='@/assets/curso/images/tema1/img_67.svg', alt='imagen relacionada').mb-4
            p.text-center Analizar el impacto del defecto.
        .col-lg-3.tarjeta.fblue-2.boxShadow.mx-3.d-flex
          .p-4
            figure
              img(src='@/assets/curso/images/tema1/img_68.svg', alt='imagen relacionada').mb-4
            p.text-center Investigar el problema, en qué condiciones se produce este fallo.
        .col-lg-3.tarjeta.fblue-1.boxShadow.mx-3.d-flex
          .p-4
            figure
              img(src='@/assets/curso/images/tema1/img_69.svg', alt='imagen relacionada').mb-4
            p.text-center Analizar la severidad, si es alta o baja.
    .row.justify-content-center
        .col-lg-3.tarjeta.fblue-1.boxShadow.mx-3.d-flex
          .p-4
            figure
              img(src='@/assets/curso/images/tema1/img_70.svg', alt='imagen relacionada').mb-4
            p.text-center Variar los pasos realizados, se pueden ejecutar en orden diferente para observar si existe alguna variante en el resultado esperado.
        .col-lg-3.tarjeta.fblue-2.boxShadow.mx-3
          .p-4
            figure
              img(src='@/assets/curso/images/tema1/img_71.svg', alt='imagen relacionada').mb-4
            p.text-center Variar opciones de configuración, si estamos probando una aplicación <i>web</i> se puede probar con diferentes navegadores.
        .col-lg-3.tarjeta.fblue-1.boxShadow.mx-3
          .p-4
            figure
              img(src='@/assets/curso/images/tema1/img_72.svg', alt='imagen relacionada').mb-4
            p.text-center Determinar condiciones específicas bajo las cuales se reproduce el defecto, si estamos probando entradas de datos entonces probar con diferentes datos.   

    p.mt-5.mb-5 El informe de resultados incluye la detección de incidencias o errores de <i>software</i>, puesto que es aquí donde se evalúan y corrigen problemas, por lo tanto, a continuación, se describe la gestión de incidencias y su ciclo de vida.

    .row.align-items-end.justify-content-center.mb-5.fondo-6
      .col-lg-6.ofVisible
        h3 Incidencias detectadas
        p.mb-5 La gestión de incidencias es un elemento central e importante en el proceso de calidad de <i>software</i> puesto que es en este punto donde se tienen en cuenta los errores (bugs). Por lo tanto, el propósito de las incidencias detectadas es precisamente generar su corrección, de tal manera que sea mínimamente probable que el error se repita. 
      .col-lg-5
        figure
          img(src='@/assets/curso/images/tema1/img_73.svg' alt='imagen relacionada')

    h3.mb-3 Ciclo de vida de una incidencia

    p.mb-5 Un sistema de gestión de incidentes debe manejar los errores de <i>software</i> teniendo en cuenta el siguiente proceso:

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema1/img_74.svg', alt='Texto que describa la imagen')

      div(x="7%" y="52%" tooltip="Nuevo" numero="1")
        p  Durante las pruebas de <i>software</i> los errores de <i>software</i> deben ser identificados y registrados por el tester de <i>software</i> siendo ese instante donde se reporta el error.
      div(x="22%" y="52%" tooltip="Abierto" numero="2")
        p El equipo de desarrollo adquiere el incidente y empieza a analizarlo.
      div(x="37%" y="52%" tooltip="Asignado" numero="3")
        p El incidente es asignado al desarrollador.
      div(x="20%" y="31%" tooltip="Rechazado" numero="4")
        p No aplica.
      div(x="53%" y="31%" tooltip="Diferido" numero="5")
        p Si el incidente aplica y es de bajo impacto.
      div(x="35%" y="79%" tooltip="Reabierto" numero="6")
        p Cuando el incidente es corregido y es retornado al equipo de <i>testers</i> de <i>software.</i>
      div(x="67%" y="52%" tooltip="Verificado" numero="7")
        p Si la prueba es positiva.
      div(x="82%" y="52%" tooltip="Cerrado" numero="8")
        p Posterior a una verificación por parte del equipo de <i>testing.</i>

    p.mb-3 El anterior proceso se adapta a proyectos de <i>software</i> en fase de desarrollo, mas no en ambiente de producción. 

    h3.mb-3 Redacción del reporte de incidencias

    p.mb-3 El propósito del informe de incidentes es documentar cada incidente, por lo tanto, se debe seguir un procedimiento para gestionar de forma sistémica y ordenada las incidencias de producto halladas a lo largo de la ejecución de los casos de prueba. Este procedimiento tiene las siguientes actividades:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_6.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Verificar con las áreas correspondientes las incidencias.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_7.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Verificar que el estado de las incidencias esté actualizado.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_8.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Realizar repruebas y regresión, es decir, generar otra vez la ejecución de los casos de prueba necesarios.
          hr
      .col-12.col-lg-4.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema1/img_75.svg' alt="")

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-auto(style='z-index:1')
        figure
          img(src='@/assets/curso/images/tema1/img_59.svg' alt='Atención' style='height:260px')
      .col-lg-6
        .p-4(style='background-color:rgba(77,208,225,.2);padding-left:50px !important;margin-left:-50px')
          p.mb-0 Por otra parte, para estructurar el informe de incidentes se requiere tener en cuenta los siguientes puntos:

          P <b>Identificador.</b>
          p Resumen y descripción del incidente.
          p Descripción de datos (fecha/hora, entradas, resultados esperados).
          p Impacto que los incidentes tendrán con respecto a las pruebas.

    h3.mb-3 Reporte de defectos

    p.mb-3 Cuando se está seguro de que existe un defecto, es decir, cuando están confirmados, se procede a redactar un reporte de defectos, el cual contiene los fallos detectados a lo largo del esfuerzo de pruebas. También hay que tener en cuenta que cada defecto detectado requiere de un reporte de defectos lo que facilita la trazabilidad y su posterior corrección.
    p.mb-3 A continuación, se presenta la estructura de un reporte de defectos.

    .jumbotron-11.p-4.mb-5
      .row.justify-content-center
        .col-lg-12
          img.my-3(src="@/assets/curso/images/tema1/img_77.svg", alt="")  

    h3.mb-3 Informe de resultados de pruebas

    p.mb-5 El informe de resultados de pruebas presenta y ordena un análisis sintético de los resultados de las pruebas y las medidas principales de prueba para la evaluación y verificación, por lo tanto, este documento es responsabilidad del gerente de pruebas. Este informe debe contener los siguientes puntos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_6.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Alcance de las pruebas, es decir, lo que es necesario incluir y no incluir.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_7.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-3 Resumen de pruebas:
              p ● Casos de prueba planificados
              p ● Casos de prueba ejecutados
              p ● Casos de prueba exitosos
              p ● Casos de prueba fallidos
              p ● Casos de prueba bloqueados
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_8.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Listado de defectos detectados.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_9.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Conclusiones.
          hr
      .col-12.col-lg-4.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema1/img_78.svg' alt="")


  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
