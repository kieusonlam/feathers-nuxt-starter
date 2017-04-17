<template>
    <div>
        <h1>About</h1>
        <p>This was rendered by the {{ renderer }}</p>
        <nuxt-link to="/">Home</nuxt-link>
    </div>
</template>

<script>
export default {
    asyncData ({ req, }) {
        return {
            renderer: req ? 'server' : 'client',
        }
    }
}
</script>