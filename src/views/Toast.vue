<template>
    <div class="spring_falling__message_toast_box_wraper" :style="{ background: styles.maskColor }" v-if="show">
        <div class="spring_falling__message_toast_box_inner" :style="{ background: styles.background, transform }">
            <Content :title="title" :content="content" :type="type" :options="msgOptions" :styles="styles" :htmlSupport="htmlSupport" />
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
            msgOptions: {},
            styles: {},
            htmlSupport: false,
            content: 'null',
            type: '',
            show: false,
            transform: 'scale3d(1.15, 1.15, 1)'
        }
    },
    mounted(){
        setTimeout(() => {
            this.transform = 'scale3d(1, 1, 1)';
        }, 50);
    }
}
</script>

<style lang="css">
.spring_falling__message_toast_box_wraper{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99997;
}
.spring_falling__message_toast_box_inner{
    max-width: 300px;
    padding: 0 15px;
    border-radius: 8px;
    overflow: hidden;
    transition: transform ease-out .12s;
}
</style>