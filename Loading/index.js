import Vue from 'vue'
import Loading from '../views/Loading'
import fixUtils from '../utils/fix'

// 构建 instance
let instance;

// 构造函数
let loadingConstructor = Vue.extend(Loading);

function initInstance(){
    instance = new loadingConstructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el);
}

let isShowing = false;

function show(text){
    if(!isShowing){
        isShowing = true;
        initInstance();
        instance.show = true;
        instance.text = text || '正在加载';
        fixUtils.preventScroll();
        fixUtils.hideKeyboard();
    }
}

function hide(){
    if(isShowing){
        isShowing = false;
        instance.show = false;
        fixUtils.recoverScroll();
    }
}

export default{
    install(Vue){
        Vue.prototype.$loading = {
            show,
            hide
        }
    }
}