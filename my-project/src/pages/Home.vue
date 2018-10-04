<template>
  <div>
	<div class="section">
	<slider></slider>
	<div class="announcement">
	    <label>快讯</label>
	    <span>今日上架的图书全部8折</span>
	</div>
	</div>
	<div class="section">
	    <book-list :books="page_data.promotions"
	               heading="最新更新"
	               @onBookSelect="preview($event)">
	    </book-list>
	</div>
	<div class="section">
	    <book-list :books="page_data.recommended"
	               heading="编辑推荐">
	    </book-list>
	</div>
  <model-dialog ref="dialog">
      <div slot="heading">header插槽</div>
      <div>
          <div v-if="selected">
              <h2>{{ selected.title }}</h2>
          </div>
      </div>
  </model-dialog>
</div>
</template>
<style type="text/css">
</style>
<script type="text/javascript">
import Slider from '@/components/Slider.vue'
import BookList from '@/components/Booklist.vue'
import ModelDialog from '@/components/Dialog.vue'
import faker from '@/fixture/faker.js'

export default {
  components: {
    Slider,
    BookList,
    ModelDialog
  },
  data () {
    return {
    	page_data: {},
    	selected: {}
    }
  },
  created () {
  	this.page_data = faker.getHomeData()
  },
  methods: {
  	preview (book) {
        this.selected = book;
        this.$refs.dialog.open()
    }
  }
}
</script>
