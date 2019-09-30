<template>
    <div class="spring_falling__message_box_btn_wraper">
        <div
            v-for="(item, index) in btnArr" :key="index"
            :class="['spring_falling__message_box_btn', 'message_box_btn___' + index]"
            :style="typeof item === 'object' && item.color ? {color: item.color} : {}"
            @click="$emit('click', !index)"
        >{{typeof item === 'object' ? item.text : item}}</div>
    </div>
</template>

<script>
export default {
    props:{
        btnArr: Array
    }
}
</script>

<style lang="css">
    .spring_falling__message_box_btn_wraper{
        position: relative;
        font-size: 16px;
        line-height: 44px;
        color: #007aff;
        text-align: center;
    }
    .spring_falling__message_box_btn_wraper::before{
        content: "";
        width: 100%;
        height: 1px;
        background: #c0c4cc;
        transform: scaleY(.5);
        position: absolute;
        left: 0;
        top: 0;
    }
    .spring_falling__message_box_btn{
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        cursor: pointer;
    }
    .message_box_btn___0,.message_box_btn___1{
        width: 50%;
    }
    .spring_falling__message_box_btn_wraper .spring_falling__message_box_btn:only-child{
        width: 100%;
    }
    .message_box_btn___1{
        color: #909399;
        position: absolute;
        top: 0;
        right: 0;
    }
    .message_box_btn___1::before{
        content: "";
        width: 1px;
        height: 100%;
        background: #c0c4cc;
        transform: scaleX(.5);
        position: absolute;
        left: 0;
        top: 0;
    }
</style>