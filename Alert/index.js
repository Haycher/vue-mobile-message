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
            instance.content = options.content;
            instance.title = options.title;
            instance.type = options.type || '';
            if(options.btn){
                if(typeof options.btn === 'string'){
                    instance.btnArr = [{
                        text: options.btn
                    }]
                }else{
                    let obj = {};
                    obj.text = options.btn.text || '确定';
                    if(options.btn.color){
                        obj.color = options.btn.color
                    }
                    instance.btnArr = [obj];
                }
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

baseAlert.message = function(...arg){
    let options = {
        content: arg[0],
        title: arg[1] || '提示',
        btn: arg[2]
    };
    return baseAlert(options);
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseAlert[type] = (...arg) => {
        let options = {
            content: arg[0],
            title: '',
            type,
            btn: arg[1]
        };
        return baseAlert(options);
    }
});

export default{
    install(Vue){
        Vue.prototype.$alert = baseAlert
    }
}