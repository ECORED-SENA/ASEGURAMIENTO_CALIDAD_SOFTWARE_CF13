<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    
    
    p.mb-3 En este componente formativo “Aplicación de pruebas de <i>software</i>” se estudiarán los diferentes elementos para la realización de pruebas, por lo cual se abordarán las siguientes áreas de aprendizaje, tipos de pruebas funcionales y no funcionales, pruebas ágiles (<i>Agile testing</i>) y elaboración de informe de resultados.

    p.mb-5 Cabe resaltar que cuando se desarrollan aplicaciones <i>web</i>, uno de los desafíos es verificar que la calidad del producto sea óptima y sin errores, de este modo las pruebas de software son parte fundamental del proceso de calidad y adopción de buenas prácticas. Para comenzar el recorrido por el mismo, le invitamos a ver el recurso didáctico que se muestra a continuación.


    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hIuEqUdAVJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     

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
