<template>
    <section class="application__content application__content--archive">
        <p class="application__content-title">
            Est 2008.
        </p>
        <p>
            <a href="https://v10.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v10.jpg" alt="Sete Três — v10">
            </a>
        </p>
        <p>
            <a href="https://v9.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v9.jpg" alt="Sete Três — v9">
            </a>
        </p>
        <p>
            <a href="https://v8.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v8.jpg" alt="Sete Três — v8">
            </a>
        </p>
        <p>
            <a href="https://v7.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v7.jpg" alt="Sete Três — v7">
            </a>
        </p>
        <p>
            <a href="https://v6.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v6.jpg" alt="Sete Três — v6">
            </a>
        </p>
        <p>
            <a href="https://v5.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v5.jpg" alt="Sete Três — v5">
            </a>
        </p>
        <p>
            <a href="https://v4.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v4.jpg" alt="Sete Três — v4">
            </a>
        </p>
        <p>
            <a href="https://v3.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v3.jpg" alt="Sete Três — v3">
            </a>
        </p>
        <p>
            <a href="https://v2.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v2.jpg" alt="Sete Três — v2">
            </a>
        </p>
        <p>
            <a href="https://1997.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v1997.jpg" alt="Sete Três — 1997">
            </a>
        </p>
        <p>
            <a href="https://v1.setetres.st" class="link link--frame" target="_blank" rel="noopener">
                <img src="/images/archive-v1.jpg" alt="Sete Três — v1">
            </a>
        </p>
        <small>
            Getting tired.<br>
            Never stop.
        </small>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três — Archive'
            }
        }
    }
</script>
