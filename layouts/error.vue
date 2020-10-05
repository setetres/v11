<template>
    <section class="application__content application__content--error">
        <p v-if="error.statusCode === 404">
            Page not found
        </p>
        <p v-else>
            An error occurred
        </p>
        <small>
            <nuxt-link to="/" class="link">
                Go back
            </nuxt-link>
        </small>
    </section>
</template>
<script>
    export default {

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                next()
            }, 100)
        },
        props: {
            error: {
                type: Object,
                default: () => {}
            }
        },

        head() {
            return {
                title: 'Sete Três — Error'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
