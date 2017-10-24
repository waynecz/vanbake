<template>
  <div id="app">
    <sidebar :page="page" @changePage="changePage" :show="sideShow"></sidebar>

    <fg-header :page="page" @changePage="changePage" ></fg-header>

    <section page="sy">
      <div class="slogan">
        <div class="slogan-index"></div>
        <div class="slogan-des">
          <p>平凡的人，平凡的生活，平凡的一日三餐。</p>
          <p>平凡的 365 天。</p>
          <p>凡糕却希望能用不平凡的味，道。</p>
          <p>打动每一个生而平凡的人。</p>
        </div>
        <div class="slogan-pic"></div>
      </div>
    </section>
    <section page="fggs">
      <div class="title t1"></div>
      <img src="/static/img/p1.png" alt="" class="p1">
    </section>
    <section page="fzlc">
      <div class="title t2"></div>
      <img src="/static/img/p2-1.png" alt="" class="p2">
      <img src="/static/img/p2.png" alt="" class="p2 small">
    </section>
    <section page="rsxb">
      <div class="title t3"></div>
      <div class="rs-box">
        <div class="rs" v-for="(r, i) in rs" :key="i">
          <h5 v-if="i < 2">{{r.t}}</h5>
          <small v-if="i < 2">{{r.v}}</small>
          <img :src="`/static/img/p3-${i+1}.png`" alt="" class="rs-pic">
          <small v-if="i >= 2">{{r.v}}</small>
          <h5 v-if="i >= 2">{{r.t}}</h5>
        </div>
      </div>
    </section>
    <section page="qs">
      <div class="title t4"></div>
      <div class="qs-box">
        <div class="qs" v-for="(r, i) in qs" :key="i">
          <img :src="`/static/img/p4-${i > 2 ? i + 1 : 1}.png`" alt="" class="qs-pic">
          <h5>{{r.t}}</h5>
          <small>{{r.v}}</small>
        </div>
      </div>
    </section>
    <section page="cy"></section>
    <section page="md">
      <img src="/static/img/p6.png" alt="" class="md-pic">
      <div class="md-addr-box">
        <div class="md-addr" v-for="(a, i) in address" :key="i">
          <div class="md-addr-s" v-for="(t, _i) in a" :key="_i">
            <p v-if="_i === 0">NO.00{{i + 1}}：</p>
            <p v-if="_i === 1">地址：</p>
            <p v-if="_i === 2">联系方式：</p>
            <p>{{t.v}}</p>
          </div>
        </div>
      </div>
    </section>
    <section page="lxwm">
      <div class="title t7"></div>
      <div class="rs-box lx">
        <div class="rs">
          <img src="/static/img/p7-1.png" class="rs-pic">
          <h5>商务合作请联系：</h5>
          <small class="x">vanbake@aliyun.com</small>
        </div>
        <div class="rs">
          <img src="/static/img/p7-2.png" class="rs-pic">
          <h5>招商加盟请联系：</h5>
          <small class="x">13666665520</small>
        </div>
      </div>
      <div class="lx-box">
        <img src="/static/img/p7-3.png" class="lx-pic">
      </div>
    </section>
  </div>
</template>

<script>
  import sidebar from './components/sidebar'
  import header from './components/header'

  export default {
    name: 'app',
    components: {
      sidebar,
      fgHeader: header
    },
    data() {
      return {
        sideShow: false,
        page: 'sy',
        rs: [
          {
            t: '海苔风味肉松小贝',
            v: '脆脆 | 咸鲜'
          },
          {
            t: '牛肉风味肉松小贝',
            v: '弹牙 | 筋道'
          },
          {
            t: '猪肉风味肉松小贝',
            v: '柔软 | 绵密'
          },
          {
            t: '蟹黄风味肉松小贝',
            v: '蟹香 | 满足'
          }
        ],
        qs: [
          {
            t: '红豆蛋黄酥',
            v: '红豆 | 酥软'
          },
          {
            t: '金丝蛋黄酥',
            v: '细沙 | 酥香'
          },
          {
            t: '莲蓉蛋黄酥',
            v: '莲蓉 | 酥心'
          },
          {
            t: '紫薯鸳鸯酥',
            v: '软心 | Q弹'
          },
          {
            t: '土凤梨酥',
            v: '酸甜 | 嚼劲'
          },
          {
            t: '奶香提子酥',
            v: '浓郁 | 即化'
          },
          {
            t: '流心芝士挞',
            v: '流动 | 双重'
          },
          {
            t: '榴莲酥',
            v: '新鲜 | 果肉'
          }
        ],
        address: [
          [
            {
              v: '杭州紫金港店'
            },
            {
              v: '杭州市西湖区浙大紫金港望月商铺004号'
            },
            {
              v: '181-5871-9069'
            }
          ],
          [
            {
              v: '东阳黉门前店'
            },
            {
              v: '东阳黉门前店66号'
            },
            {
              v: '188-6756-2552'
            }
          ],
          [
            {
              v: '杭州高沙店'
            },
            {
              v: '杭州市江干区学林街1128号都尚超市'
            },
            {
              v: '缺'
            }
          ]
        ],
        pageMap: {}
      }
    },
    methods: {
      judgeWhichPage(scrollTop) {
        Object.keys(this.pageMap).forEach(e => {
          let page = this.pageMap[e];
          let st = scrollTop + 100;
          if (st > page.top && st < page.bottom) {
            this.page = e;
          }
        });
      },
      changePage(page) {
        Object.keys(this.pageMap).forEach(e => {
          if (e === page)
            (document.documentElement || document.body).scrollTop = this.pageMap[e].top - 100;
        });
        this.page = page;
      }
    },
    mounted() {
      let self = this;
      let sy = document.querySelector('[page=sy]');

      document.querySelectorAll('[page]').forEach(e => {
        this.pageMap[e.getAttribute('page')] = {
          top: e.offsetTop,
          bottom: e.offsetTop + e.offsetHeight
        };
      });

      document.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
          const top = (document.documentElement.scrollTop || document.body.scrollTop);
          self.sideShow = top > sy.offsetHeight + sy.offsetTop - 300;
          self.judgeWhichPage(top);
        })
      }, false);

      document.body.scrollTop += 1;
    }
  }
</script>

<style lang="scss">
  @import "style";
</style>


