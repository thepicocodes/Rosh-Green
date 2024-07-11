<?php

/**
 * Template part for displaying the header content
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Rosh_Green
 */

?>

<header id="navbar" class="group border border-[#E4E4E4] w-full py-2 fixed left-0 z-50 bg-white/75 <?php echo is_user_logged_in() ? 'top-8' : 'top-0' ?>">
	<div class="w-full max-w-screen-xl mx-auto px-5 flex flex-row items-center justify-between">
		<a href="#" class="block">
			<img src="<?php echo get_template_directory_uri(); ?>/images/rosh-greens_color.png" alt="Rosh & Green logo" class="">
		</a>

		<nav id="navigation" class="hidden md:block absolute md:static w-full md:w-auto h-screen md:h-auto py-4 top-0 left-0 bg-white md:bg-inherit">
			<ul class="w-full flex flex-col md:flex-row items-center gap-x-1 gap-y-5 text-center text-2xl md:text-base">
				<a href="#" class="close block cursor-pointer self-end text-3xl md:hidden p-2.5 <? is_user_logged_in() ? 'pt-6' : 'pt-0' ?>">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-12" viewBox="0 0 512 512">
						<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" />
					</svg>
				</a>
				<li class="w-full md:w-fit"><a href="#" class="inline-block md:inline w-full md:w-auto px-2 py-4 md:py-0">AVATR</a></li>
				<li class="w-full md:w-fit"><a href="#" class="inline-block md:inline w-full md:w-auto px-2 py-4 md:py-0">Productos</a></li>
				<li class="w-full md:w-fit"><a href="#" class="inline-block md:inline w-full md:w-auto px-2 py-4 md:py-0">¿Quienes somos?</a></li>
				<li class="w-full md:w-fit"><a href="#" class="inline-block md:inline w-full md:w-auto px-2 py-4 md:py-0">Contacto</a></li>
			</ul>
		</nav>

		<a href="#" id="navbar-toggler" class="block md:hidden cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
				<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
			</svg>
		</a>
	</div>
</header>