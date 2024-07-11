<?php

/**
 * Template part for displaying the footer content
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Rosh_Green
 */

?>

<footer class="bg-lightBrown-1000 font-lato">
  <div class="w-full max-w-screen-xl mx-auto px-5 pt-12 md:pt-24">
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-16 gap-y-5">
      <img src="<?php echo get_template_directory_uri(); ?>/images/rosh-greens_blanco.png" alt="Rosh & Green logo" class="md:w-auto h-24 md:h-[125px]">

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white">
        <ul class="flex flex-col gap-y-2.5">
          <h4 class="text-sm font-extrabold uppercase">Secciones</h4>
          <li><a href="">Avatr</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">¿Quienes somos?</a></li>
          <li><a href="">Contactos</a></li>
        </ul>

        <ul class="flex flex-col gap-y-2.5">
          <h4 class="text-sm font-extrabold uppercase">Otros enlaces</h4>
          <li><a href="">Políticas de privacidad</a></li>
          <li><a href="">Políticas de uso</a></li>
          <li><a href="">Términos y condiciones</a></li>
        </ul>

        <ul class="flex flex-col gap-y-2.5">
          <h4 class="text-sm font-extrabold uppercase">Contactos</h4>
          <li><a href="mailto:ventas@roshgreenmotors.com">ventas@roshgreenmotors.com</a></li>
          <li><a href="">Tel.: 809-532-1619</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-b border-[#FFFFFF33] mt-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
      <div class="rounded-lg w-48 h-[85px] py-6 px-9 flex items-center justify-center bg-white">
        <img src="<?php echo get_template_directory_uri(); ?>/images/kama-logo.png" alt="Kama logo" class="">
      </div>
      <div class="rounded-lg w-48 h-[85px] py-6 px-9 flex items-center justify-center bg-white">
        <img src="<?php echo get_template_directory_uri(); ?>/images/huanghai-logo.png" alt="Huanghai logo" class="">
      </div>
      <div class="rounded-lg w-48 h-[85px] py-6 px-9 flex items-center justify-center bg-white">
        <img src="<?php echo get_template_directory_uri(); ?>/images/bm-autobuses-logo.png" alt="BM Autobuses logo" class="">
      </div>
      <div class="rounded-lg w-48 h-[85px] py-6 px-9 flex items-center justify-center bg-white">
        <img src="<?php echo get_template_directory_uri(); ?>/images/avatr-logo.png" alt="avatr logo" class="">
      </div>
    </div>

    <div class="text-center py-8 text-white">
      © Copyright - Rosh & Green Motors
    </div>
  </div>
</footer>