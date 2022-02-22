<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Realización de pruebas de software
 
    .col-lg-12.mb-3
      img(src="@/assets/curso/images/tema1/img_1.png", alt= "")

    p.mb-3 En este punto para realizar las pruebas de software se debe establecer qué tipos de pruebas serán requeridas por el producto, puesto que para probar un producto no se requiere utilizar todos los tipos de prueba que existen sino más bien los que sean necesarios para cada caso, por esta razón, es importante que el QA o líder de pruebas determine qué tipos de prueba se adaptan al proyecto en evaluación. En el plan de pruebas se deben listar los tipos de pruebas a realizar, por lo que a continuación se especifican y describen los tipos de pruebas que se pueden utilizar.

    Separador 
   
    #t_1_1.titulo-segundo
      h2 1.1  Tipos de pruebas

    .jumbotrom.mb-5
      .row.justify-content-center.align-items-center.mb-4.p-4
        .col-lg.order-2.order-lg-1
          .custom_box_right    
            p.mb-0 Las pruebas de software se pueden clasificar en dos tipos principales: pruebas funcionales y pruebas no funcionales. Teniendo en cuenta los diferentes frentes y aspectos de un producto software, con lo cual se requerirán diferentes tipos de pruebas, tales como: pruebas unitarias, pruebas de integración, pruebas de estrés, pruebas de rendimiento, pruebas de escalabilidad, entre otras. Cada uno de estos tipos de pruebas de software determinan la visibilidad de la aplicación, desde el código fuente hasta la interacción y experiencia con el usuario. Entrando en detalles, a continuación se invita a observar el siguiente video donde podrá identificar los tipos de pruebas de software.
        .col-auto.mb-5.mb.onTop.order-1.order-lg-3
          img(src="@/assets/curso/images/tema1/img_2.svg" alt='AvatarTop', style="width:320px;")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .jumbotron-1.p-3
          p.text-center.mb-0 Algunos de los tipos de pruebas más comunes se describen en los siguientes puntos.

    h3 Pruebas funcionales

    p.mb-3 Se llevan a cabo para verificar las características esenciales para el negocio, la funcionalidad y la usabilidad. Estas garantizan que las características y funciones del software operan y se comportan según lo esperado sin problemas. Valida toda la aplicación respecto a las especificaciones definidas en el documento de requisitos de software (SRS). En estas pruebas se incluyen las pruebas unitarias, pruebas de regresión, pruebas de interfaz, entre otras. 

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
        p.mb-3  Estas pruebas se enfocan en validar elementos como componentes/unidades/piezas de forma individual e independiente de un producto software dado el principio SDLC. Cualquier bloque de código sea procedimiento, función, método, constructor, clase o módulo, puede ser una unidad y deberá ser considerado y sometido a pruebas unitarias, con lo cual se podrá determinar su comportamiento y validarlo versus el resultado esperado. Estas pruebas deben ser las primeras que se lleven a cabo en la fase de desarrollo y las deberán implementar los desarrolladores.
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

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-1(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-1
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/avatar_1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.mb-3(src="@/assets/curso/images/tema1/unit.svg", alt="")
              p Es una herramienta de pruebas unitarias para el framework .NET

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-2(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-2
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/avatar_2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.mb-3(src="@/assets/curso/images/tema1/junit.jpg", alt="")
              p  Es una herramienta de pruebas de aplicaciones java

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-3(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-3
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/avatar_3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.mb-3(src="@/assets/curso/images/tema1/nunit.jpg", alt="")
              p Es una herramienta de pruebas de plataformas .NET
  
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-tarjeta-4(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.color-tarjeta-4
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/avatar_4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.mb-3(src="@/assets/curso/images/tema1/phpunit.jpg", alt="")
              p Es una herramienta de pruebas de programación PHP


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
        p.mb-3 Estas pruebas se enfocan en validar diferentes módulos o componentes de un producto software de tal manera que se valide como un grupo funcional. Una aplicación de software, un sistema de información o una aplicación web, entre otros productos software  están compuestos por diferentes componentes, módulos y submódulos distribuidos en diferentes niveles y capas, que trabajan juntos y se orquestan en diferentes funcionalidades. La finalidad de estas pruebas es validar que la integración entre estos componentes sea correcta y encontrar posibles problemas o errores relacionados con la sinergia y comunicación entre ellos.
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
            p.text-white En este tipo de pruebas se comprueban los requisitos basados en la operación de un software. Para verificar la carga que resiste el producto software, identificando si su rendimiento es el adecuado o si es estable a nivel de contacto con el servidor. 
            h6.text-right.fRight.mb-5 <span class='text-white'>(Mera  (2016) ).</span> <i class='fas fa-square cac'></i>
      .col-lg-4.mb-5.mb-lg-0 
        img.my-3(src="@/assets/curso/images/tema1/img_8.svg", alt="")

    p.mb-5 Hay algunos aspectos que pueden ser complejos, como el rendimiento de una aplicación, sin embargo, esta prueba permite comprobar la calidad del software que se va a probar. La calidad depende principalmente del tiempo, la precisión, la estabilidad, la corrección y la durabilidad de un producto en diversas circunstancias adversas. Con base en estos aspectos de calidad podemos estudiar diferentes tipos de pruebas no funcionales:

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

        .p-4(titulo='Pruebas de estrés (Stress test)' numero='3')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Pruebas de estrés (Stress test)
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
              p Son las encargadas de verificar la capacidad del programa para soportar entradas o instrucciones incorrectas. Una de sus características principales es implementar mecanismos de software de detección de errores en el hardware.
            .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_14.svg' alt='')

    h3.mb-3 Pruebas de rendimiento

    p.mb-3 Son un tipo de pruebas no funcionales, las cuales se realizan con la finalidad de determinar la estabilidad, escalabilidad y velocidad de una funcionalidad en el producto software. El objetivo de este tipo de pruebas es verificar el comportamiento de la aplicación teniendo en cuenta diferentes puntos de referencia del sistema y de la red, tales como la CPU, la velocidad de renderizado o carga de la página, el control de tráfico, la concurrencia, consumo de recursos de servidor, entre otros. En esta categoría podemos encontrar las pruebas de carga y de esfuerzo. 


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
              p.mb-0 Verificar el cumplimiento de los SLA (Acuerdos de Nivel de Servicio). Se utiliza para medir los tiempos de respuesta del software en condiciones y tiempos específicos.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Localizar cuellos de botella. Ayudar a detallar en qué lugar se generan estos cuellos de botellas si se debe a problemas de hardware como CPU, memoria, o es el ancho de banda.
          hr

    
































































    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br

    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
