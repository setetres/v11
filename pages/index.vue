<template>
    <section class="section section--home">
        <img src="/images/home.jpg" class="_d-block _w-100" width="3024" height="auto">
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
