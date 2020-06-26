<template>
  <div>
    <div class="nav">
      <div class="back" @click="$router.push('/')">← 返回</div>
      <div class="title">Vue-cli的使用</div>
      <div class="userImg" @click="$router.push('/user')">
        <img src="../assets/logo.png" alt />
      </div>
    </div>
    <div class="neirongparent">
      <div class="neirong">
        <div class="date">
          <span>20-20-20</span>
        </div>
        <hr />
        <div class="wenzhangzhuti">
          Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：
          通过 @vue/cli 搭建交互式的项目脚手架。
          通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发。
          一个运行时依赖 (@vue/cli-service)，该依赖：
          可升级；
          基于 webpack 构建，并带有合理的默认配置；
          可以通过项目内的配置文件进行配置；
          可以通过插件进行扩展。
          一个丰富的官方插件集合，集成了前端生态中最好的工具。
          Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 80px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back {
    cursor: pointer;
    margin: 0 20px;
    font-size: 20px;
    font-weight: 500;
  }
  .title {
    font-size: 20px;
  }
  .userImg {
    img {
      cursor: pointer;
      margin: 0 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
.neirongparent {
  display: flex;
  justify-content: center;
  .neirong {
    margin: 20px 0;
    width: 900px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #000;
    .date {
      margin: 20px 0;
      font-size: 15px;
      color: #999;
      text-align: center;
    }
    .wenzhangzhuti {
      font-size: 16px;
      margin: 20px 0;
      padding: 0 30px;
    }
  }
}
</style>
