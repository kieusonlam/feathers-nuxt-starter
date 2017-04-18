<template>
    <div>
        <h1>About</h1>
        <p>This was rendered by the {{ renderer }}</p>
        <div>{{ total }}</div>
    </div>
</template>

<script>
export default {
    asyncData ({ req, }) {
        return {
            renderer: req ? 'server' : 'client',
        }
    },
    computed: {
        total () { return this.$store.state.counter.total },
    }
}
</script>