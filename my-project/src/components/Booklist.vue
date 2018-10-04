<template>
    <div class="book-list">
        <div class="header">
            <div class="heading">{{ heading }}</div>
            <div class="more">更多...</div>
        </div>
        <div class="book-items">
            <div class="book" 
                 v-for="book in books"
                 tag="div"
                 @click="$emit('onBookSelect', book)"
                 >
                <div class="cover">
                    <img :src="book.img_url"/>
                </div>
                <div class="title">{{ book.title }}</div>
                <div class="authors">{{ book.authors | join }}</div>
            </div>
        </div>
    </div>
</template>
<style type="less">
    @import './booklist.less'
</style>

<script type="text/ecmascript-6">
    export default{
        props: ['heading', 'books'],
        filters: {
            join(args){
                return args.join(',')
            }
        }
    }
</script>