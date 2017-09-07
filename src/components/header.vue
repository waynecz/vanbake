<template>
  <div class="header">
    <div class="logo"></div>
    <ul class="nav">
      <li class="nav__item" v-for="(m, i) in menu" :key="i" :class="activeClass(m)">
        <span class="nav-i" v-for="(_, $) in m" :key="$" @click="changePage(_.v)">{{_.k}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header',

  props: ['page'],

  methods: {
    activeClass(m) {
      return m.find(e => e.v === this.page) ? 'a' : '';
    },
    changePage(p) {
      this.$emit('changePage', p);
    }
  },
  created() {

  },
  data () {
    return {
      menu: [

        [{k: '首页', v: 'sy'}],
        [
          {k: '关于凡糕', v: 'gyfg'},
          {k: '凡糕故事', v: 'fggs'},
          {k: '发展历程', v: 'fzlc'}
        ],
        [
          {k: '产品展示', v: 'cpzs'},
          {k: '肉松小贝', v: 'rsxb'},
          {k: '情酥', v: 'qs'},
          {k: '茶饮', v: 'cy'}
        ],
        [{k: '门店', v: 'md'}],
        [{k: '联系我们', v: 'lxwm'}],
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
