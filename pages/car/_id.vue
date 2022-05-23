<template>
    <div class="img__wrapper">
        <!-- <img src="~/assets/img/car.jpg" alt="Car"> -->
        <svg ref="frame" viewBox="0 0 1918 1439" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_46_39)">
            <rect class="not-active skip" x="0.5" y="0.5" width="960" height="1443" stroke="white"/>
            <rect x="960.5" y="1444.07" width="288.572" height="192" transform="rotate(-90 960.5 1444.07)" stroke="white"/>
            <rect x="1344.5" y="1444.07" width="288.572" height="191" transform="rotate(-90 1344.5 1444.07)" stroke="white"/>
            <rect x="1152.5" y="1444.07" width="288.572" height="192" transform="rotate(-90 1152.5 1444.07)" stroke="white"/>
            <rect x="1535.5" y="1444.07" width="288.572" height="192" transform="rotate(-90 1535.5 1444.07)" stroke="white"/>
            <rect x="1727.5" y="1444.07" width="288.572" height="192" transform="rotate(-90 1727.5 1444.07)" stroke="white"/>
            <rect x="960.5" y="1155.07" width="288.572" height="192" transform="rotate(-90 960.5 1155.07)" stroke="white"/>
            <rect x="1344.5" y="1155.07" width="288.572" height="191" transform="rotate(-90 1344.5 1155.07)" stroke="white"/>
            <rect x="1152.5" y="1155.07" width="288.572" height="192" transform="rotate(-90 1152.5 1155.07)" stroke="white"/>
            <rect x="1535.5" y="1155.07" width="288.572" height="192" transform="rotate(-90 1535.5 1155.07)" stroke="white"/>
            <rect x="1727.5" y="1155.07" width="288.572" height="192" transform="rotate(-90 1727.5 1155.07)" stroke="white"/>
            <rect x="960.5" y="866.072" width="288.572" height="192" transform="rotate(-90 960.5 866.072)" stroke="white"/>
            <rect x="1344.5" y="866.072" width="288.572" height="191" transform="rotate(-90 1344.5 866.072)" stroke="white"/>
            <rect x="1152.5" y="866.072" width="288.572" height="192" transform="rotate(-90 1152.5 866.072)" stroke="white"/>
            <rect x="1535.5" y="866.072" width="288.572" height="192" transform="rotate(-90 1535.5 866.072)" stroke="white"/>
            <rect x="1727.5" y="866.072" width="288.572" height="192" transform="rotate(-90 1727.5 866.072)" stroke="white"/>
            <rect x="960.5" y="577.072" width="288.572" height="192" transform="rotate(-90 960.5 577.072)" stroke="white"/>
            <rect x="1344.5" y="577.072" width="288.572" height="191" transform="rotate(-90 1344.5 577.072)" stroke="white"/>
            <rect x="1152.5" y="577.072" width="288.572" height="192" transform="rotate(-90 1152.5 577.072)" stroke="white"/>
            <rect x="1535.5" y="577.072" width="288.572" height="192" transform="rotate(-90 1535.5 577.072)" stroke="white"/>
            <rect x="1727.5" y="577.072" width="288.572" height="192" transform="rotate(-90 1727.5 577.072)" stroke="white"/>
            <rect x="960.5" y="289.072" width="288.572" height="192" transform="rotate(-90 960.5 289.072)" stroke="white"/>
            <rect x="1344.5" y="289.072" width="288.572" height="191" transform="rotate(-90 1344.5 289.072)" stroke="white"/>
            <rect x="1152.5" y="289.072" width="288.572" height="192" transform="rotate(-90 1152.5 289.072)" stroke="white"/>
            <rect x="1535.5" y="289.072" width="288.572" height="192" transform="rotate(-90 1535.5 289.072)" stroke="white"/>
            <rect x="1727.5" y="289.072" width="288.572" height="192" transform="rotate(-90 1727.5 289.072)" stroke="white"/>
            </g>
            <defs>
            <clipPath id="clip0_46_39">
                <rect class="skip" width="1918" height="1439" fill="white"/>
            </clipPath>
            </defs>
        </svg>

        <div ref="tooltip" class="tooltip">
            tolltip
        </div>


    </div>
</template>

<script>

export default {
    data() {
        return { 
            items: null,
        }
    },
    methods: {
        fillRect() {
            if ( this.items == null ) {
                this.addListener();
                return false;
            }

            let count = this.$refs.frame.querySelectorAll('rect:not(.skip)').length;
            let sold = this.items.length;
            for ( let i = 0; i < sold; i++ ) {
                if ( !this.$refs.frame.querySelectorAll('rect')[(count - 1) - i].classList.contains('skip') ) {
                    this.$refs.frame.querySelectorAll('rect')[count - i].classList.add('disabled');
                    this.$refs.frame.querySelectorAll('rect')[count - i].addEventListener('click', () => {
                        this.$notify({
                            duration: 5000,
                            type: 'success',
                            text: `${this.items[i].text} - 15$`,
                        });
                    })
                }
            }

            this.addListener();
        },

        addListener() {
            let count = this.$refs.frame.querySelectorAll('rect:not(.skip):not(.disabled)').length;

            for ( let i = 0; i < count; i++ ) {
                this.$refs.frame.querySelectorAll('rect')[i].addEventListener('click', () => {
                    this.$notify({
                        duration: 5000,
                        type: 'warn',
                        text: this.$t('cars.free'),
                    });
                })
            }

        },

        setItems() {
            this.items = this.$store.state.cars[this.$route.params.id].items != undefined ? this.$store.state.cars[this.$route.params.id].items : null;
            this.fillRect();
        }
    },
    mounted() {
        this.setItems();
    },

    beforeDestroy() {
        this.$notify({
            clean: true
        })
    }
}
</script>

<style lang="sass" scoped>
    .img__wrapper
        width: 100%
        position: relative
        max-width: 1200px
        margin: 0 auto
        background: url('~@/assets/img/car.jpg') 50% 50% no-repeat
        background-size: cover
        svg
            width: 100%
            height: 100%
            rect
                fill: none
                pointer-events: all
                &.not-active
                    fill: rgb(156 156 156 / 70%)
                &.disabled
                    fill: rgb(57 129 0 / 60%)
                    &:hover
                        fill: $green !important
                &:hover:not(.disabled):not(.not-active)
                    fill: #B4AE7B
    img
        width: 100%
        max-width: 100%
    .tooltip
        position: absolute
        left: -9999px
        opacity: 0
        .show
            opacity: 1
</style>
