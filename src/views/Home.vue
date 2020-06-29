<template>
  <div>
    <Nav :editColor="true"></Nav>
    <div class="top">
      <span>你想要的，我全都有~~~</span>

      <input type="text" placeholder="search" v-model="inputval" />
      <!-- <button>ok</button> -->
    </div>

    <div
      class="ArticleParent"
      v-for="(item,index) in filterBlog"
      :key="index"
      @click="$router.push('/blog')"
      style="cursor: pointer;"
    >
      <Article :filterBlog="item" style="margin-top:20px;"></Article>
    </div>
  </div>
</template>

<script>
import Article from '../components/Article'
import Nav from '../components/common/Nav'
import articledata from '../assets/artiecle'
console.log(articledata)

export default {
  data () {
    return {
      inputval: '',
      article: {
      }
    }
  },
  components: {
    Nav,
    Article
  },
  methods: {
    // 获取数据
    getArticle () {
      // 获取所有文章数据
      this.article = articledata.data
    }
    // 点击搜索
    // search (val) {
    //   //  发请求给后台然后 把数据给data里面渲染到页面上
    //   console.log(val)
    // }
  },
  watch: {
    // inputval (inputval1) {
    //   if (this.inputval != '') {
    //     this.search(inputval1)
    //   } else {
    //     this.getArticle()
    //   }
    // }
  },
  computed: {
    // 过滤
    filterBlog () {
      const { inputval, article } = this
      let arr = [...article]
      if (inputval.trim()) {
        arr = article.filter(a => a.title.indexOf(inputval.trim()) !== -1)
      }
      return arr
    }
  },
  created () {
    this.getArticle()
  }
}
</script>
<style lang="less" scoped>
.top {
  margin: 30px auto;
  height: 150px;
  width: 900px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  input {
    padding: 0 20px;
    outline: none;
    width: 600px;
    font-size: 20px;
    height: 40px;
    border: 1px solid #000;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    left: 15%;
    top: 20%;
    // color: #999;
    font-size: 20px;
  }
  // button {
  //   top: 60%;
  //   left: 80%;
  //   transform: translate(-50%, -50%);
  //   position: absolute;
  //   width: 80px;
  //   height: 43px;
  //   outline: none;
  //   border: 1px solid #000;
  //   background-color: #66b1ff;
  //   border-radius: 3px;
  // }
}
</style>
