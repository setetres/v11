<template>
    <section class="application__content section-veeews">
        <div class="veeews-text">
            <p class="application__content-title">
                Clear view.
            </p>
            <p>
                That's all there is at the end. Just as it was at the beginning.
            </p>
            <small>
                From the moment of birth, we all begin to die. Call it divinely planned obsolence. Soon or late, beggar or king, death is the end of all things. While life might be seen as a virus infecting the perfect organism of death.<br>
                - Ø THEOREM
            </small>
        </div>
        <div class="veeews veeews--stories">
            <stories :playlist="playlist" />
        </div>
        <div class="pattern" />
        <div class="veeews veeews--xxxxxxxooo-001">
            <a href="https://instagram.com/ar/836850480132886" class="link link--frame" target="_blank" rel="noopener">
                001
            </a>
        </div>
        <div class="veeews veeews--xxxxxxxooo-002">
            <a href="https://instagram.com/ar/836850480132886" class="link link--frame" target="_blank" rel="noopener">
                002
            </a>
        </div>
        <div class="pattern" />
        <div class="veeews veeews--xxxxxxxooo-004">
            <a href="https://instagram.com/ar/594384131433890" class="link link--frame" target="_blank" rel="noopener">
                004
            </a>
        </div>
        <div class="veeews veeews--xxxxxxxooo-003">
            <a href="https://instagram.com/ar/2618475055057992" class="link link--frame" target="_blank" rel="noopener">
                003
            </a>
        </div>
        <div class="pattern" />
        <div class="veeews veeews--fein">
            <a href="https://instagram.com/ar/929622894133566" class="link link--frame" target="_blank" rel="noopener">
                FEIN
            </a>
        </div>
        <div class="veeews veeews--xxxxxxxooo-005">
            <a href="https://instagram.com/ar/686469515472803" class="link link--frame" target="_blank" rel="noopener">
                005
            </a>
        </div>
        <div class="pattern" />
        <div class="veeews veeews--trvp">
            <a href="https://instagram.com/ar/250083476205178" class="link link--frame" target="_blank" rel="noopener">
                TRVP
            </a>
        </div>
        <div class="veeews veeews--vingtvingt">
            <a href="https://instagram.com/ar/965617350568430" class="link link--frame" target="_blank" rel="noopener">
                2020
            </a>
        </div>
        <small>
            Having fun.<br>
            More coming soon.
        </small>
    </section>
</template>
<script>
    import Stories from '~/components/stories/stories.vue'

    export default {
        components: {
            Stories
        },

        data() {
            return {
                playlist: {
                    title: 'setetres',
                    stories: [{
                        date: 'XXXXXXXOOO-001',
                        poster: '/videos/XXXXXXXOOO-001-poster.jpg',
                        src: '/videos/XXXXXXXOOO-001.mp4'
                    }, {
                        date: 'XXXXXXXOOO-002',
                        poster: '/videos/XXXXXXXOOO-002-poster.jpg',
                        src: '/videos/XXXXXXXOOO-002.mp4'
                    }, {
                        date: 'XXXXXXXOOO-003',
                        poster: '/videos/XXXXXXXOOO-003-poster.jpg',
                        src: '/videos/XXXXXXXOOO-003.mp4'
                    }, {
                        date: 'XXXXXXXOOO-004',
                        poster: '/videos/XXXXXXXOOO-004-poster.jpg',
                        src: '/videos/XXXXXXXOOO-004.mp4'
                    }, {
                        date: 'XXXXXXXOOO-005',
                        poster: '/videos/XXXXXXXOOO-005-poster.jpg',
                        src: '/videos/XXXXXXXOOO-005.mp4'
                    }, {
                        date: 'FEIN',
                        poster: '/videos/FEIN-poster.jpg',
                        src: '/videos/FEIN.mp4'
                    }, {
                        date: 'TRVP',
                        poster: '/videos/TRVP-poster.jpg',
                        src: '/videos/TRVP.mp4'
                    }, {
                        date: '𝐕𝐈𝐍𝐆𝐓𝐕𝐈𝐍𝐆𝐓',
                        poster: '/videos/VINGTVINGT-poster.jpg',
                        src: '/videos/VINGTVINGT.mp4'
                    }]
                }
            }
        },

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
                title: 'Sete Três — Veeews'
            }
        }
    }
</script>
