<template>
    <input :type="InputTtype">
</template>
<script>
export default{
    props: {
        InputTtype: {
            type: String,
            default: () => 'text'
        }
    }
}
</script>