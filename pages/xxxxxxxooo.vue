<template>
    <div>
        <section class="section section--xxxxxxxooo">
            <div class="cover">
                <div class="gutter">
                    <div class="cover__content">
                        <div id="revue-embed">
                            <form id="revue-form" action="http://ooo.xxxxxxx.ooo/add_subscriber" method="post" name="revue-form" target="_blank">
                                <div class="revue-form-group">
                                    <label for="member_email">Email address</label>
                                    <input id="member_email" class="revue-form-field" placeholder="Your email address" type="email" name="member[email]">
                                </div>
                                <div class="revue-form-actions">
                                    <input id="member_submit" type="submit" value="Subscribe" name="member[subscribe]">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três — XXXXXXXOOO'
            }
        }
    }
</script>
