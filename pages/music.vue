<template>
    <section class="section section--music">
        <div class="music">
            <div>
                <a href="https://xxxxxxx.ooo" target="_blank" rel="noopener"><img src="/images/triceracough.png" width="auto" height="auto"></a>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem justo, vehicula vitae turpis non, molestie congue ante. Nulla pretium metus sed lacus accumsan, vitae sagittis dolor efficitur. Fusce aliquam eu elit in suscipit.</small>
                <div class="music__links">
                    <small>
                        <a href="https://bit.ly/TRICERACOUGHAPPLEMUSIC" class="link">Listen on  Music</a><br>
                        <a href="https://bit.ly/TRICERACOUGHDEEZER" class="link">Listen on Deezer</a><br>
                        <a href="https://bit.ly/TRICERACOUGHOUTNOW" class="link">Listen on Spotify</a><br>
                        <a href="https://bit.ly/TRICERACOUGHTIDAL" class="link">Listen on Tidal</a>
                    </small>
                </div>
            </div>
            <div>
                <div class="music__info">
                    <p class="section__title">TRICERACOUGH</p>
                    <small>2020 — by XXXXXXXOOO</small>
                </div>
                <hr>
                <div class="music__track">
                    <div>
                        <small>1.</small>
                        <small>3:34</small>
                    </div>
                    <p>TRICERACOUGH</p>
                </div>
                <p><a href="https://xxxxxxx.ooo" class="link link--button link--external" target="_blank" rel="noopener">Listen now</a></p>
            </div>
        </div>
        <hr>
        <div class="music">
            <div>
                <a href="https://xxxxxxx.ooo" target="_blank" rel="noopener"><img src="/images/fein.png" width="auto" height="auto"></a>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem justo, vehicula vitae turpis non, molestie congue ante. Nulla pretium metus sed lacus accumsan, vitae sagittis dolor efficitur. Fusce aliquam eu elit in suscipit.</small>
                <div class="music__links">
                    <small>
                        <a href="https://bit.ly/FEINAPPLEMUSIC" class="link">Listen on  Music</a><br>
                        <a href="https://bit.ly/FEINDEEZER" class="link">Listen on Deezer</a><br>
                        <a href="https://bit.ly/FEINOUTNOW" class="link">Listen on Spotify</a><br>
                        <a href="https://bit.ly/FEINTIDAL" class="link">Listen on Tidal</a><br>
                        <a href="https://bit.ly/FEINYOUTUBE" class="link">Listen on YouTube</a>
                    </small>
                </div>
            </div>
            <div>
                <div class="music__info">
                    <p class="section__title">FEIN</p>
                    <small>2020 — by XXXXXXXOOO</small>
                </div>
                <hr>
                <div class="music__track">
                    <div>
                        <small>1.</small>
                        <small>2:38</small>
                    </div>
                    <p>QUATRE-VINGT-DIX-NEUF</p>
                </div>
                <hr>
                <div class="music__track">
                    <div>
                        <small>2.</small>
                        <small>2:19</small>
                    </div>
                    <p>COWEED-19</p>
                </div>
                <hr>
                <div class="music__track">
                    <div>
                        <small>3.</small>
                        <small>2:34</small>
                    </div>
                    <p>XD</p>
                </div>
                <hr>
                <div class="music__track">
                    <div>
                        <small>4.</small>
                        <small>2:45</small>
                    </div>
                    <p>BANJO</p>
                </div>
                <p><a href="https://xxxxxxx.ooo" class="link link--button link--external" target="_blank" rel="noopener">Listen now</a></p>
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
