<template>
    <div class="spring_falling_loading_wrapper" v-if="show">
        <div class="spring_falling_loading_inner">
            <div class="spring_falling_loading_leaf_box">
                <div :class="['spring_falling_loading_leaf', 'spring_falling_loading_leaf_' + item]" v-for="item in 12" :key="item" :style="{
                    transform: 'rotate(' + (item - 1) * 30 + 'deg)',
                    animation: 'loading_opacity' + item + ' 1.25s linear infinite'
                }"></div>
            </div>
            <div class="spring_falling_loading_text">{{text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text: '',
            show: false
        }
    }
}
</script>

<style lang="css">
.spring_falling_loading_wrapper{
    width: 100%;
    height: 100%;
    background: rgba(145, 141, 141, 0.1);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
}
.spring_falling_loading_inner{
    background: rgba(0, 0, 0, 0.7);
    padding: 15px 10px 10px;
    width: 70px;
    text-align: center;
    border-radius: 5px;
}
.spring_falling_loading_leaf_box{
    margin: 0 auto;
    width: 40px;
    height: 40px;
    position: relative;
}
.spring_falling_loading_leaf{
    position: absolute;
    width: 9px;
    height: 3px;
    left: 28px;
    top: 50%;
    margin-top: -1.5px;
    background: #d1d1d5;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
    border-radius: 1px;
    transform-origin: -8px 50% 0px;
}
.spring_falling_loading_text{
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    margin-top: 5px;
}

@keyframes loading_opacity1 {
    0% {
        opacity: 0.25;
    }
    0.01% {
        opacity: 0.25;
    }
    0.02% {
        opacity: 1;
    }
    60.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes loading_opacity2 {
    0% {
        opacity: 0.25;
    }
    8.34333% {
        opacity: 0.25;
    }
    8.35333% {
        opacity: 1;
    }
    68.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes loading_opacity3 {
    0% {
        opacity: 0.25;
    }
    16.6767% {
        opacity: 0.25;
    }
    16.6867% {
        opacity: 1;
    }
    76.6767% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes loading_opacity4 {
    0% {
        opacity: 0.25;
    }
    25.01% {
        opacity: 0.25;
    }
    25.02% {
        opacity: 1;
    }
    85.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes loading_opacity5 {
    0% {
        opacity: 0.25;
    }
    33.3433% {
        opacity: 0.25;
    }
    33.3533% {
        opacity: 1;
    }
    93.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes loading_opacity6 {
    0% {
        opacity: 0.270958;
    }
    41.6767% {
        opacity: 0.25;
    }
    41.6867% {
        opacity: 1;
    }
    1.67667% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.270958;
    }
}

@keyframes loading_opacity7 {
    0% {
        opacity: 0.375125;
    }
    50.01% {
        opacity: 0.25;
    }
    50.02% {
        opacity: 1;
    }
    10.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.375125;
    }
}

@keyframes loading_opacity8 {
    0% {
        opacity: 0.479291;
    }
    58.3433% {
        opacity: 0.25;
    }
    58.3533% {
        opacity: 1;
    }
    18.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.479291;
    }
}

@keyframes loading_opacity9 {
    0% {
        opacity: 0.583458;
    }
    66.6767% {
        opacity: 0.25;
    }
    66.6867% {
        opacity: 1;
    }
    26.6767% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.583458;
    }
}

@keyframes loading_opacity10 {
    0% {
        opacity: 0.687625;
    }
    75.01% {
        opacity: 0.25;
    }
    75.02% {
        opacity: 1;
    }
    35.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.687625;
    }
}

@keyframes loading_opacity11 {
    0% {
        opacity: 0.791791;
    }
    83.3433% {
        opacity: 0.25;
    }
    83.3533% {
        opacity: 1;
    }
    43.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.791791;
    }
}

@keyframes loading_opacity12 {
    0% {
        opacity: 0.895958;
    }
    91.6767% {
        opacity: 0.25;
    }
    91.6867% {
        opacity: 1;
    }
    51.6767% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.895958;
    }
}
</style>