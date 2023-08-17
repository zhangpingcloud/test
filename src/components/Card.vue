<script>
export default {
    props: ['title', 'content']
}
</script>

<template>
    <div class="card">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <slot></slot>
    </div>
</template>

<style scoped>
.card{
    padding: 12px 24px;
    border: 1px solid #eb261a;
    border-radius: 3px;
    margin: 16px 0;
}
</style>