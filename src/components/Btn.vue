<template>
    <div class="spring_falling__message_box_btn_wraper">
        <div class="spring_falling__message_box_btn_top_line" :style="{
            background: borderColor
        }"></div>
        <div class="spring_falling__message_box_btn_box">
            <div class="spring_falling__message_box_btn"
                v-for="(item, index) in btnArr" :key="index"
                :data-index="index"
                :style="{color: item.color}"
                v-tap.stop="[action, !index]"
            >{{ item.text }}</div>
        </div>
        <div class="spring_falling__message_box_btn_center_line" v-if="btnArr.length === 2" :style="{
            background: borderColor
        }"></div>
    </div>
</template>

<script>
import {bindFunction, unbindFunction} from 'vue-mobile-tap'
export default {
    props:{
        btnArr: Array,
        borderColor: String
    },
    directives: {
        tap: {
            inserted: bindFunction,
            unbind: unbindFunction
        }
    },
    methods:{
        action(eventObj, isLeft){
            this.$emit('click', isLeft);
        }
    }
}
</script>

<style lang="css">
    .spring_falling__message_box_btn_wraper{
        position: relative;
    }
    .spring_falling__message_box_btn_top_line{
        height: 1px;
        transform: scaleY(.5);
    }
    .spring_falling__message_box_btn_box{
        height: 44px;
    }
    .spring_falling__message_box_btn{
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        cursor: pointer;
        font-size: 16px;
        line-height: 44px;
        height: 44px;
        text-align: center;
        width: 50%;
        float: left;
    }
    .spring_falling__message_box_btn:only-child{
        width: 100%;
    }
    .spring_falling__message_box_btn_center_line{
        width: 1px;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: scaleX(.5);
    }
</style>