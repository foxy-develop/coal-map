<template functional>
    <v-footer app clipped-right color="rgb(32, 54, 78)" dark class="footer">
        <v-spacer></v-spacer>
        <span class="text-caption"
        >Developed by
        <a
                href="https://artdock.studio"
                class="copy-link"
                title="ArtDock"
                target="_blank"
                rel="noopener noreferrer"
        >ArtDock
        </a>
        &copy; {{ new Date().getFullYear() }}</span
        >
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
    @keyframes footer-appear {
        from {
            transform: scaleY(0);
        }
        to {
            transform: scaleY(1);
        }
    }
    .v-footer {
        transform-origin: bottom;
        z-index: 1001 !important;
        animation: footer-appear;
        animation-duration: .3s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        transform: scaleY(0);
    }
</style>