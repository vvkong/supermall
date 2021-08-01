import Toast from './Toast'
const toast = {
  install: function(Vue) {
    let toastConstructor = Vue.extend(Toast);
    let toast = new toastConstructor();
    toast.$mount(document.createElement('div'));

    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;

    console.log(toast);
  }
};

export default toast;

