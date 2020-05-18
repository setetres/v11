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
                document.querySelector('.logo').classList.add('logo--home')

                document.querySelectorAll('.reveal').forEach(function(item) {
                    item.classList.add('reveal--active')
                })
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.add('logo--home')

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
