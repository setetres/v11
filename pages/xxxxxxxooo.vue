<template>
    <section class="section section--xxxxxxxooo">
        <div class="cover">
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
        <hr>
        <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel volutpat purus. Cras eu aliquet nunc. Morbi hendrerit tincidunt tortor, ac dapibus elit maximus a. Mauris pharetra rutrum metus nec fermentum. Ut vestibulum iaculis enim sed vehicula.
        </small>
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
