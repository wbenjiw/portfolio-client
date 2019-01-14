import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import Resume from '@/components/Resume'
import About from '@/components/About'
import D3 from '@/components/d3'
import Project from '@/components/Project'
import Art from '@/components/Art'
import NoteTaker from '@/components/NoteTaker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/d3',
      name: 'd3',
      component: D3
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/art',
      name: 'art',
      component: Art
    },
    {
      path: '/notetaker',
      name: 'notetaker',
      component: NoteTaker
    }
  ]
})
