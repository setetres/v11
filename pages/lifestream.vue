<template>
    <section class="section section--lifestream">
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-10">
                        <p class="section__title">
                            We will all join the lifestream... you are no exception.
                        </p>
                    </div>
                    <div class="ooo-col-md-10">
                        <p>
                            Look always to the eternal flow of time which is far greater than the span of human life. It will teach you more, than staying here in the valley... What you will see will eventually become part of the life's dream.
                        </p>
                    </div>
                </div>
            </div>
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-xl-6">
                        <p class="section__title">
                            Under construction
                        </p>
                        <p>
                            More coming soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
        },

        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--lifestream')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.add('logo--lifestream')

                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três — Lifestream'
            }
        }
    }
</script>
