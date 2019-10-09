<template>
  <div class="gooddesc_container">
    <h3 class="title">{{info.title}}</h3>
    <hr />
    <div class="content" v-html="info.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    this.getGooddesc();
  },
  methods: {
    getGooddesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    }
  }
};
</script>
<style lang="scss">
.gooddesc_container {
  padding: 4px;
  .title {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
      img{
          width:100%;
      }
  }
}
</style>