<template>
    <section class="application__content application__content--mncrft">
        <div class="application__content-cover">
            <div id="skin" class="skin" />
        </div>
        <p class="application__content-title">
            Life with shaders.
        </p>
        <p>
            I'm not trying to be a <em>Redstone Mad Scientist</em> or a <em>1:1 Scale 3D Pixel Art Freaking Builder</em>. This is not an attempt to become a Minecraft professional. Everything here is a work in progress. Might add other screenshots, who knows...
        </p>
        <p>
            <img src="/images/mncrft-01.jpg" alt="Minecraft Screenshot">
        </p>
        <p>
            <img src="/images/mncrft-02.jpg" alt="Minecraft Screenshot">
        </p>
        <p>
            <img src="/images/mncrft-03.jpg" alt="Minecraft Screenshot">
        </p>
        <p>
            <img src="/images/mncrft-04.jpg" alt="Minecraft Screenshot">
        </p>
        <p>
            <img src="/images/mncrft-05.jpg" alt="Minecraft Screenshot">
        </p>
        <p>
            <img src="/images/mncrft-06.jpg" alt="Minecraft Screenshot">
        </p>
        <small>
            Creative mode.<br>
            ∞...
        </small>
    </section>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
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
                        width: 300,
                        height: 300,
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
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três — MNCRFT'
            }
        }
    }
</script>
