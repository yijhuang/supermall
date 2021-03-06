import Toast from './toast.vue'
const obj = {};

obj.install = function(Vue){
    //Vue.prototype.$toast = Toast;
    const toastConstructor = Vue.extend(Toast);

    const toast = new toastConstructor();

    toast.$mount(document.createElement('div'));

    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;
}

export default obj