import Vue from 'vue'
import Loading from '../views/Loading'
import fixUtils from '../utils/fix'
import setting from '../../setting'

// 构建 instance
let instance;

let defaultText = setting.loadingText;

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
        instance.text = text || defaultText;
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
    install(Vue, options){
        if(options && options.loadingText){
            defaultText = options.loadingText;
        }
        Vue.prototype.$loading = {
            show,
            hide
        }
    }
}