import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.directive('scoped', function(element, binding) {
  const scopedId = binding.value.$options._scopeId
  if (!scopedId) {
    return
  }

  const componentTag = element.__vue__.$vnode.tag
  const target = [] // 需要添加scopedId的元素

  console.log(componentTag)

  if (componentTag.indexOf('ElPopover') !== -1) {
    // popover组件
    target.push(element.children[0])
  } else {
    target.push(element)
  }
  target.forEach(item => {
    // setTimeout(() => console.log(item.getAttribute('aria-describedby')), 1000)
    Promise.resolve().then(() => {
      const a = item.getAttribute('aria-describedby')
      // console.log(a)
      // console.log(document.querySelector('[aria-describedby=' + a + ']'), 1)
      // console.log(document.getElementById(a))
      setTimeout(() => {
        // console.log(document.getElementById(a))
      }, 5000)
    })
    item.setAttribute(scopedId, '')
  })
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
