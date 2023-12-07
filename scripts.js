$(document).ready(function() {
   // Cambiar el texto de acuerdo a la división seleccionada
   $('#division-select').change(function() {
     const division = $(this).val();
     if (division === 'masculino') {
       $('#division-titulo').text('Equipos Masculinos 2024');
       // Aquí podrías cambiar los logos y nombres de los equipos para la división masculina
     } else if (division === 'femenino') {
       $('#division-titulo').text('Equipos Femeninos 2024');
       // Aquí podrías cambiar los logos y nombres de los equipos para la división femenina
     }
   });
 
   // Slider de los equipos
   const slider = $('.slider');
   const slides = $('.slide');
   const slideWidth = slides.outerWidth();
   let currentIndex = 0;
 
   $('.slider-next').click(function() {
     if (currentIndex < slides.length - 1) {
       currentIndex++;
       slider.css('transform', 'translateX(' + -slideWidth * currentIndex + 'px)');
     }
   });
 
   $('.slider-prev').click(function() {
     if (currentIndex > 0) {
       currentIndex--;
       slider.css('transform', 'translateX(' + -slideWidth * currentIndex + 'px)');
     }
   });
 });
 