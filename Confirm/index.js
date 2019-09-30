import Vue from 'vue'
import Message from '../views/Message'
import fixUtils from '../utils/fix'

// 构建 instance
let instance;

// 构造函数
let confirmConstructor = Vue.extend(Message);

function initInstance(){
    instance = new confirmConstructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el);
}

let isShowing = false;

function baseConfirm(options){
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
                instance.btnArr = [options.btn, '取消'];
            }else if(options.btnArr){
                instance.btnArr = options.btnArr;
            }else{
                instance.btnArr = ['确定', '取消'];
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

baseConfirm.message = function(content, title, btn){
    return baseConfirm({
        content,
        title: title || '提示',
        btnArr: getBtnArr(btn)
    })
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseConfirm[type] = (content, btn) => {
        return baseConfirm({
            content,
            type,
            btnArr: getBtnArr(btn)
        });
    }
});

function getBtnArr(value){
    if(Object.prototype.toString.apply(value) === '[object Array]'){
        return value;
    }else if(value){
        return [value, '取消'];
    }else{
        return ['确定', '取消'];
    }
}

export default{
    install(Vue){
        Vue.prototype.$confirm = baseConfirm
    }
}