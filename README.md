# alert | confirm | toast | loading for Vue.js

## Installation
```
npm i vue-mobile-message
```

## Project startup
### Full register( this.$alert | this.$confirm | this.$toast | this.$loading )
```JavaScript
import Vue from 'vue'
import MobileMessage from 'vue-mobile-message'
Vue.use(MobileMessage, options)

new Vue({
    render: h => h(App)
}).$mount('#app')
```
### Partial register
```JavaScript
import Vue from 'vue'
import { MessageBox, Toast, Loading } from 'vue-mobile-message'
Vue.use(MessageBox, options)    //( this.$alert | this.$confirm )
Vue.use(Toast, options)         //( this.$toast )
Vue.use(Loading, options)        //( this.$loading )

new Vue({
    render: h => h(App)
}).$mount('#app')
```

### About options

 name  | description  | value | default
 ---- | -------------- | ------ | ------  
 maskColor | mask color/蒙层颜色 | <code>String</code> | rgba(0, 0, 0, 0.4)

 
```html
<table>
    <tbody>
        <th>
            <td>name</td>
            <td>description</td>
            <td>value</td>
            <td>default</td>
        </th>
        <tr>
            <td>maskColor</td>
            <td>mask color | 蒙层颜色</td>
            <td><code>String</code></td>
            <td>rgba(0, 0, 0, 0.4)</td>
        </tr>
        <tr>
            <td>htmlSupport</td>
            <td>Pop-up content support html | 弹窗内容是否支持html</td>
            <td><code>Boolean</code></td>
            <td>false</td>
        </tr>
        <tr>
            <td>background</td>
            <td>Pop-up background color | 弹窗的背景色</td>
            <td><code>String</code></td>
            <td>#ffffff</td>
        </tr>
        <tr>
            <td>titleColor</td>
            <td>Pop-up title color | 弹窗标题颜色</td>
            <td><code>String</code></td>
            <td>#111111</td>
        </tr>
        <tr>
            <td>messageColor</td>
            <td>Pop-up content color | 弹窗内容颜色</td>
            <td><code>String</code></td>
            <td>#343434</td>
        </tr>
        <tr>
            <td>borderColor</td>
            <td>Pop-up split line color | 弹窗分割线颜色</td>
            <td><code>String</code></td>
            <td>#c0c4cc</td>
        </tr>
        <tr>
            <td>alertBtn</td>
            <td>Pop-up alert button | alert弹窗按钮</td>
            <td><code>String | Object</code></td>
            <td><code>{text: '确定', color: '#007aff'}</code></td>
        </tr>
        <tr>
            <td>confirmLeftBtn</td>
            <td>Pop-up confirm left button | confirm弹窗左侧按钮</td>
            <td><code>String | Object</code></td>
            <td><code>{text: '确定', color: '#007aff'}</code></td>
        </tr>
        <tr>
            <td>confirmRightBtn</td>
            <td>Pop-up confirm right button | confirm弹窗右侧按钮</td>
            <td><code>String | Object</code></td>
            <td><code>{text: '取消', color: '#007aff'}</code></td>
        </tr>
        <tr>
            <td>duration</td>
            <td>Toast show time | Toast弹窗显示时长</td>
            <td><code>Number</code></td>
            <td>1500</td>
        </tr>
        <tr>
            <td>loadingText</td>
            <td>Loading default text | Loading默认显示文字</td>
            <td><code>String</code></td>
            <td>正在加载</td>
        </tr>
    </tbody>
</table>
```

#### Example-1
```Javascript
Vue.use(MobileMessage, {
    alertBtn: 'Yes',
    confirmLeftBtn: {
        text: 'Yes'
    },
    confirmRightBtn: {
        text: 'No',
        color: '#007aff'
    },
    loadingText: 'Loading...'
})
```

#### Example-2
```Javascript
Vue.use(MobileMessage, {
    htmlSupport: true
})
```
```html
<script>
export default {
    methods:{
        test(){
            this.$alert.message(`
                <div>this a message</div>
                <div style="color:red">html is supported now</div>
            `).then(() => {
                console.log('the button was clicked')
            })
        }
    }
}
</script>
```

## Usage
### Loading
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/loading.png?raw=true)
```JavaScript
this.$loading.show();
this.$loading.show('loading...');
this.$loading.hide();
```

### Show Alert common
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/alert1.png?raw=true)
```html
<template>
    <div id="app">
        <div @click="test1">click me</div>
    </div>
</template>

<script>
export default {
    methods: {
        test1(){
            this.$alert({
                styles:{
                    maskColor:  'rgba(40, 40, 40, .3)',
                    background: '#ff5a5a',
                    titleColor: '#fff',
                    messageColor: '#f3f3f3',
                    borderColor: '#ffb6b6'
                },
                htmlSupport: true,
                content: `<div>您输入的手机号有误</div>`,
                title: `<div>提示</div>`,
                // type: 'success',
                btn: {
                    text: '重新输入',
                    color: '#f1f1f1'
                }
            }).then(() => {
                console.log('The button was clicked')
            });
        },
        test2(){
            this.$alert({
                content: 'This is a message',
                title: 'title'
            }).then();
        },
        test3(){
            this.$alert({
                content: 'This is a message',
                type: 'success'
            }).then();
        }
    }
}
</script>
```

