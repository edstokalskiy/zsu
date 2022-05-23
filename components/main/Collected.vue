<template>
    <section class="collected">
        <div class="wrapper">
            <div class="collected__container">
                <h3>{{ $t('collected.title') }}!</h3>
                <div class="line"></div>
                <div class="sums">
                    $ <span>217 600</span> {{ $t('collected.or') }} <span>6 989 312</span> ₴
                </div>
                <p>{{ $t('collected.descr') }} 10 травня 2022 року</p>
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
    .collected
        background: $green
        color: $white
        padding: 120px 0
        .wrapper
            display: flex
            align-items: center
            justify-content: center
        &__container
            max-width: 700px
            text-align: center
        h3
            font-weight: 600
            font-size: 56px
            line-height: 64px
        .line
            width: 80px
            height: 2px
            background: $white
            margin: 24px auto
        .sums
            font-weight: 600
            font-size: 56px
            line-height: 64px
            margin-bottom: 16px
</style>
