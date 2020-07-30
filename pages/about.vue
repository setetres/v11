<template>
    <section class="application__content application__content--about">
        <p class="application__content-title">
            Born and raised in São Paulo now living in Belo Horizonte, Brazil.
        </p>
        <p class="application__content-title">
            Currently working as a Product Designer at <a href="https://hotmart.com" class="link" target="_blank" rel="noopener">Hotmart</a>,
            Tattoo Artist at <a href="https://inkstarter.xxxxxxx.ooo" class="link" target="_blank" rel="noopener">InkStarter</a>
            and also a member of the <a href="https://awwwards.com" class="link" target="_blank" rel="noopener">Awwwards</a> Jury.
        </p>
        <p>
            I'm also changing profile pictures on <a href="https://facebook.com/setetres" class="link" target="_blank" rel="noopener">Facebook</a>,
            travelling and taking photos on <a href="https://instagram.com/setetres" class="link" target="_blank" rel="noopener">Instagram</a>,
            writing code on <a href="https://github.com/setetres" class="link" target="_blank" rel="noopener">GitHub</a>,
            creating <nuxt-link to="/music" class="link">music</nuxt-link>,
            running a weekly <nuxt-link to="/xxxxxxxooo" class="link">newsletter</nuxt-link>,
            behaving professionally on <a href="https://linkedin.com/in/setetres" class="link" target="_blank" rel="noopener">LinkedIn</a>
            and doing nothing on <a href="https://twitter.com/setetres" class="link" target="_blank" rel="noopener">Twitter</a>.
        </p>
        <small>
            Thanks.<br>
            Guilherme Pangnotta.
        </small>
        <p>
            <svg viewBox="0 0 558.6 252.2" class="sttrs-svg" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1,187.4 c0,0,20-14.6,29.2-56.9c5.4-24.9-23.5-31.2-10.5-8.9c7.5,12.8,67,48.9,54.9,86.2C89.3,249,10.8,254,10,218.7 c-0.6-28,83.3,39.9,131.1-6.1c32-30.9,87-263.3,57.4-181.5c-9.2,25.5-60,201.3-25.8,197.7C225.2,223.2,288-56.8,258.5,25 c-9.2,25.5-61.8,201.5-29.2,198c26.8-2.8,64.7-103.2,74.2-125c9.5-21.8-23.5-6.8-12.9,3.7s48.2,7.2,65.8-2.9c1.8-1,3.5,0.9,2.3,2.6 c-32.4,46.5-53.2,92.7-33.7,100.6c37.6,15.2,94-69.6,106.8-109.8c12.8-40.2-20.6-22.4-7.6-0.2c7.5,12.8,64.1,40.2,52,77.4 c-13.4,41.3-82.1,41.2-72.8,10.2c8.3-27.7,89.1,62.2,145.2-34.8" />
                <line x1="128.1" y1="71.4" x2="413.8" y2="26.4" />
            </svg>
        </p>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três — About'
            }
        }
    }
</script>
