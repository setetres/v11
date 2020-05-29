<template>
    <section class="section section--about">
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-12">
                        <p class="section__title">
                            Hello, my name is Guilherme Pangnotta.
                        </p>
                        <p class="section__title">
                            Born and raised in São Paulo now living in Belo Horizonte, Brazil.
                        </p>
                    </div>
                    <div class="ooo-col-12">
                        <p class="section__title">
                            Currently working as a Product Designer at <a class="link link--external" href="https://hotmart.com" target="_blank" rel="noopener">Hotmart</a>, Tattoo Artist at <a class="link link--external" href="https://inkstarter.xxxxxxx.ooo" target="_blank" rel="noopener">InkStarter</a> and also a member of the <a class="link link--external" href="https://awwwards.com" target="_blank" rel="noopener">Awwwards</a> Jury.
                        </p>
                    </div>
                    <div class="ooo-col-12">
                        <p>
                            I'm also changing profile pictures on <a class="link link--external" href="https://facebook.com/setetres" target="_blank" rel="noopener">Facebook</a>,
                            travelling and taking photos on <a class="link link--external" href="https://instagram.com/setetres" target="_blank" rel="noopener">Instagram</a>,
                            writing code on <a class="link link--external" href="https://github.com/setetres" target="_blank" rel="noopener">GitHub</a>,
                            behaving professionally on <a class="link link--external" href="https://linkedin.com/in/setetres" target="_blank" rel="noopener">LinkedIn</a>
                            and doing nothing on <a class="link link--external" href="https://twitter.com/setetres" target="_blank" rel="noopener">Twitter</a>.
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
                document.querySelector('.logo').classList.add('logo--about')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.remove('logo--about')

                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três — About'
            }
        }
    }
</script>
