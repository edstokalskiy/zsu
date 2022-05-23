<template>
    <section class="banner">
        <div class="wrapper">
            <img class="logo" src="~/assets/img/logo.svg" width="240" alt="Logo">
            <h1>{{ $t('banner.title') }}</h1>
            <p>{{ $t('banner.descr') }}</p>
            <div class="langs">
				<nuxt-link :class="{ active : $i18n.locale == 'uk' }" :to="switchLocalePath('uk')">{{ $t('lang.uk') }}</nuxt-link>
      			<nuxt-link :class="{ active : $i18n.locale == 'en' }" :to="switchLocalePath('en')">{{ $t('lang.en') }}</nuxt-link>
			</div>
            <div class="btns">
                <div class="btn">{{ $t('btns.add') }}</div>
                <div class="btn transprent">{{ $t('btns.how') }}</div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    methods: {},
}
</script>

<style lang="sass">
    .banner
        height: 100vh
        width: 100%
        background: linear-gradient(to right, rgba(15, 15, 17, 0.48), rgba(15, 15, 17, 0.48)), url('~@/assets/img/banner.jpg') 50% 50% no-repeat
        background-size: cover
        margin: 0
        position: relative
        color: $white
        .logo
            margin-bottom: 4.3057050592034445vh //40px
        h1
            font-weight: 600
            font-size: 56px
            line-height: 64px
            margin-bottom: 2.583423035522067vh //24px
            max-width: 820px
            text-align: center
            
        p
            font-weight: 600
            font-size: 20px
            line-height: 28px
            max-width: 820px
            text-align: center
            margin-bottom: 4.3057050592034445vh //40px
        .langs
            margin-bottom: 4.3057050592034445vh //40px
        .wrapper
            display: flex
            align-items: center
            height: 100%
            justify-content: center
            flex-direction: column
            z-index: 2
</style>
