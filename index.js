import Loading from './src/Loading'
import MessageBox from './src/MessageBox'
import Toast from './src/Toast'

export default{
    install(Vue, options){
        Vue.use(MessageBox, options);
        Vue.use(Toast, options);
        Vue.use(Loading, options);
    }
}

export{
    MessageBox,
    Toast,
    Loading
}