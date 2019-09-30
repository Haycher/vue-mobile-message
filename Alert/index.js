import Vue from 'vue'
import Message from '../views/Message'
import fixUtils from '../utils/fix'

// 构建 instance
let instance;

// 构造函数
let alertConstructor = Vue.extend(Message);

function initInstance(){
    instance = new alertConstructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el);
}

let isShowing = false;

function baseAlert(options){
    if(!isShowing){
        return new Promise(function(resolve){
            initInstance();
            isShowing = true;
            fixUtils.preventScroll();
            fixUtils.hideKeyboard();
            instance.content = options.content || 'null';
            instance.title = options.title || '';
            instance.type = options.type || '';
            if(options.btn){
                instance.btnArr = [options.btn];
            }else{
                instance.btnArr = ['确定'];
            }
            instance.show = true;
            instance.hideMessage = (action) => {
                if(isShowing){
                    instance.show = false;
                    isShowing = false;
                    resolve(action);
                    fixUtils.recoverScroll();
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

baseAlert.message = function(content, title, btn){
    return baseAlert({
        content,
        title: title || '提示',
        btn
    });
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseAlert[type] = (content, btn) => {
        return baseAlert({
            content,
            type,
            btn
        });
    }
});

export default{
    install(Vue){
        Vue.prototype.$alert = baseAlert
    }
}