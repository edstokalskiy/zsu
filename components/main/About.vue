<template>
    <section class="about">
        <div class="wrapper">
            <div class="about__container">
                <div class="about__container-item about__img-wrapper">
                    <img width="486" src="~/assets/img/about.jpg" alt="About" class="about__image">
                </div>
                <div class="about__container-item about__text">
                    <h3>{{ $t('about.title.text') }} <span>{{ $t('about.title.span') }}!</span></h3>
                    <div class="line"></div>
                    <p class="about__paragraph" v-for="(item, i) of $t('about.descr')" :key="i">{{ item }}</p>
                    <div class="btns">
                        <div class="btn">{{ $t('btns.add') }}</div>
                        <div class="btn transprent">{{ $t('btns.how') }}</div>
                    </div>
                </div>
            </div>

            <!-- <div>
                <nuxt-link v-for="post of $store.state.posts" :key="post.id" :to="`/blog/${post.id}`">{{ post.title }}</nuxt-link>
            </div> -->
        </div>
    </section>
</template>

<script>

export default {
    name: 'About',
    methods: {},
}
</script>

<style lang="sass" scoped>
    .about
        h3
            margin: 0
            font-weight: 600
            font-size: 48px
            line-height: 56px
            span
                color: $green
        &__paragraph
            margin-bottom: 40px
            &:last-of-type
                margin-bottom: 0
        &__container
            display: flex
            align-items: center
            justify-content: space-between
        &__container-item
            width: 50%
            img
                display: block
                max-width: 100%
                margin: 0 auto
        &__paragraph
            max-width: 588px
            font-weight: 400
            font-size: 14px
            line-height: 22px
            color: $grayDark
            &:last-of-type
                margin-bottom: 24px
    .btns
        justify-content: flex-start
        .btn
            &.transprent
                color: $black
                border-color: $black
                &:hover
                    background: $grayDark
                    color: $white
</style>
