<template>
    <section class="application__content application__content--lifestream">
        <p class="application__content-title">
            We will all join the lifestream... you are no exception.
        </p>
        <p>
            Look always to the eternal flow of time which is far greater than the span of human life. It will teach you more, than staying here in the valley... What you will see will eventually become part of the life's dream.
        </p>
        <small>
            Under construction.<br>
            More coming soon.
        </small>
    </section>
</template>
<script>
    export default {

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três — Lifestream'
            }
        },
        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
