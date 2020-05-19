<template>
    <div class="application">
        <div class="gutter _pt-0">
            <div class="ooo-container _p-0 _w-100">
                <div class="ooo-row">
                    <div class="ooo-col-lg-3">
                        <hr>
                        <p class="small">v. eleven</p>
                        <h1 class="logo">
                            <nuxt-link to="/">
                                <div class="setetres setetres--loading">
                                    <div class="setetres__letter setetres__letter--s">
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--e">
                                        <div />
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--t">
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--e">
                                        <div />
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--t">
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--r">
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--e">
                                        <div />
                                        <div />
                                    </div>
                                    <div class="setetres__letter setetres__letter--s">
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                </div>
                            </nuxt-link>
                        </h1>
                    </div>
                    <div class="ooo-col-md-9 ooo-col-lg-6">
                        <hr>
                        <p class="small">Content</p>
                        <div class="ooo-row">
                            <div class="ooo-col-6">
                                <nav class="menu">
                                    <ul>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/about" class="link link--internal link--about" active-class="link--active">
                                                        <p class="small">1.</p>
                                                        <span class="link__icon" />
                                                        About
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/archive" class="link link--internal link--archive" active-class="link--active">
                                                        <p class="small">2.</p>
                                                        <span class="link__icon" />
                                                        Archive
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/fein" class="link link--internal link--fein" active-class="link--active">
                                                        <p class="small">3.</p>
                                                        <span class="link__icon" />
                                                        FEIN
                                                        <p class="small _ml-3">New</p>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/inkstarter" class="link link--internal link--inkstarter" active-class="link--active">
                                                        <p class="small">4.</p>
                                                        <span class="link__icon" />
                                                        InkStarter
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="ooo-col-6">
                                <nav class="menu">
                                    <ul>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/lifestream" class="link link--internal link--lifestream" active-class="link--active">
                                                        <p class="small">5.</p>
                                                        <span class="link__icon" />
                                                        Lifestream
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/mncrft" class="link link--internal link--mncrft" active-class="link--active">
                                                        <p class="small">6.</p>
                                                        <span class="link__icon" />
                                                        MNCRFT
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="menu__item">
                                            <div class="reveal reveal--bottom">
                                                <div>
                                                    <nuxt-link to="/xxxxxxxooo" class="link link--internal link--xxxxxxxooo" active-class="link--active">
                                                        <p class="small">7.</p>
                                                        <span class="link__icon" />
                                                        XO
                                                        <p class="small _ml-3">New</p>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="ooo-col-md-3">
                        <hr>
                        <p class="small">Misc.</p>
                        <nav class="menu">
                            <ul>
                                <li class="menu__item _d-flex">
                                    <div class="reveal reveal--bottom">
                                        <div>
                                            <div class="_d-flex _align-items-center">
                                                <input id="dark-mode" type="checkbox" class="dark-mode-checkbox">&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://xxxxxxx.ooo" class="_d-inline-flex" target="_target" rel="noopener"><img alt="XXXXXXXOOO" src="https://img.shields.io/badge/FEIN-OUT_NOW-red" class="_d-block"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <nuxt />
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                var setetres = document.querySelector('.setetres')
                var checkbox = document.querySelector('.dark-mode-checkbox')
                var body = document.body

                checkbox.checked = localStorage.getItem('darkMode') === 'true'

                function bodyClass() {
                    if (checkbox.checked) {
                        body.classList.add('dark-mode')
                    } else {
                        body.classList.remove('dark-mode')
                    }
                }

                checkbox.addEventListener('change', function (event) {
                    localStorage.setItem('darkMode', event.currentTarget.checked)
                    bodyClass()
                })

                setTimeout(function() {
                    bodyClass()

                    setetres.classList.remove('setetres--loading')

                    document.querySelectorAll('.reveal').forEach(function(item) {
                        item.classList.add('reveal--active')
                    })
                }, 500)

                setTimeout(function() {
                    setetres.classList.add('setetres--loaded')
                }, 3000)
            })
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
