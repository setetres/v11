<template>
    <div class="stories">
        <a href="#" class="stories__toggle small" @click.prevent="toggle">{{ toggleLabel }}</a>
        <div v-show="isStoriesOpen" class="stories__playlist">
            <div class="stories__meta">
                <div class="stories__avatar" />
                <div>
                    <div class="stories__title" v-html="playlist.title" />
                    <span class="stories__date small" v-html="currentStory.date" />
                </div>
            </div>
            <nav class="stories__pagination">
                <div
                    v-for="(story, i) in playlist.stories"
                    :key="`stories__pagination-item--${i}`"
                    class="stories__pagination-item"
                >
                    <div class="stories__story-watched-percentage" />
                </div>
            </nav>
            <div class="stories__story">
                <a href="#" class="stories__story-next" @click.prevent="next" />
                <a href="#" class="stories__story-prev" @click.prevent="prev" />
                <div class="stories__story-loader" />
                <div class="stories__story-video">
                    <video playsinline autoplay />
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./stories.js" />
