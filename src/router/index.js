import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // this is our array of different routes
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      // setting up a route parameter
      path: '/jobs/:id',
      name: 'jobDetails',
      component: JobDetails,
      // accept any route param as props
      props: true
    },
    // redirect (let's imagine old route used to be all-jobs)
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    // catchall 404 (very specific syntax - it's a regex thing)
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound
    }
  ]
})

export default router
