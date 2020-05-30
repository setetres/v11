export default {
    props: {
        playlist: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            storiesOpen: false,
            currentStory: {},
            currentStoryIndex: 0
        }
    },

    beforeDestroy() {
        this.story.removeEventListener('loadstart', this.canplay)
        this.story.removeEventListener('canplay', this.canplay)
        this.story.removeEventListener('timeupdate', this.timeupdate)
    },

    computed: {
        isStoriesOpen() {
            return this.storiesOpen
        },

        toggleLabel() {
            return this.storiesOpen ? '᳁' : '᳃'
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.storyWatchedPercentage = document.querySelectorAll('.stories__story-watched-percentage')
            this.story = document.querySelector('.stories__story-video video')
            this.storyLoader = document.querySelector('.stories__story-loader')
        })
    },

    methods: {
        toggle() {
            this.storiesOpen = !this.storiesOpen

            if (this.storiesOpen === true) {
                this.play()
            }

            if (this.storiesOpen === false) {
                this.stop()
                this.story.muted = true
            }
        },

        play() {
            this.currentStoryWatchedPercentage = this.storyWatchedPercentage[this.currentStoryIndex]
            this.currentStoryWatchedPercentage.style.width = '0%'
            this.currentStory = this.playlist.stories[this.currentStoryIndex]

            this.story.poster = this.currentStory.poster
            this.story.src = this.currentStory.src

            this.story.load()

            this.story.addEventListener('loadstart', (e) => this.loadstart(e))
            this.story.addEventListener('canplay', (e) => this.canplay(e))
            this.story.addEventListener('timeupdate', (e) => this.timeupdate(e))
        },

        loadstart(e) {
            this.showLoader()
        },

        canplay(e) {
            this.hideLoader()
            this.story.muted = false
            this.story.play()
        },

        showLoader() {
            this.storyLoader.style.display = 'initial'
        },

        hideLoader() {
            this.storyLoader.style.display = 'none'
        },

        timeupdate(e) {
            const percentage = Math.ceil((100 / this.story.duration) * this.story.currentTime)
            this.currentStoryWatchedPercentage.style.width = `${percentage}%`

            if (percentage === 100) this.next(e)
        },

        ended(e) {
            this.next(e)
        },

        next(e) {
            this.stop()
            this.currentStoryWatchedPercentage.style.width = '100%'
            this.currentStoryIndex++

            if (this.currentStoryIndex >= this.playlist.stories.length) {
                this.currentStoryIndex = 0

                this.storyWatchedPercentage.forEach((page) => {
                    page.style.width = '0%'
                })
            }

            this.play()
        },

        prev(e) {
            this.stop()
            this.currentStoryWatchedPercentage.style.width = '0%'
            this.currentStoryIndex--
            this.currentStoryIndex = this.currentStoryIndex < 0 ? 0 : this.currentStoryIndex
            this.play()
        },

        stop() {
            this.story.removeEventListener('loadstart', this.canplay)
            this.story.removeEventListener('canplay', this.canplay)
            this.story.removeEventListener('timeupdate', this.timeupdate)
        }
    }
}
