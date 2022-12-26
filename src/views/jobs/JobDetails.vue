<template>
    <h1>Job Details Page</h1>
    <!-- route object - $route - whatever we called the route parameter, which was 'id' in the index -->
    <!-- <p>The job id is {{ $route.params.id }}</p> -->
    <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
    // since we have props, we don't need the below anymore
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>