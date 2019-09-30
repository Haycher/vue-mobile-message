import Alert from './Alert'
import Confirm from './Confirm'
import Toast from './Toast'
import Loading from './Loading'

export default{
    install(Vue){
        Vue.use(Alert);
        Vue.use(Confirm);
        Vue.use(Toast);
        Vue.use(Loading);
    }
}

export{
    Alert,
    Confirm,
    Toast,
    Loading
}