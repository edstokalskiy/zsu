<template>
	<div>
		<Banner />

		<!-- <Photo /> -->

		<About />

		<Cars />

		<Collected />

		<Faq/>

		<section class="contact">
			<div class="wrapper">
				<h3>{{ $t('contact') }}</h3>
				<div class="line"></div>
				<div class="btns">
					<a href="mailto:info@buymeafighterjet.com" class="btn">info@buymeafighterjet.com</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Main'
	}
</script>


<style lang="sass">

</style>
