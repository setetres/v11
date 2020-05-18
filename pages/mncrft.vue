<template>
    <section class="section section--mncrft">
        <div class="cover">
            <div class="gutter">
                <div class="cover__content">
                    <div id="skin" />
                    <span class="cover__signature">refresh gang</span>
                </div>
            </div>
        </div>
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-md-11">
                        <p class="section__title">
                            Got stung by the Minecraft fever.
                        </p>
                        <p class="section__title">
                            Building a (Yet Another) Minecraft City.
                        </p>
                    </div>
                    <div class="ooo-col-12">
                        <p>
                            I'm not trying to be a <em>Redstone Mad Scientist</em> or a <em>1:1 Scale 3D Pixel Art Freaking Builder</em>. This is not an attempt to become a Minecraft professional. I'm just trying to have fun. Everything here is a work in progress and nothing will ever be finished. Might add other screenshots and/or projects, who knows...
                        </p>
                    </div>
                </div>
                <div class="ooo-row">
                    <div class="ooo-col-12">
                        <p>
                            <a href="http://bit.ly/XXXXXXXOOOCITY001" class="link link--external link--button _mr-4" target="_blank" rel="noopener">Download 0.0.1</a>
                            <em>Latest version</em>
                        </p>
                        <p class="small _mb-0">*for Minecraft 1.14.4 (shader compatibility).</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter">
            <div class="ooo-container-fluid _p-0">
                <img src="/images/mncrft-01.jpg" width="2560" height="1440">
            </div>
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-xl-5">
                        <img src="/images/mncrft-02.jpg" width="2560" height="1440">
                    </div>
                    <div class="ooo-col-xl-7">
                        <img src="/images/mncrft-03.jpg" width="2560" height="1440">
                    </div>
                    <div class="ooo-col-xl-6">
                        <img src="/images/mncrft-04.jpg" width="2560" height="1440">
                    </div>
                    <div class="ooo-col-xl-6">
                        <img src="/images/mncrft-05.jpg" width="2560" height="1440">
                    </div>
                    <div class="ooo-col-12">
                        <img src="/images/mncrft-06.jpg" width="2560" height="1440" class="_mb-0">
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter">
            <div class="ooo-container _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-12">
                        <p class="section__title">
                            Changelog
                        </p>
                        <p><strong>Version 0.0.1</strong></p>
                        <ul>
                            <li>Spawn at 0, 1, 0 (Ground Zero);</li>
                            <li>
                                Points of interest:
                                <ul>
                                    <li>
                                        <strong>Added:</strong> Avenues and first roads, Hotel, City Map, Tiki Bar, Flying Balloon, Abandoned Observatory, Gas Station, Flower Shop, Construction building with crane;
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
        },

        mounted() {
            this.$nextTick(() => {
                document.querySelector('.logo').classList.add('logo--mncrft')

                var skinview3d = require('skinview3d')
                var skinViewer, control, handles = {}
                var skinParts = {}

                var skinCollection = [
                    '/images/fit-boy.png',
                    '/images/gore-boy.png',
                    '/images/jogging-boy.png',
                    '/images/summer-boy.png'
                ]
                var chooseSkin = skinCollection[
                    Math.floor( Math.random() * skinCollection.length )
                ]

                function initSkinViewer() {
                    if (skinViewer instanceof skinview3d.SkinViewer) {
                        skinViewer.dispose()
                        handles = {}
                        control = undefined
                    }

                    skinViewer = new skinview3d.SkinViewer({
                        domElement: document.getElementById("skin"),
                        width: 600,
                        height: 600,
                        skinUrl: chooseSkin
                    })

                    skinViewer.camera.position.z = 55
                    skinViewer.animation = new skinview3d.CompositeAnimation()

                    control = skinview3d.createOrbitControls(skinViewer)
                    control.enableZoom = false
                    control.enablePan = false

                    var parts = skinViewer.playerObject.skin

                    skinParts.head = parts.head.innerLayer
                    skinParts.body = parts.body.innerLayer
                    skinParts.leftArm = parts.leftArm.innerLayer
                    skinParts.rightArm = parts.rightArm.innerLayer
                    skinParts.leftLeg = parts.leftLeg.innerLayer
                    skinParts.rightLeg = parts.rightLeg.innerLayer
                }

                function walk() {
                    if (handles.run) {
                        handles.run.remove()
                        delete handles.run
                    }
                    handles.walk = handles.walk || skinViewer.animations.add(skinview3d.WalkingAnimation)
                }

                function rotate() {
                    if (handles.rotate) {
                        handles.rotate.paused = !handles.rotate.paused
                    } else {
                        handles.rotate = skinViewer.animations.add(skinview3d.RotatingAnimation)
                    }
                }

                initSkinViewer()
                walk()
                rotate()
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                document.querySelector('.logo').classList.remove('logo--mncrft')

                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três — MNCRFT'
            }
        }
    }
</script>
