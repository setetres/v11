<template>
    <section class="section section--veeews">
        <div>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/836850480132886/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-001</a></p>
                <small>1.</small>
            </div>
            <hr>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/223386212415107/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-002</a></p>
                <small>2.</small>
            </div>
            <hr>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/2618475055057992/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-003</a></p>
                <small>3.</small>
            </div>
            <hr>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/594384131433890/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-004</a></p>
                <small>4.</small>
            </div>
            <hr>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/686469515472803/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-005</a></p>
                <small>5.</small>
            </div>
            <hr>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/929622894133566/" class="link" target="_blank" rel="noopener">FEIN</a></p>
                <small>6.</small>
            </div>
            <hr>
            <div class="veeews">
                <p><a href="https://instagram.com/ar/250083476205178/" class="link" target="_blank" rel="noopener">TRVP</a></p>
                <small>7.</small>
            </div>
        </div>
        <div>
            <stories :playlist="playlist" />
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem justo, vehicula vitae turpis non, molestie congue ante. Nulla pretium metus sed lacus accumsan, vitae sagittis dolor efficitur. Fusce aliquam eu elit in suscipit.</small>
        </div>
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
                        poster: '/videos/XXXXXXXOOO-001-0-poster.jpg',
                        src: '/videos/XXXXXXXOOO-001-0.mp4'
                    }, {
                        date: 'XXXXXXXOOO-002',
                        poster: '/videos/XXXXXXXOOO-002-0-poster.jpg',
                        src: '/videos/XXXXXXXOOO-002-0.mp4'
                    }, {
                        date: 'XXXXXXXOOO-003',
                        poster: '/videos/XXXXXXXOOO-003-0-poster.jpg',
                        src: '/videos/XXXXXXXOOO-003-0.mp4'
                    }, {
                        date: 'XXXXXXXOOO-004',
                        poster: '/videos/XXXXXXXOOO-004-0-poster.jpg',
                        src: '/videos/XXXXXXXOOO-004-0.mp4'
                    }, {
                        date: 'XXXXXXXOOO-005',
                        poster: '/videos/XXXXXXXOOO-005-0-poster.jpg',
                        src: '/videos/XXXXXXXOOO-005-0.mp4'
                    }, {
                        date: 'FEIN',
                        poster: '/videos/FEIN-0-poster.jpg',
                        src: '/videos/FEIN-0.mp4'
                    }, {
                        date: 'TRVP',
                        poster: '/videos/TRVP-0-poster.jpg',
                        src: '/videos/TRVP-0.mp4'
                    }]
                }
            }
        },

        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--veeews')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.add('logo--veeews')

                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três — Veeews'
            }
        }
    }
</script>
