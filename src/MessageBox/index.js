import Vue from 'vue'
import setting from '../../setting'
import Message from '../views/Message'
import fixUtils from '../utils/fix'

// 构建 instance
let instance;

// 构造函数
let messageConstructor = Vue.extend(Message);

function initInstance(){
    instance = new messageConstructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el);
}

let isShowing = false;

let msgOptions = {};

function baseMessage(msgObj){
    if(!isShowing){
        return new Promise(function(resolve){
            initInstance();
            isShowing = true;
            fixUtils.preventScroll();
            fixUtils.hideKeyboard();
            instance.msgOptions = msgOptions;
            instance.styles = Object.assign({
                maskColor:  msgOptions.maskColor,
                background: msgOptions.background,
                borderColor: msgOptions.borderColor,
                titleColor: msgOptions.titleColor,
                messageColor: msgOptions.messageColor
            }, msgObj.styles);
            instance.htmlSupport = typeof msgObj.htmlSupport === 'undefined' ? msgOptions.htmlSupport : msgObj.htmlSupport;
            instance.content = msgObj.content || 'null';
            instance.title = msgObj.title || '';
            instance.type = msgObj.type || '';
            instance.btnArr = msgObj.btnArr;
            instance.show = true;
            instance.hideMessage = action => {
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

function baseAlert(alertObj){
    let msgBtnArr = [Object.assign({}, msgOptions.alertBtn)];//深拷贝
    if(alertObj.btn){
        if(typeof alertObj.btn === 'string'){// 允许只定义按钮文字
            msgBtnArr[0].text = alertObj.btn;
        }else{// 同时定义文字和颜色 {text: 'confirm', color: '#000'}
            Object.assign(msgBtnArr[0], alertObj.btn);
        }
    }
    alertObj.btnArr = msgBtnArr;
    return baseMessage(alertObj);
}

function baseConfirm(confirmObj){
    let msgBtnArr = [Object.assign({}, msgOptions.confirmLeftBtn), Object.assign({}, msgOptions.confirmRightBtn)];
    if(confirmObj.btn){
        confirmObj.btnArr = [confirmObj.btn];
    }
    if(confirmObj.btnArr){
        confirmObj.btnArr.forEach((item, index) => {
            if(typeof item === 'string'){
                msgBtnArr[index].text = item;
            }else{
                Object.assign(msgBtnArr[index], item);
            }
        })
    }
    confirmObj.btnArr = msgBtnArr;
    return baseMessage(confirmObj);
}

baseAlert.message = function(content, title, btn){//带标题弹窗
    return baseAlert({
        content,
        title: title || msgOptions.title,
        btn
    });
};

baseConfirm.message = function(content, title, btn){
    return baseConfirm(Object.assign({
        content,
        title: title || msgOptions.title
    }, getBtnObj(btn)));
};

['success', 'error', 'warning', 'info'].forEach(type => {
    baseAlert[type] = (content, btn) => {
        return baseAlert({
            content,
            type,
            btn,
            styles:{
                messageColor: msgOptions.colors[type]
            }
        });
    };
    baseConfirm[type] = (content, btn) => {
        return baseConfirm(Object.assign({
            content,
            type,
            styles:{
                messageColor: msgOptions.colors[type]
            }
        }, getBtnObj(btn)));
    };
});

function getBtnObj(value){//confirm btn对象
    if(Object.prototype.toString.apply(value) === '[object Array]'){
        return {
            btnArr: value
        }
    }else if(value){
        return {
            btn: value
        }
    }else{
        return {};
    }
}

export default{
    install(Vue, options){
        msgOptions = Object.assign({}, setting, options);
        if(options){
            ['alertBtn', 'confirmLeftBtn', 'confirmRightBtn'].forEach(item => {
                if(options[item]){//对传递过来的按钮参数作兼容处理
                    if(typeof msgOptions[item] === 'string'){ //允许只配置按钮的文字而不关注颜色
                        msgOptions[item] = {
                            text: msgOptions[item],
                            color: setting[item].color
                        }
                    }else{
                        msgOptions[item] = {
                            text: msgOptions[item].text || setting[item].text,
                            color: msgOptions[item].color || setting[item].color
                        }
                    }
                }
            })
        }
        Vue.prototype.$alert = baseAlert;
        Vue.prototype.$confirm = baseConfirm;
    }
}