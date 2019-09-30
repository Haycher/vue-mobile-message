import Vue from 'vue'
import Toast from '../views/Toast'
import fixUtils from '../utils/fix'

// 构建 instance
let instance;

// 构造函数
let toastConstructor = Vue.extend(Toast);

function initInstance(){
    instance = new toastConstructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el);
}

let isShowing = false;

function baseToast(options){
    if(!isShowing){
        initInstance();
        isShowing = true;
        fixUtils.preventScroll();
        fixUtils.hideKeyboard();
        instance.content = options.content;
        instance.title = options.title;
        instance.type = options.type || '';
        if(options.duration && typeof options.duration === 'number'){
            instance.duration = options.duration;
        }
        instance.show = true;
        instance.hideToast = hide;
    }
}

baseToast.message = function(...arg){
    baseToast({
        content: arg[0],
        title: arg[1],
        type: '',
        duration: arg[2]
    });
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseToast[type] = (content, duration) => {
        baseToast({
            content,
            title: '',
            type,
            duration
        });
    }
});

function hide(){
    if(isShowing){
        instance.show = false;
        isShowing = false;
        fixUtils.recoverScroll();
    }
}

export default{
    install(Vue){
        Vue.prototype.$toast = baseToast
    }
}