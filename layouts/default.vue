<template>
    <main class="application">
        <nuxt />
        <aside class="application__sidebar">
            <header>
                <h1 class="application__logo">
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
            </header>
            <nav class="application__sidebar-menu">
                <ul>
                    <li>
                        <nuxt-link to="/about" class="link link--about" active-class="link--active">
                            <span tabindex="-1">
                                <small>1.</small>
                                <span class="link__icon" />
                                About
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/archive" class="link link--archive" active-class="link--active">
                            <span tabindex="-1">
                                <small>2.</small>
                                <span class="link__icon" />
                                Archive
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/inkstarter" class="link link--inkstarter" active-class="link--active">
                            <span tabindex="-1">
                                <small>3.</small>
                                <span class="link__icon" />
                                InkStarter
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/lifestream" class="link link--lifestream" active-class="link--active">
                            <span tabindex="-1">
                                <small>4.</small>
                                <span class="link__icon" />
                                Lifestream
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/mncrft" class="link link--mncrft" active-class="link--active">
                            <span tabindex="-1">
                                <small>5.</small>
                                <span class="link__icon" />
                                MNCRFT
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/music" class="link link--music" active-class="link--active">
                            <span tabindex="-1">
                                <small>6.</small>
                                <span class="link__icon" />
                                Music
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/veeews" class="link link--veeews" active-class="link--active">
                            <span tabindex="-1">
                                <small>7.</small>
                                <span class="link__icon" />
                                Veeews
                            </span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/xxxxxxxooo" class="link link--xxxxxxxooo" active-class="link--active">
                            <span tabindex="-1">
                                <small>8.</small>
                                <span class="link__icon" />
                                XO
                            </span>
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <input id="dark-mode" type="checkbox" class="dark-mode-checkbox">
        </aside>
    </main>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                var setetres = document.querySelector('.setetres')
                var checkbox = document.querySelector('.dark-mode-checkbox')
                var body = document.body

                checkbox.checked = localStorage.getItem('darkModeST') === 'true'

                function bodyClass() {
                    if (checkbox.checked) {
                        document.getElementsByTagName( 'html' )[0].classList.add('dark-mode')
                    } else {
                        document.getElementsByTagName( 'html' )[0].classList.remove('dark-mode')
                    }
                }

                checkbox.addEventListener('change', function (event) {
                    localStorage.setItem('darkModeST', event.currentTarget.checked)
                    bodyClass()
                })

                bodyClass()

                setTimeout(function() {
                    setetres.classList.remove('setetres--loading')

                    document.querySelectorAll('.reveal').forEach(function(item) {
                        item.classList.add('reveal--active')
                    })
                }, 100)

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
