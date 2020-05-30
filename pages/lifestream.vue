<template>
    <section class="section section--lifestream">
        <p class="section__title">We will all join the lifestream... you are no exception.</p>
        <p>Look always to the eternal flow of time which is far greater than the span of human life. It will teach you more, than staying here in the valley... What you will see will eventually become part of the life's dream.</p>
        <p class="section__title">Under construction.</p>
        <p>More coming soon.</p>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--lifestream')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.add('logo--lifestream')

                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três — Lifestream'
            }
        }
    }
</script>
