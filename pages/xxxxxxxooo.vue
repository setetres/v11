<template>
    <section class="section section--xxxxxxxooo">
        <div class="cover">
            <div class="cover__content">
                <div id="revue-embed">
                    <form id="revue-form" action="http://ooo.xxxxxxx.ooo/add_subscriber" method="post" name="revue-form" target="_blank">
                        <label for="member_email">Email address</label>
                        <input id="member_email" placeholder="Your email address" type="email" name="member[email]" required>
                        <input id="member_submit" type="submit" value="Subscribe" name="member[subscribe]">
                    </form>
                </div>
            </div>
        </div>
        <small>Weekly newsletter. Every friday. 10:00AM BRT.</small>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--xxxxxxxooo')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.remove('logo--xxxxxxxooo')

                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três — XXXXXXXOOO'
            }
        }
    }
</script>
