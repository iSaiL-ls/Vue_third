<template>
  <div class="parent">
    <div>
      <div class="title">
        <h1>{{filterBlog.title}}</h1>
      </div>
      <span>{{filterBlog.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filterBlog']
}
</script>

<style lang="less" scopde>
.parent {
  width: 900px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  margin: 0 auto;
  position: relative;
  .title {
    position: absolute;
    left: 15%;
    top: 20%;
    overflow: hidden;
    h1 {
      color: #999;
    }
  }
  span {
    position: absolute;
    left: 15%;
    top: 70%;
    font-size: 16px;
  }
}
</style>
