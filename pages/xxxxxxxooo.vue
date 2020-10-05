<template>
    <section class="application__content application__content--xxxxxxxooo">
        <div class="application__content-cover">
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
        <p class="application__content-title">
            Weekly newsletter.
        </p>
        <small>
            Every friday.<br>
            10:00AM BRT.
        </small>
    </section>
</template>
<script>
    export default {

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três — XXXXXXXOOO'
            }
        },
        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
