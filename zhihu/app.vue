<template>
    <div class="daily">
      <div class="daily-menu">
        <div class="daily-menu-item"
          :class="{on:type === 'recommend'}">每日推荐</div>
        <div class="daily-menu-item"
          :class="{on:type === 'daily'}"
          @click="showThemes =! showThemes">主题日报</div>
        <ul v-show="showThemes">
          <li v-for="item in themes">
            <a :class="{on:item.id === themeId && type === 'daily'}">
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>
      <div class="daily-list">
        <item></item>
      </div>
      <daily-article></daily-article>
    </div>
</template>
<script>
  import $ from './daily/lib/util';
  export default {
    data() {
      return {
        themes: [],
        showThemes: false,
        type: 'recommend',
        recommendList: [],
        dailyTime: $.getTodayTime(),
        isLoading: false,
        themeId: 0
      }
    },
    methods: {
      handleToRecommend () {
        this.type = 'recommend';
        this.recommendList = [] ;
        this.dailyTime = $.getTodayTime();
        this.getRecommendList();
      },
      getRecommendList () {
        this.isLoading = true;
        const prevDay = $.prevDay(this.dailyTime + 86400000);
        $.ajax.get('newslbeforel' + prevDay).then(res => {
        this.recommendList . push(res) ;
        this.isLoading = false ; })
      },
      getThemes() {
        $.ajax.get('themes').then(res=> {
          this.themes = res.others;
        })
      }
    },
    mounted() {
      this.getThemes();
      this.getRecommendList();
    }
  }
</script>
