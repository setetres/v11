<template>
    <section class="section section--home">
        <div class="gutter">
            <div class="ooo-container _p-0 _w-100">
                <img src="/images/home.jpg" height="auto" class="_d-block _w-100">
            </div>
        </div>
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
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
