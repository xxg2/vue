<template>
    <div v-if="page_data">
        <div class="section">
            <slider :slides="page_data.top"></slider>
            <div class="announcement">
                <label>快讯</label>
                <span>今日上架的图书全部8折</span>
            </div>
        </div>
        <div class="section">
            <book-list :books="page_data.promotions"
                       heading="最新更新"
                       @select="preview($event)">
            </book-list>
        </div>
        <div class="section">
            <book-list :books="page_data.recommended"
                       heading="编辑推荐">
            </book-list>
        </div>

        <modal-dialog ref="dialog">
            <div slot="heading"></div>
            <div>
                <div v-if="selected">
                    <h2>{{ selected.title }}</h2>
                </div>
            </div>
        </modal-dialog>
    </div>
</template>
<style>
    .announcement {
        font-size: 12px;
        padding:5px;
        background:#fff;
    }

    .announcement > label {
        padding: 3px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;

    }

    .announcement > span {
        padding: 3px 10px;
        color: #333;
        display:inline-block;
    }
</style>
<script type="text/ecmascript-6">
    import Slider from "./components/slider.vue"
    import BookList from "./books/list.vue"
    import ModalDialog from "./components/dialog.vue"
    import faker from "./fixtures/faker"

    export default{
        data () {
            return {
                page_data: undefined,
                selected:undefined
            }
        },
        mounted(){
            document.title = "Book store"
        },
        created() {

            this.page_data = faker.getHomeData();

//            this.$http.get('/books/promotions', (res)=> {
//                this.page_data = res.data
//            }, (error)=> {
//                // 处理出错信息
//            })

        },
        components: {Slider, BookList,ModalDialog},
        methods: {
            preview (book) {
              debugger;
              var js = [{
                "id": 4,
                "title": "大数据架构详解：从数据获取到深度学习",
                "authors": [
                  "朱洁",
                  "罗华霖"
                ],
                "img_url": "4.svg"
              },
              {
                "id": 5,
                "title": "Meteor全栈开发",
                "authors": [
                  "杜亦舒"
                ],
                "img_url": "5.svg"
              },
              {
                "id": 6,
                "title": "Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）",
                "authors": [
                  "龚正",
                  "吴治辉",
                  "王伟",
                  "崔秀龙",
                  "闫健勇"
                ],
                "img_url": "6.svg"
              }]
              this.page_data.promotions = this.page_data.promotions.concat(js);
                // this.selected = book
                // this.$refs.dialog.open()
            }
        }
    }
</script>
