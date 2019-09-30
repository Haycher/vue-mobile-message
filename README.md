# alert | confirm | toast | loading for Vue.js

## Installation
```
npm i vue-mobile-message
```

## Project start
### Full installation
```JavaScript
import Vue from 'vue'
import MobileMessage from 'vue-mobile-message'
Vue.use(MobileMessage)
```
### Partial installation
```JavaScript
import Vue from 'vue'
import {Loading, Alert} from 'vue-mobile-message'
Vue.use(Loading)
Vue.use(Alert)


new Vue({
    render: h => h(App)
}).$mount('#app')
```

## Usage
### Loading
```JavaScript
this.$loading.show();
this.$loading.show('loading...');
this.$loading.hide();
```

### Alert, you could use like this:
```JavaScript
/**
 * @param {
 *  content,
 *  title,
 *  type,
 *  btn{ String || Object }
 * } options
 */
this.$alert(options)
this.$alert({
    content: 'This is a message',
    title: 'title',
    type: 'success',
    btn: {//define text and color
        text: 'submit',
        color: 'red'
    }
}).then(() => {
    console.log('The button was clicked')
});
this.$alert({
    content: 'This is a message',
    btn: 'click me'//define text only
}).then(() => {
    console.log('The button was clicked')
});
```

### To make it easier to to call Alert plugin, you could also use like this:
```JavaScript
this.$alert.message(content, [title], [btn]).then(() =>{
    console.log('The button was clicked')
});
```

### You can also replace the title with an Icon: 
#### Supporting types (success | warning | info | error)

```JavaScript
this.$alert.success(content, [btn]).then(() => {
    console.log('The button was clicked')
});
```

### Confirm, Same as alert, you could use like this:
```JavaScript
/**
 * @param {
 *  content,
 *  title,
 *  type,
 *  btn{ String || Object },
 *  btnArr,
 * } options
 */
//define left button text and color
this.$confirm({
    content: 'This is a message',
    title: 'title',
    type: 'success',
    btn: {
        text: 'yes',
        color: 'red'
    }
}).then((isLeft) => {
    if(isLeft){
        console.log('The left button was clicked')
    }else{
        console.log('The right button was clicked')
    }
});

//define both buttons
this.$confirm({
    content: 'This is a message',
    title: 'title',
    type: 'success',
    btnArr: [{
        text: 'left button' //default '确定'
    },{
        text: 'right button' //default '取消'
    }]
}).then(isLeft => {
    if(isLeft){
        console.log('The left button was clicked')
    }else{
        console.log('The right button was clicked')
    }
});
```

### To make it easier to to call Confirm plugin, you could also use like this:
```JavaScript
this.$confirm.message(content, [title], [btn]).then((isLeft) => {
    if(isLeft){
        console.log('The left button was clicked')
    }else{
        console.log('The right button was clicked')
    }
})
this.$confirm.success(content, [btn]).then()

// for example
this.$confirm.message('this is a message', 'the title', 'left button')
this.$confirm.message('this is a message', 'the title', [{
    text: 'left button'
},{
    text: 'right button'
}])
```

### Toast, you could use like this:
```JavaScript
this.$toast({
    content: 'this is a message',
    title: 'title',
    duration: 2000 //default 1500
})
this.$toast.message('This is a message', 'title');
this.$toast.success('Login successfully');
```
