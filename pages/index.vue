<template>
    <section class="application__content application__content--home">
        <p>
            <img src="/images/home.jpg" alt="Samambaia" width="3024" height="4032">
        </p>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
