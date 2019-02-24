// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import seller from './components/seller-nav.vue'
import router from './router'
import resource from 'vue-resource'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
Vue.use(resource)


Vue.config.productionTip = false
Vue.directive('color',{
  bind: function (el,binding) {
    el.style.color = binding.value;
  }
});


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
Vue.config.keyCodes.f2 = 113;


