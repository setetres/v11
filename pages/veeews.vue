<template>
    <section class="section section--veeews">
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-7">
                        <!-- <hr class="_mt-0"> -->
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">1.</p>
                            </div>
                            <div class="ooo-col-12">
                                XXXXXXXOOO-001
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">2.</p>
                            </div>
                            <div class="ooo-col-12">
                                XXXXXXXOOO-002
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">3.</p>
                            </div>
                            <div class="ooo-col-12">
                                XXXXXXXOOO-003
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">4.</p>
                            </div>
                            <div class="ooo-col-12">
                                XXXXXXXOOO-004
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">4.</p>
                            </div>
                            <div class="ooo-col-12">
                                XXXXXXXOOO-005
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">4.</p>
                            </div>
                            <div class="ooo-col-12">
                                FEIN
                            </div>
                        </div>
                        <hr>
                        <div class="ooo-row">
                            <div class="ooo-col-12">
                                <p class="small _mb-0">4.</p>
                            </div>
                            <div class="ooo-col-12">
                                TRVP
                            </div>
                        </div>
                        <hr>
                        <p>
                            <a href="https://xxxxxxx.ooo" class="link link--external link--button _mr-4" target="_blank" rel="noopener">s</a>
                        </p>
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
