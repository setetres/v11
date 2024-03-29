/* eslint-disable */

export default ({ app }) => {
    (function() {
        var sc = document.createElement('script')
        sc.type = 'text/javascript'
        sc.async = true
        sc.src = '//setetres.s3.amazonaws.com/setetres.st/js/dp.js'
        var s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(sc, s)
    })()

    if (process.env.NODE_ENV !== 'production') return

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

    ga('create', 'UA-6977973-1', 'auto')

    app.router.afterEach((to, from) => {
        ga('set', 'page', to.fullPath)
        ga('send', 'pageview')
    })
}
