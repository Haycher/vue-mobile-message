<template>
    <div class="spring_falling__message_box_wraper" :style="{background: styles.maskColor}" v-if="show">
        <div class="spring_falling__message_box_inner" :style="{ background: styles.background, transform }">
            <Content :title="title" :content="content" :type="type" :options="msgOptions" :styles="styles" :htmlSupport="htmlSupport" />
            <Btn :btnArr="btnArr" @click="onAction" :borderColor="styles.borderColor" />
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
            msgOptions: {},
            styles: {},
            htmlSupport: false,
            content: '',
            title: '',
            type: '',
            show: false,
            btnArr: [],
            transform: 'scale3d(1.15, 1.15, 1)'
        }
    },
    mounted(){
        setTimeout(() => {
            this.transform = 'scale3d(1, 1, 1)'
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
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99998;
}
.spring_falling__message_box_inner{
    width: 72%;
    max-width: 300px;
    border-radius: 8px;
    overflow: hidden;
    transition: transform ease-out .12s;
}
</style>