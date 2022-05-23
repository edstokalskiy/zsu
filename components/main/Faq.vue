<template>
    <section class="faq">
        <div class="wrapper">
            <h3>{{ $t('faq.title') }}</h3>
            <div class="line"></div>
            <div class="faq__items">
                <div class="faq__item" :class="{ open : item.active == true }" v-for="(item, i) of items" :key="i">
                    <div class="faq__item-header" @click="item.active = !item.active">{{item.title}}
                        <svg class="faq__icon" v-show="!item.active" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.75 20H28.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 11.75V28.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                        </svg>
                        <svg class="faq__icon" v-show="item.active" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#575C64"/>
                            <path d="M11.75 20H28.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                        </svg>
                    </div>
                    <div class="faq__item-content">{{item.descr}}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Faq',
    data() {
        return {
            items: [
                {
                    title: 'А так можна було? Як це працює? Яка схема?',
                    active: false,
                    descr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugit, voluptatem reiciendis, aliquam repellat quod optio veniam libero odit iure vel commodi, accusamus labore maxime dolor. Reprehenderit fuga provident veniam ratione quam impedit nesciunt quo earum, recusandae fugit velit ullam veritatis maxime nulla, eaque quisquam minima voluptas alias possimus tempora?",
                },
                {
                    title: 'Які літаки кращі? Може відразу назбирати та купити найсучасніші апарати? ',
                    active: false,
                    descr: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugit, voluptatem reiciendis, aliquam repellat quod optio veniam libero odit iure vel commodi, accusamus labore maxime dolor. Reprehenderit fuga provident veniam ratione quam impedit nesciunt quo earum, recusandae fugit velit ullam veritatis maxime nulla, eaque quisquam minima voluptas alias possimus tempora?",
                }
            ]
        }
    },
    methods: {},
}
</script>

<style lang="sass">
    .faq
        background: $black
        padding: 120px
        color: $white
        .line
            margin: 24px auto 60px auto
            background: $white
        &__items
            width: 1200px
            margin: 0 auto
        &__item
            border-top: 1px solid $white
            &:last-of-type
                border-bottom: 1px solid $white
        &__item-header
            font-weight: 600
            font-size: 24px
            line-height: 32px
            padding: 36px 0
            cursor: pointer
            position: relative
            padding-right: 60px
        &__icon
            position: absolute
            right: 0
            top: 50%
            transform: translateY(-50%)
        &__item-content
            font-weight: 400
            font-size: 16px
            line-height: 24px
            max-height: 0
            overflow: hidden
        .faq__item
            &.open
                padding-bottom: 32px
                .faq__item-content
                    max-height: 800px
                    transition: max-height .5s ease-in-out

        


</style>
