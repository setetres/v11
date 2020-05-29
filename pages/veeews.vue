<template>
    <section class="section section--veeews">
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-7">
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">1.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0"><a href="https://instagram.com/ar/836850480132886/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-001</a></p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">2.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0"><a href="https://instagram.com/ar/223386212415107/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-002</a></p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">3.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0"><a href="https://instagram.com/ar/2618475055057992/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-003</a></p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">4.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0"><a href="https://instagram.com/ar/594384131433890/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-004</a></p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">5.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0"><a href="https://instagram.com/ar/686469515472803/" class="link" target="_blank" rel="noopener">XXXXXXXOOO-005</a></p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">6.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p class="_m-0"><a href="https://instagram.com/ar/929622894133566/" class="link" target="_blank" rel="noopener">FEIN</a></p>
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">7.</p>
                            </div>
                            <div class="ooo-col-12">
                                <p><a href="https://instagram.com/ar/250083476205178/" class="link" target="_blank" rel="noopener">TRVP</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="ooo-col-md-5">
                        <stories :playlist="playlist" />
                    </div>
                </div>
            </div>
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
