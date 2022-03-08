<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Elaboración del plan de mejora
 
    .col-lg-12.mb-3
      img(src="@/assets/curso/images/tema2/img_1.png", alt= "")
    
    p.mb-4 Cuando una organización es exitosa seguramente lo es por su capacidad de incluir la mejora continua en cada proceso y en sus actividades diarias. La mejora se efectúa cuando la organización tiene en cuenta tanto las fortalezas como las debilidades. Sin embargo, también es importante identificar la situación en la que se encuentra la organización por medio de un diagnóstico. Cuando ya se tiene el diagnóstico se puede establecer la estrategia a seguir con el fin de que el destinatario de los servicios observe significativamente, la mejora implantada. 

    Separador 

    #t_2_1.titulo-segundo
      .h4 2.1 Identificar el área de mejora

    .row.mb-5
      .col-12.col-lg-3.mb-5.mb-lg-0
        p.mb-3 Una vez elaborado el diagnóstico, se conocen las principales fortalezas y debilidades. Por lo tanto, es importante identificar las áreas de mejora apoyándose en las fortalezas para lograr superar las debilidades, siendo esta una opción de cambio óptima. A continuación, se muestra una tabla como una opción para identificar el área de mejora de acuerdo con las fortalezas y debilidades. 
      .col-12.col-lg-9.mb-7.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3 
          span <i>Tabla de fortalezas, debilidades y área de mejora</i>
        .row.justify-content-center.align-items-center
          .col-10
            .tabla-a.color-acento-botones.mt-5
              table(style="min-width:600px;")
                thead
                  tr.th-4.text-center
                    th Fortalezas 
                    th Debilidades
                    th Áreas de mejora 
                tbody
                  tr
                    td.text-center 1. 
                    td.text-center 1.
                    td.text-center 1.
                  tr
                    td.text-center 2.
                    td.text-center 2.
                    td.text-center 2.
                  tr
                    td.text-center (..)
                    td.text-center (..)
                    td.text-center (..)
        
    Separador

    #t_2_2.titulo-segundo
      .h4 2.2 Detectar las principales causas del problema

    p.mb-5 Solucionar problemas y mejorar un área en específico, empieza conociendo las causas que las originaron. Por lo tanto, hay actualmente varias herramientas metodológicas que las identifican. A continuación, se nombran algunas:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.color-tab.fondo(titulo="El diagrama de espina (causa-efecto)")
        .row.align-items-center.justify-content-center
          .col-lg-12
            figure
              img.my-3(src='@/assets/curso/images/tema2/img_2.svg' alt='')
              img(src='@/assets/curso/images/tema2/img_3.svg' alt='')
      .py-3.py-md-4.color-tab.fondo(titulo='Diagrama de Pareto ')
        .row.align-items-center.justify-content-center
          .col-12.col-lg-7.mb-7.mb-lg-0
            .row.justify-content-center
              .col-8
                .tabla-a.color-acento-botones.mt-5.mx-0
                  table(style="min-width:700px;")
                    thead
                      tr.th-4.text-center
                        th Causa averia
                        th Incidentes
                        th Acumulado
                        th %
                        th Acumulado
                    tbody
                      tr
                        td.text-center Falta cuidado operario 
                        td.text-center 564
                        td.text-center 564
                        td.text-center 40.78 % 
                        td.text-center 41 % 
                      tr
                        td.text-center Mantenimiento inadecuado 
                        td.text-center 373
                        td.text-center 937
                        td.text-center 26.97 % 
                        td.text-center 68 %
                      tr
                        td.text-center Falta de formación del operario 
                        td.text-center 175
                        td.text-center 1112
                        td.text-center 12.65 % 
                        td.text-center 80 % 
                      tr
                        td.text-center Problemas materiales utilizados
                        td.text-center 131
                        td.text-center 1243
                        td.text-center 9.47 %
                        td.text-center 90 % 
                      tr
                        td.text-center Problemas con la red de energía
                        td.text-center 76
                        td.text-center 1319
                        td.text-center 5.50 %
                        td.text-center 95 % 
                      tr
                        td.text-center Replanificaciones de pedidos de producción
                        td.text-center 36
                        td.text-center 1355
                        td.text-center 2.60 %
                        td.text-center 98 % 
                      tr
                        td.text-center Otros
                        td.text-center 28
                        td.text-center 1383
                        td.text-center 2.02 %
                        td.text-center 100 % 
                      tr
                        td.text-center Total
                        td.text-center 1383
          .col-lg-5
            figure
              img(src='@/assets/curso/images/tema2/img_4.svg' alt='', style="width:400px; display:block; margin:auto -2rem;")
      .py-3.py-md-4.color-tab.fondo(titulo='Tormenta de ideas')
        .row.align-items-center.justify-content-center.p-4
          .col-lg-10
            figure
              img(src='@/assets/curso/images/tema2/img_5.svg' alt='')

    p El uso de estas herramientas aporta al análisis del problema en mayor profundidad y se convierten en pautas al momento de establecer las acciones de mejora.

    Separador 

    #t_2_3.titulo-segundo
      .h4 2.3 Formular el objetivo 

    p.mb-3 Una vez conocidas e identificadas las causas del problema y las áreas de mejora, se pueden establecer los objetivos y determinar el tiempo para lograrlos. Al momento de escribir los objetivos estos deben ser:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-5.mb-lg-0
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_6.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Precisos o concretos.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_7.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-3 Expresar de forma indiscutible el resultado que se quiere alcanzar.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_8.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Su redacción debe ser clara.
          hr
          .row.align-items-center.justify-content-center.mb-3
            .col-auto
              img(src='@/assets/curso/images/tema1/ico_9.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 Deben ser alcanzables, comprensibles y flexibles, es decir, que se puedan cumplir, interpretar y en algún caso extremo, modificar.
          hr
      .col-12.col-lg-4.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_6.svg' alt="")

    Separador
  
    #t_2_4.titulo-segundo
      .h4 2.4 Seleccionar las acciones de mejora

    p.mb-3 En este punto se debe seleccionar las opciones de mejora para priorizar las más apropiadas. Para esto se pueden utilizar algunas técnicas tales como técnica del grupo nominal y tormenta de ideas entre otras, que permiten establecer acciones de mejora que se convierten en solución para las debilidades. Lo anterior quiere decir que, para cumplir con los objetivos establecidos, se debe de tener un listado de las principales actuaciones. A continuación, se muestra una tabla que muestra que, para seleccionar las acciones de mejora, se deben haber identificado el problema, la causa y su objetivo. 

    .row.align-items-center.justify-content-center.mb-3
      .col-12.col-lg-7.mb-5.mb-lg-0
        .titulo-sexto.color-acento-contenido
            h5 Tabla 4 
            span <i>Acciones de mejora</i>
        .tabla-b
          .tabla-b__header.color-table
            .h6.mb-0 Área de mejora nº 1:
        table
          tr
            th Descripción del problema
            td 
          tr
            th Causas que provocan el problema
            td 
          tr
            th Objetivo a conseguir 
            td 
          tr
            th Acciones de mejora
            td.text-center 1. #[br] 2.#[br](..)
          tr
            th Beneficios esperados
            td 
      .col-12.col-lg-5.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_7.svg' alt="")

    Separador
    
    #t_2_5.titulo-segundo
      .h4 2.5  Realizar una planeación 

    p.mb-3 El listado de las principales actuaciones se genera sin tener en cuenta algún orden de prioridad, no obstante, ciertas restricciones que son inherentes a las acciones pueden limitar su comienzo, o la posible eliminación o aplazamiento del plan de mejora, por lo tanto, es importante conocer las restricciones que limitan su viabilidad.  Determinar un orden óptimo no se da por el hecho de identificar las acciones relacionadas a los factores con mayor urgencia, sino que se tienen en cuenta otros criterios al tomar esa decisión. A continuación, se describen algunos criterios:

    .row.align-items-center.justify-content-center.mb-3
      .col-12.col-lg-7.mb-5.mb-lg-0
        p.mb-5 Dificultad de la implantación: en este momento se prioriza el grado de dificultad de menor a mayor.
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5 
          span <i>Dificultad de la implantación</i>
        .tabla-b
          .tabla-b__header.color-table
            .h6.mb-0 Dificultad
        table
          tr
            td 1. Mucha
            td 2. Bastante
            td 3. Poca 
            td 4. Ninguna
        
        p.mt-3 <b>Plazo de implantación:</b> es de resaltar que existen acciones de mejora, cuyo tiempo está establecido y no requiere de un esfuerzo profundo, por lo tanto, pueden efectuarse a corto plazo. Sin embargo, hay acciones que su realización requiere de un extenso tiempo de implantación. 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6
          span <i>Plazo de implantación </i>
        .tabla-b
          .tabla-b__header.color-table-1
            .h6.mb-0 Plazo
        table
          tr
            td 1. largo
            td 2. medio
            td 3. corto
            td 4. inmediato

        p.mt-3 <b>Impacto en la organización:</b> este es el resultado de la actuación que se va a implantar, medido por medio del grado de mejora obtenido, puesto que, un cambio fundamental tendrá un impacto más grande que cambios continuos pequeños. 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7 
          span <i>Impacto en la organización</i>
        .tabla-b
          .tabla-b__header.color-table-1
            .h6.mb-0 Plazo
        table
          tr
            td 1. ninguno
            td 2. poco
            td 3. bastante
            td 4. mucho

      .col-12.col-lg-5.mb-5.mb-lg-0
          img(src='@/assets/curso/images/tema2/img_8.svg' alt="")

    #t_2_6.titulo-segundo
      .h4 2.6  Seguimiento del plan de mejora

    p.mb-3 En este punto se elabora un cronograma para la implantación y seguimiento de las acciones de mejora. En este cronograma, se colocarán de forma ordenada las prioridades con los plazos determinados para su desarrollo. 

    p.mb-5 Cuando ya se han seleccionado por orden de prioridad, ahora si se construye el plan de mejoras, incluyendo los elementos para efectuar el seguimiento en detalle del plan que garantizará su eficiencia y eficacia, teniendo en cuenta la tabla que se muestra a continuación:  
    
    .titulo-sexto.color-acento-contenido
          h5 Tabla 8
          span <i>Plan de mejoras</i>
    .tabla-b
      .tabla-b__header.color-table-1
        .h6.mb-0 PLAN DE MEJORAS N-(N+X) 
    table
      tr
        td Acciones de mejora
        td Tareas
        td Responsable de tarea
        td Tiempos #[br](inicio-final)
        td Recursos necesarios
        td Financiación 
        td Indicador seguimiento
        td Responsable seguimiento
      tr 
        td.text-center 1.1
        td.text-center a) #[br] b) #[br] c) #[br] (…)
        td
        td
        td
        td
        td
        td
      tr 
        td.text-center 1.2
        td.text-center a) #[br] b) #[br] c) #[br] (…)
        td
        td
        td
        td
        td
        td
      tr 
        td.text-center (…) 
        td.text-center  
        td
        td
        td
        td
        td
        td
      tr 
        td.text-center 2.1 
        td.text-center a) #[br] b) #[br] c) #[br] (…)
        td
        td
        td
        td
        td
        td
      tr 
        td.text-center 2.2 
        td.text-center a) #[br] b) #[br] c) #[br] (…)
        td
        td
        td
        td
        td
        td
      tr 
        td.text-center (…) 
        td.text-center  
        td
        td
        td
        td
        td
        td
    
    h3.mt-5 Sintesis 
    
    .row.align-items-center.justify-content-center.mt-5
      .col-12.col-lg-12.mb-5.mb-lg-0
          img(src='@/assets/curso/images/tema2/img_9.svg' alt="")

</template>

<script>
export default {
  name: 'Tema2',
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
