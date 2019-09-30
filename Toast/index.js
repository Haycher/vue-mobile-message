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
        instance.content = options.content || 'null';
        instance.title = options.title || '';
        instance.type = options.type || '';
        if(options.duration && typeof options.duration === 'number'){
            instance.duration = options.duration;
        }
        instance.show = true;
        instance.hideToast = function(){
            if(isShowing){
                instance.show = false;
                isShowing = false;
                fixUtils.recoverScroll();
            }
        };
    }
}

baseToast.message = function(content, title, duration){
    baseToast({
        content,
        title,
        duration
    });
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseToast[type] = (content, duration) => {
        baseToast({
            content,
            type,
            duration
        });
    }
});

export default{
    install(Vue){
        Vue.prototype.$toast = baseToast
    }
}