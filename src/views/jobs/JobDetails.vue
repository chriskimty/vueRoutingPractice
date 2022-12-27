<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <!-- route object - $route - whatever we called the route parameter, which was 'id' in the index -->
        <!-- <p>The job id is {{ $route.params.id }}</p> -->
        <p>The job id is {{ id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
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
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
}
</script>