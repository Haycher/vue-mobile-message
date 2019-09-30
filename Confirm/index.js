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
            instance.content = options.content;
            instance.title = options.title;
            instance.type = options.type || '';
            if(options.btn){
                if(typeof options.btn === 'string'){
                    instance.btnArr = [{
                        text: options.btn
                    },{
                        text: '取消'
                    }]
                }else{
                    let obj = {};
                    obj.text = options.btn.text || '确定';
                    if(options.btn.color){
                        obj.color = options.btn.color
                    }
                    instance.btnArr = [obj, {
                        text: '取消'
                    }];
                }
                
            }else if(options.btnArr){
                instance.btnArr = options.btnArr;
            }else{
                instance.btnArr = [{
                    text: '确定'
                },{
                    text: '取消'
                }]
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

baseConfirm.message = function(...arg){
    let options = {
        content: arg[0]//第一个参数必须是内容
    };
    for (let i = 1; i < arg.length; i++) {
        const param = arg[i];
       if(i === 1){//第二个参数为标题
            options.title = param;
        }else if(i === 2){//第三个参数为按钮文字
            if(typeof param === 'string'){//只定义左边按钮，右边按钮默认是取消
                options.btn = param;
            }else{//传入数组可定义左右按钮
                options.btnArr = param;
            }
        }else{
            break;
        }
    }
    options.title = options.title || '提示';//让标题默认是提示
    return baseConfirm(options);
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseConfirm[type] = (...arg) => {
        let options = {
            content: arg[0],//第一个参数必须是内容
            title: '',
            type
        };
        for (let i = 1; i < arg.length; i++) {
            const param = arg[i];
           if(i === 1){//第二个参数为按钮文字
                if(typeof param === 'string'){//只定义左边按钮，右边按钮默认是取消
                    options.btn = param;
                }else{//传入数组可定义左右按钮
                    options.btnArr = param;
                }
            }else{
                break;
            }
        }
        return baseConfirm(options);
    }
});

export default{
    install(Vue){
        Vue.prototype.$confirm = baseConfirm
    }
}