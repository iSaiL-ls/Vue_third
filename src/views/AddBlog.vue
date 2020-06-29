<template>
  <div>
    <Nav :editColor="false"></Nav>
    <div class="addparent">
      <div class="onediv">
        <label>博客主题</label>
        <br />
        <input type="text" v-model="blog.title" placeholder="请为你的文章取个优雅的名字把~ ~ ~" />
      </div>
      <div>
        <label>博客内容</label>
        <quill-editor v-model="blog.content"></quill-editor>
      </div>
      <hr />
      <div class="threediv">
        <button @click="push">发布</button>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import Nav from '../components/common/Nav'
export default {
  data () {
    return {
      blog: {
        // 博客主题
        title: '',
        // 内容
        content: ''
      }
    }
  },
  components: {
    Nav
  },
  methods: {
    // 发布，向后台发请求
    push () {

    }
  }
}
</script>

<style lang="less" scopde>
.addparent {
  // padding-left: 60px;
  margin: 20px auto;
  width: 900px;
  background-color: #fff;
  border-radius: 15px;
  .onediv {
    border-bottom: 1px solid #000;
    padding: 50px 0 50px 150px;
    label {
      display: inline-block;
      font-size: 20px;
      margin: 0 0 20px 0;
    }
  }
  div:nth-child(2) {
    padding: 40px 0;
    label {
      padding: 50px 0 20px 150px;
      font-size: 20px;
      padding-right: 20px;
    }
    .quill-editor {
      width: 600px;
      padding: 20px 0 20px 150px;
    }
  }
  .threediv {
    padding: 50px 0 50px 150px;
    button {
      background-color: #66b1ff;
      width: 100px;
      height: 40px;
      outline: none;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
    }
  }
}

input {
  outline: 0;
  border: 1px solid #000;
  width: 600px;
  height: 30px;
}
</style>
