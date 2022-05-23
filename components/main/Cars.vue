<template>
    <section class="cars">
        <div class="wrapper">
            <h3>Автомобілі для ЗСУ!</h3>
            <div class="line"></div>
            <div class="cars__container">
                <div class="cars__container-item" v-for="(car, i) of $store.state.cars" :key="i">
                    <nuxt-link :to="localePath(`/car/${car.id}`)">
                        <img :src="car.img" :alt="car.title">
                        <div class="title">{{car.title}}</div>
                    </nuxt-link>
                    <div class="decr">
                        <span>{{car.status}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Cars',
    data() {
        return {
            
        }
    },
    methods: {},
}
</script>

<style lang="sass" scoped>
    .line
        margin: 24px auto 64px auto
    .cars
        &__container
            display: flex
            align-items: flex-start
            flex-wrap: wrap
            gap: 12px
            margin-right: -12px
        &__container-item
            flex: 0 0 calc(33.333% - 12px)
            margin-bottom: 24px
            .title
                margin-bottom: 16px
                display: block
                font-weight: 600
                font-size: 20px
                line-height: 28px
            img
                display: block
                max-width: 100%
                margin-bottom: 16px
            .decr
                margin-bottom: 16px
                font-weight: 400
                font-size: 14px
                line-height: 22px
                border: 1px solid #D8DEE8
                border-radius: 16px
                display: inline-block
                padding: 3px 8px
                vertical-align: middle

</style>
