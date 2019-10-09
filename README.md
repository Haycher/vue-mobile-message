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
```Javascript
/**
 * 
 * options --default
{
    maskColor: 'rgba(0, 0, 0, 0.4)', --Mask color
    htmlSupport: false,              --Pop-up content html support
    background: '#ffffff',           --Pop-up background color
    titleColor: '#111111',           --Pop-up title color
    messageColor: '#343434',         --Pop-up content color
    borderColor: '#c0c4cc',          --Pop-up split Line Color
    title: '提示',                    --Pop-up default title
    alertBtn: {
        text: '确定',
        color: '#007aff'
    },
    confirmLeftBtn: {
        text: '确定',
        color: '#007aff'
    },
    confirmRightBtn: {
        text: '取消',
        color: '#007aff'
    },
    duration: 1500,                 --Toast default duration
    loadingText: '加载中'            --Loading default text
}
 */
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
```JavaScript
this.$loading.show();
this.$loading.show('loading...');
this.$loading.hide();
```

### Show Alert common
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
                    maskColor:  '#000',
                    background: '#000',
                    titleColor: '#000',
                    messageColor: '#000'
                },
                content: 'This is a message',
                title: 'title',
                type: 'success',
                btn: {
                    text: 'submit',
                    color: '#f00'
                }
            }).then(() => {
                console.log('The button was clicked')
            });
        },
        test2(){
            this.$alert({
                content: 'This is a message',
                title: 'title'
            }).then(() => {
                console.log('The button was clicked')
            });
        },
        test3(){
            this.$alert({
                content: 'This is a message',
                type: 'success'
            }).then(() => {
                console.log('The button was clicked')
            });
        }
    }
}
</script>
```

### Show Alert with a title
```html
<script>
// this.$alert.message(content [,title] [,btn])
export default {
    methods: {
        test1(){
            this.$alert.message('This is a message').then(() => {
                console.log('The button was clicked')
            });
        },
        test2(){
            this.$alert.message('This is a message', 'I am a title').then(() => {
                console.log('The button was clicked')
            });
        },
        test3(){
            this.$alert.message('This is a message', null, 'I am button').then(() => { //use default title
                console.log('The button was clicked')
            });
        },
        test4(){
            this.$alert.message('This is a message', null, { //define btn text and color
                text: 'I am button',
                color: '#f00'
            }).then(() => {
                console.log('The button was clicked')
            });
        }
    }
}
</script>
```

### Show Alert with a icon without title, four types is supported (success | warning | error | info)
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
        test2(){
            this.$alert.error('Password is not correct', 'I am a button').then(() => {
                console.log('The button was clicked')
            });
        },
        test3(){
            this.$alert.warning('Something is wrong, but I am not going to tell you.', { //define btn text and color
                text: 'I am a button',
                color: '#f00'
            }).then(() => {
                console.log('The button was clicked')
            });
        }
    }
}
</script>
```


### Show Confirm common
```html
<template>
    <div id="app">
        <div @click="test1">click me</div>
    </div>
</template>

<script>
export default {
    methods: {
        test1(){//define left button only 
            this.$confirm({
                styles:{
                    maskColor:  '#000',
                    background: '#000',
                    titleColor: '#000',
                    messageColor: '#000'
                },
                content: 'This is a message',
                title: 'title',
                type: 'success',
                btn: {
                    text: 'yes',
                    color: '#f00'
                }
            }).then(ifLeft => {
                console.log('The button was clicked')
            });
        },
        test2(){//define both buttons
            this.$confirm({
                styles:{
                    maskColor:  '#000',
                    background: '#000',
                    titleColor: '#000',
                    messageColor: '#000'
                },
                content: 'This is a message',
                title: 'title',
                type: 'success',
                btnArr: [{
                    text: 'yes',
                    color: '#f00'
                },{
                    text: 'cancel',
                    color: '#999'
                }]
            }).then(isLeft => {
                if(isLeft){
                    console.log('The left button was clicked')
                }else{
                    console.log('The right button was clicked')
                }
            });
        }
    }
}
</script>
```


### Show Confirm with a title
```html
<script>
// this.$confirm.message(content [,title] [,btn])
export default {
    methods: {
        test1(){
            this.$confirm.message('This is a message').then(isLeft => { //use default title and button 
                if(isLeft){
                    console.log('The left button was clicked')
                }else{
                    console.log('The right button was clicked')
                }
            });
        },
        test2(){
            this.$confirm.message('This is a message', 'I am a title').then(isLeft => {});
        },
        test3(){
            this.$confirm.message('This is a message', null, 'left button').then(isLeft => {}); //define left button text only
        },
        test4(){
            this.$confirm.message('This is a message', null, { //define left button text and color
                text: 'left button',
                color: '#f00'
            }).then(isLeft => {});
        },
        test5(){
            this.$confirm.message('This is a message', null, [{ //define both buttons
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


### Show Confirm with a icon without title, four types is supported (success | warning | error | info)
```html
<script>
// this.$confirm.[type](content [,btn])
export default {
    methods: {
        test1(){
            this.$confirm.success('Winning the prize. Are you ready for it?').then(isLeft => { //use default button 
                if(isLeft){
                    console.log('The left button was clicked')
                }else{
                    console.log('The right button was clicked')
                }
            });
        },
        test2(){
            this.$confirm.error('Are you really going to die?', 'Yes').then(isLeft => {}); //define left button text only
        },
        test3(){
            this.$confirm.info('This is a message', { //define left button text and color
                text: 'left button',
                color: '#f00'
            }).then(isLeft => {});
        },
        test4(){
            this.$confirm.info('This is a message', [{ //define both buttons
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
                console.log('toast was hided');
            })
        },

        // this.$toast.message(content [,title] [,duration])
        test2(){
            this.$toast.message('This is a message', 'title').then();
        },
        test3(){
            this.$toast.message('This is a message', null, 2000).then();
        }

        // this.$toast.[type](content [,duration])
        test2(){
            this.$toast.success('This is a message', 2000).then();
        }
    }
}
</script>
```


## Contact
The project's website is located at https://github.com/Haycher/vue-mobile-message.git 
Author: Haycher, Lyu (spring_falling@163.com)