<template>
    <div class="spring_falling__message_box_content_wraper">
        <div v-if="type" class="spring_falling__message_box_content_icon">
            <img :src="options.icons[type]" alt="icon">
        </div>
        <template v-else-if="title">
            <div v-if="htmlSupport" class="spring_falling__message_box_content_title" v-html="title" :style="{
                color: styles.titleColor
            }"></div>
            <div v-else class="spring_falling__message_box_content_title" :style="{
                color: styles.titleColor
            }">{{ title }}</div>
        </template>
        <div v-if="htmlSupport" class="spring_falling__message_box_content_text" v-html="content" :style="{
            color: styles.messageColor
        }"></div>
        <div v-else class="spring_falling__message_box_content_text" :style="{
            color: styles.messageColor
        }">{{ content }}</div>
    </div>
</template>

<script>
export default {
    props: ['title', 'content', 'type', 'styles', 'options', 'htmlSupport']
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
    }
    .spring_falling__message_box_content_text{
        font-size: 15px;
        line-height: 23px;
    }
</style>