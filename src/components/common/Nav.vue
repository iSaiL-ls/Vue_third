<template>
  <div>
    <div class="nav">
      <div class="btnbox">
        <button :class="{color:color1}" @click="toHome">博客</button>
        <button :class="{color:!color1}" @click="toEdit">写博客</button>
      </div>
      <div class="userImg" @click="$router.push('/user')">
        <img src="../../assets/logo.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: null
    }
  },
  props: ['editColor'],
  methods: {
    // 按钮颜色变化
    toHome () {
      this.$router.push('/')
    },
    toEdit () {
      this.$router.push('/addblog')
    },
    // 获取值
    huoqueditColor () {
      this.color1 = this.editColor
    }
  },
  created () {
    this.huoqueditColor()
  }

}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
  height: 80px;
  background-color: red;
  position: relative;
  .btnbox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
button {
  outline: none;
  border: 1px solid #fff;
  margin: 0 4px;
  width: 80px;
  height: 30px;
  background: red;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
}
.color {
  background-color: #fff !important;
}
.userImg {
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
