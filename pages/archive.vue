<template>
    <section class="section section--archive">
        <a href="https://v1.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v1.jpg" class="image-hover" alt="Sete Três — v1">
        </a>
        <a href="https://1997.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v1997.jpg" class="image-hover" alt="Sete Três — 1997">
        </a>
        <a href="https://v2.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v2.jpg" class="image-hover" alt="Sete Três — v2">
        </a>
        <a href="https://v3.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v3.jpg" class="image-hover" alt="Sete Três — v3">
        </a>
        <a href="https://v4.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v4.jpg" class="image-hover" alt="Sete Três — v4">
        </a>
        <a href="https://v5.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v5.jpg" class="image-hover" alt="Sete Três — v5">
        </a>
        <a href="https://v6.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v6.jpg" class="image-hover" alt="Sete Três — v6">
        </a>
        <a href="https://v7.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v7.jpg" class="image-hover" alt="Sete Três — v7">
        </a>
        <a href="https://v8.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v8.jpg" class="image-hover" alt="Sete Três — v8">
        </a>
        <a href="https://v9.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v9.jpg" class="image-hover" alt="Sete Três — v9">
        </a>
        <a href="https://v10.setetres.st" class="link link--external" target="_blank" rel="noopener">
            <img src="/images/archive-v10.jpg" class="image-hover" alt="Sete Três — v10">
        </a>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--archive')
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.remove('logo--archive')

                next()
            }, 100)
        },

        head() {
            return {
                title: 'Sete Três — Archive'
            }
        }
    }
</script>
