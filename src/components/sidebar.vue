<template>
  <div class="side" :class="[show ? 'show' : '']">
    <div class="side-p"></div>

    <div class="side-i" v-for="(m, i) in pages" :key="i" :class="activeClass(m)" @click="goto(m.t)">
      <div class="side-t" :style="`background-image: url(/static/img/${m.t}.png)`"></div>
    </div>

    <div class="side-bg" :style="`background-image: url(/static/img/${bClass})`"></div>
    <div class="side-p"></div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['page', 'show', 'changePage'],
  data () {
    return {
      pages: [
        { t: 'sy'},
        { t: 'fggs'},
        { t: 'fzlc'},
        { t: 'rsxb'},
        { t: 'qs'},
        { t: 'cy'},
        { t: 'md'},
        { t: 'lxwm'}
      ]
    }
  },
  computed: {
    bClass() {
      const menu = JSON.parse(JSON.stringify(this.pages));
      return `b${menu.findIndex(e => e.t === this.page)}.png`
    }
  },
  methods: {
    activeClass(m) {
      return m.t === this.page ? 'a' : '';
    },
    goto(page) {
      this.$emit('changePage', page);
    }
  }
}
</script>

<style lang="scss">
</style>