### Show Alert with a title
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/alert2.png?raw=true)
```html
<script>
// this.$alert.message(content [,title] [,btn])
export default {
    methods: {
        test1(){
            this.$alert.message('您输入的手机号有误').then(() => {
                console.log('The button was clicked')
            });
        },
        test2(){
            this.$alert.message('This is a message', 'I am a title')
        },
        test3(){ //use default title
            this.$alert.message('This is a message', null, 'I am button')
        },
        test4(){ //define btn text and color and use default title
            this.$alert.message('This is a message', null, {
                text: 'I am button',
                color: '#f00'
            })
        }
    }
}
</script>
```

### Show Alert with a icon without title, four types are supported (success | warning | error | info)
```html
<script>
// this.$alert.[type](content [,btn])
export default {
    methods: {
        test1(){
            this.$alert.success('Login success').then(() => {
                console.log('The button was clicked')
            });
        },
        test2(){ //define btn text only
            this.$alert.error('Password is not correct', 'I am a button')
        },
        test3(){ //define btn text and color
            this.$alert.warning('Something is wrong, but I am not going to tell you.', {
                text: 'I am a button',
                color: '#f00'
            })
        }
    }
}
</script>
```


### Show Confirm common
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/confirm1.png?raw=true)
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/confirm3.png?raw=true)
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/confirm2.png?raw=true)
```html
<template>
    <div id="app">
        <div @click="test1">click me</div>
    </div>
</template>

<script>
export default {
    methods: {
        test1(){//define both buttons
            this.$confirm({
                styles:{
                    maskColor:  'rgba(100,100,100,.3)',
                    background: '#ff5a5a',
                    titleColor: '#fff',
                    messageColor: '#f3f3f3',
                    borderColor: '#ffb6b6'
                },
                htmlSupport: true,
                content: `
                    <div>您输入的手机号有误</div>
                    <div style="margin-top:5px">请您再次确认一下看看</div>`,
                title: '<div style="font-size:1.5em;">重要提示</div>',
                // type: 'success',
                btnArr: [{
                    text: '重新输入',
                    color: '#f1f1f1'
                },{
                    text: '我不改',
                    color: '#f1f1f1'
                }]
            }).then(isLeft => {
                if(isLeft){
                    console.log('Left button was clicked')
                }else{
                    console.log('Right button was clicked')
                }
            });
        },
        test2(){//define left button only
            this.$confirm({
                content: '您输入的手机号有误',
                title: '提示',
                btn: '重新输入'
            }).then();
        },
        test3(){//define button text only
            this.$confirm({
                content: 'Won the prize. Are you ready for it?',
                type: 'success',
                btnArr: ['Yes, of course', 'Not yet']
            }).then();
        }
    }
}
</script>
```


### Show Confirm with a title
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/confirm4.png?raw=true)
```html
<script>
// this.$confirm.message(content [,title] [,btn])
export default {
    methods: {
        test1(){//use default title and button
            this.$confirm.message('密码有误，请重新输入').then(isLeft => {});
        },
        test2(){
            this.$confirm.message('This is a message', 'I am a title').then();
        },
        test3(){//define left button text only and use default title
            this.$confirm.message('This is a message', null, 'left button').then();
        },
        test4(){ //define left button text and color and use default title
            this.$confirm.message('This is a message', null, {
                text: 'left button',
                color: '#f00'
            }).then();
        },
        test5(){ //define both buttons and use default title
            this.$confirm.message('This is a message', null, [{
                text: 'left button',
                color: '#f00'
            },{
                text: 'right button',
                color: '#0ff'
            }]).then();
        }
    }
}
</script>
```


### Show Confirm with a icon without title, four types are supported (success | warning | error | info)
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/confirm5.png?raw=true)
```html
<script>
// this.$confirm.[type](content [,btn])
export default {
    methods: {
        test1(){ //define both buttons text
            this.$confirm.success('恭喜你！抽到200元优惠券一张', ['立即使用', '暂时不用']).then(isLeft => {}); 
        },
        test2(){ //define left button text only
            this.$confirm.error('Are you really going to die?', 'Yes').then(ifLeft => {
                if(ifLeft){
                    console.log("You're dead. God's waiting for you.")
                }else{
                    console.log('You are alive, do you still want to die?')
                }
            });
        },
        test3(){ //define left button text and color
            this.$confirm.info('This is a message', {
                text: 'left button',
                color: '#f00'
            }).then(isLeft => {});
        },
        test4(){ //define both buttons text and color
            this.$confirm.info('This is a message', [{
                text: 'left button',
                color: '#f00'
            },{
                text: 'right button',
                color: '#0ff'
            }]).then(isLeft => {});
        }
    }
}
</script>
```


### Show Toast
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/toast1.png?raw=true)
![Image text](https://github.com/Haycher/vue-mobile-message/blob/master/images/toast2.png?raw=true)
```html
<script>
export default {
    methods: {
        // this.$toast(options)
        test1(){
            this.$toast({
                styles:{
                    maskColor:  '#000',
                    background: '#fff',
                    titleColor: '#000',
                    messageColor: '#000'
                },
                content: 'this is a message',
                title: 'title',
                duration: 2000 //default 1500
            }).then(() => {
                console.log('toast finished');
            })
        },

        // this.$toast.message(content [,title] [,duration])
        test2(){
            this.$toast.message('This is a message', 'title');
        },
        test3(){
            this.$toast.message('This is a message', null, 2000);
        },
        // this.$toast.[type](content [,duration])
        test2(){
            this.$toast.success('This is a message', 2000);
        }
    }
}
</script>
```


## Contact
The project's website is located at https://github.com/Haycher/vue-mobile-message.git 
Author: Haycher, Lyu (spring_falling@163.com)