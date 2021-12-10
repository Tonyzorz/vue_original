import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding'
import DataBindingHtml from '../views/DataBindingHtml'
import DataBindingInputText from '../views/DataBindingInputText'
import DataBindingInputNumber from '../views/DataBindingInputNumber'
import DataBindingTextarea from '../views/DataBindingTextarea'
import DataBindingSelect from '../views/DataBindingSelect'
import DataBindingButton from '../views/DataBindingButton'
import DataBindingClass from '../views/DataBindingClass'
import DataBindingList from '../views/DataBindingList'
import RenderingVIf from '../views/RenderingVIf'
import EventClick from '../views/EventClick'
import Computed from '../views/Computed'
import Watch from '../views/Watch'
import DataBindingList2 from '../views/DataBindingList2'
import NestedComponent from '../views/NestedComponent'
import ParentComponent from '../views/ParentComponent'
import Calculator from '../views/Calculator'
import CompositionAPI from '../views/CompositionAPI'
import CompositionAPI2 from '../views/CompositionAPI2'
import CompositionAPI3 from '../views/CompositionAPI3'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dataBindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/dataBindingInputNumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/dataBindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/dataBindingSelect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingVIf',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/compositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/compositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
