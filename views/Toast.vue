<template>
    <div class="spring_falling__message_toast_box_wraper" v-if="show">
        <div class="spring_falling__message_toast_box_inner" :style="styleObj">
            <Content :title="title" :content="content" :type="type" />
        </div>
    </div>
</template>
<script>
import Content from '../components/Content'
export default {
    components: {
        Content
    },
    data(){
        return {
            content: 'null',
            type: '',
            show: false,
            duration: 1500,
            styleObj: {}
        }
    },
    mounted(){
        setTimeout(() => {
            this.styleObj = {
                transform: 'scale3d(1, 1, 1)'
            };
            setTimeout(() => {
                this.hideToast()
            }, this.duration);
        }, 50);
    }
}
</script>

<style lang="css">
.spring_falling__message_toast_box_wraper{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99997;
}
.spring_falling__message_toast_box_inner{
    max-width: 80%;
    background: #fff;
    padding: 0 15px;
    border-radius: 8px;
    overflow: hidden;
    transform: scale3d(1.15, 1.15, 1);
    transition: transform ease-out .12s;
}
</style>