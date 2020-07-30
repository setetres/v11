<template>
    <section class="section section--error">
        <p v-if="error.statusCode === 404" class="section__title _m-0">Page not found</p>
        <p v-else class="section__title _m-0">An error occurred</p>
    </section>
</template>
<script>
    export default {
        props: {
            error: {
                type: Object,
                default: () => {}
            }
        },

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
                title: 'Sete Três — Error'
            }
        }
    }
</script>
