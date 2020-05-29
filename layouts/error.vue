<template>
    <section class="section section--error">
        <div class="ooo-container-fluid _p-0">
            <div class="gutter">
                <div class="ooo-row">
                    <div class="ooo-col-xl-6">
                        <p v-if="error.statusCode === 404" class="section__title _mb-0">Page not found</p>
                        <p v-else class="section__title _mb-0">An error occurred</p>
                    </div>
                </div>
            </div>
        </div>
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
