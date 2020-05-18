<template>
    <section class="section section--archive">
        <div class="gutter">
            <div class="ooo-container-fluid _p-0 _w-100">
                <div class="ooo-row">
                    <div class="ooo-col-xl-7">
                        <a href="https://v1.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v1.jpg" alt="Sete Três — v1" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-5">
                        <a href="https://1997.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v1997.jpg" alt="Sete Três — 1997" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-5">
                        <a href="https://v2.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v2.jpg" alt="Sete Três — v2" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-7">
                        <a href="https://v3.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v3.jpg" alt="Sete Três — v3" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-6">
                        <a href="https://v4.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v4.jpg" alt="Sete Três — v4" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-6">
                        <a href="https://v5.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v5.jpg" alt="Sete Três — v5" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-8">
                        <a href="https://v6.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v6.jpg" alt="Sete Três — v6" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-4">
                        <a href="https://v7.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v7.jpg" alt="Sete Três — v7" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-4">
                        <a href="https://v8.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v8.jpg" alt="Sete Três — v8" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-8">
                        <a href="https://v9.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v9.jpg" alt="Sete Três — v9" class="_w-100"></a>
                    </div>
                    <div class="ooo-col-xl-12">
                        <a href="https://v10.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v10.jpg" alt="Sete Três — v10" class="_w-100 _mb-0"></a>
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
                document.querySelector('.logo').classList.add('logo--archive')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.remove('logo--archive')

                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três — Archive'
            }
        }
    }
</script>
