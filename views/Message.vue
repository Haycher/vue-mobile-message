<template>
    <div class="spring_falling__message_box_wraper" v-if="show">
        <div class="spring_falling__message_box_inner" :style="styleObj">
            <Content :title="title" :content="content" :type="type" />
            <Btn :btnArr="btnArr" @click="onAction" />
        </div>
    </div>
</template>
<script>
import Content from '../components/Content'
import Btn from '../components/Btn'
export default {
    components: {
        Content,
        Btn
    },
    data(){
        return {
            content: 'null',
            title: '提示',
            type: '',
            show: false,
            btnArr: [{
                text: '确定'
            }],
            styleObj: {}
        }
    },
    mounted(){
        setTimeout(() => {
            this.styleObj = {
                transform: 'scale3d(1, 1, 1)'
            }
        }, 50);
    },
    methods:{
        onAction(action){
            this.hideMessage(action);
        }
    }
}
</script>

<style lang="css">
.spring_falling__message_box_wraper{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99998;
}
.spring_falling__message_box_inner{
    width: 80%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    transform: scale3d(1.15, 1.15, 1);
    transition: transform ease-out .12s;
}
</style>