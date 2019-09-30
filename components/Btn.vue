<template>
    <div class="spring_falling__message_box_btn_wraper">
        <template v-if="btns.length === 2">
            <div class="spring_falling__message_box_btn message_box_btn___1"
                :style="btns[0].color ? {color: btns[0].color} : {}"
                @click="$emit('click', true)"
            >{{btns[0].text}}</div>
            <div class="spring_falling__message_box_btn message_box_btn___2"
                :style="btns[1].color ? {color: btns[1].color} : {}"
                @click="$emit('click', false)"
            >{{btns[1].text}}</div>
        </template>
        <div v-else class="spring_falling__message_box_btn message_box_btn___3"
            :style="btns[0].color ? {color: btns[0].color} : {}"
            @click="$emit('click', true)"
        >{{btns[0].text}}</div>
    </div>
</template>

<script>
export default {
    props:{
        btnArr: Array
    },
    data(){
        return{
            btns: this.btnArr.map(item => {
                return typeof item === 'string' ? { text: item } : item
            })
        }
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
    .message_box_btn___1,.message_box_btn___2{
        width: 50%;
    }
    .message_box_btn___2{
        color: #909399;
        position: absolute;
        top: 0;
        right: 0;
    }
    .message_box_btn___2::before{
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