<template>
    <section class="section section--music">
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-3">
                        <img src="/images/triceracough.png" class="_w-100" height="auto">
                        <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem justo, vehicula vitae turpis non, molestie congue ante. Nulla pretium metus sed lacus accumsan, vitae sagittis dolor efficitur. Fusce aliquam eu elit in suscipit.</p>
                    </div>
                    <div class="ooo-col-md-9">
                        <p class="section__title _m-0">
                            TRICERACOUGH
                        </p>
                        <p class="small">2020 — by XXXXXXXOOO</p>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12 _d-flex _justify-content-between">
                                <p class="small _m-0">1.</p>
                                <p class="small _m-0 _text-right">3:34</p>
                            </div>
                            <div class="ooo-col-12">
                                TRICERACOUGH
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
                        <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem justo, vehicula vitae turpis non, molestie congue ante. Nulla pretium metus sed lacus accumsan, vitae sagittis dolor efficitur. Fusce aliquam eu elit in suscipit.</p>
                    </div>
                    <div class="ooo-col-md-9">
                        <p class="section__title _m-0">
                            FEIN
                        </p>
                        <p class="small">2020 — by XXXXXXXOOO</p>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12 _d-flex _justify-content-between">
                                <p class="small _m-0">1.</p>
                                <p class="small _m-0 _text-right">2:38</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0">QUATRE-VINGT-DIX-NEUF</p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12 _d-flex _justify-content-between">
                                <p class="small _m-0">2.</p>
                                <p class="small _m-0 _text-right">2:19</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0">COWEED-19</p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12 _d-flex _justify-content-between">
                                <p class="small _m-0">3.</p>
                                <p class="small _m-0 _text-right">2:34</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0">XD</p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12 _d-flex _justify-content-between">
                                <p class="small _m-0">4.</p>
                                <p class="small _m-0 _text-right">2:45</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0">BANJO</p>
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
