import Vue from 'vue'
import setting from '../../setting'
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

let msgOptions = {};

function baseToast(msgObj){
    if(!isShowing){
        return new Promise((resolve) => {
            initInstance();
            isShowing = true;
            fixUtils.preventScroll();
            fixUtils.hideKeyboard();
            instance.msgOptions = msgOptions;
            instance.styles = Object.assign({
                maskColor:  msgOptions.maskColor,
                background: msgOptions.background,
                titleColor: msgOptions.titleColor,
                messageColor: msgOptions.messageColor
            }, msgObj.styles);
            instance.htmlSupport = typeof msgObj.htmlSupport === 'undefined' ? msgOptions.htmlSupport : msgObj.htmlSupport;
            instance.content = msgObj.content || 'null';
            instance.title = msgObj.title || '';
            instance.type = msgObj.type || '';
            let duration = msgObj.duration && typeof msgObj.duration === 'number' ? msgObj.duration : msgOptions.duration;
            instance.show = true;
            setTimeout(function(){
                instance.show = false;
                isShowing = false;
                fixUtils.recoverScroll();
                resolve();
            }, duration);
        }).catch(err => {
            console.log(err);
        })
    }
}

baseToast.message = function(content, title, duration){
     return baseToast({
        content,
        title,
        duration
    });
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseToast[type] = (content, duration) => {
        return baseToast({
            content,
            type,
            duration,
            styles: {
                messageColor: msgOptions.colors[type]
            }
        });
    }
});

export default{
    install(Vue, options){
        msgOptions = Object.assign({}, setting, options);
        Vue.prototype.$toast = baseToast
    }
}