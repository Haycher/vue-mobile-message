<template>
    <div class="spring_falling__message_box_content_wraper">
        <div v-if="showIcon" class="spring_falling__message_box_content_icon">
            <img :src="icon" alt="icon">
        </div>
        <div v-else-if="title" class="spring_falling__message_box_content_title">{{ title }}</div>
        <div class="spring_falling__message_box_content_text" :style="contentStyle" v-html="content"></div>
    </div>
</template>

<script>
import setting from '../setting'
export default {
    props: ['title', 'content', 'type'],
    computed:{
        showIcon(){
            return this.type ? true : false;
        },
        icon(){
            return setting.icons[this.type]
        },
        contentStyle(){
            if(this.type === 'error' || this.type === 'warning' || this.type === 'info'){
                return {
                    color: setting.colors[this.type]
                }
            }else{
                return {}
            }
        }
    }
}
</script>

<style lang="css">
    .spring_falling__message_box_content_wraper{
        padding: 20px 15px;
        text-align: center;
        position: relative;
    }
    .spring_falling__message_box_content_icon{
        width: 32px;
        margin: 0 auto 15px;
    }
    .spring_falling__message_box_content_icon img{
        display: block;
        width: 100%;
    }
    .spring_falling__message_box_content_title{
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 10px;
        color: #000;
    }
    .spring_falling__message_box_content_text{
        font-size: 15px;
        line-height: 23px;
        color: #343434;
    }
</style>