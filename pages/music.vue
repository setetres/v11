<template>
    <section class="section section--music">
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-3">
                        <img src="/images/triceracough.png" class="_w-100" height="auto">
                    </div>
                    <div class="ooo-col-md-9">
                        <p class="section__title _mb-0">
                            TRICERACOUGH
                        </p>
                        <p class="small">2020 — by XXXXXXXOOO</p>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">1.</p>
                            </div>
                            <div class="ooo-col-8">
                                TRICERACOUGH
                            </div>
                            <div class="ooo-col-4">
                                <p class="small _mb-0 _text-right">3:34</p>
                            </div>
                        </div>
                        <hr>
                        <p>
                            <a href="https://xxxxxxx.ooo" class="link link--external link--button _mr-4" target="_blank" rel="noopener">Listen now</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-3">
                        <img src="/images/fein.png" class="_w-100" height="auto">
                    </div>
                    <div class="ooo-col-md-9">
                        <p class="section__title _mb-0">
                            FEIN
                        </p>
                        <p class="small">2020 — by XXXXXXXOOO</p>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">1.</p>
                            </div>
                            <div class="ooo-col-8">
                                QUATRE-VINGT-DIX-NEUF
                            </div>
                            <div class="ooo-col-4">
                                <p class="small _mb-0 _text-right">2:38</p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">2.</p>
                            </div>
                            <div class="ooo-col-8">
                                COWEED-19
                            </div>
                            <div class="ooo-col-4">
                                <p class="small _mb-0 _text-right">2:19</p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">3.</p>
                            </div>
                            <div class="ooo-col-8">
                                XD
                            </div>
                            <div class="ooo-col-4">
                                <p class="small _mb-0 _text-right">2:34</p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">4.</p>
                            </div>
                            <div class="ooo-col-8">
                                BANJO
                            </div>
                            <div class="ooo-col-4">
                                <p class="small _mb-0 _text-right">2:45</p>
                            </div>
                        </div>
                        <hr>
                        <p>
                            <a href="https://xxxxxxx.ooo" class="link link--external link--button _mr-4" target="_blank" rel="noopener">Listen now</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--music')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.add('logo--music')

                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três — Music'
            }
        }
    }
</script>
