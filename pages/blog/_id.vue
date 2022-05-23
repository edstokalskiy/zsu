<template>
    <div>
        <div class="wrapper">
            <div v-if="post">
                <h1>{{ post.title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return { 
            post: null,
        }
    },
    methods: {},
    mounted() {
        this.post = this.$store.state.posts[this.$route.params.id];
    }
}
</script>

<style lang="sass">

</style>
