import BackTop from '@/components/content/BackTop'
export const backTop = {
  components: {
    BackTop,
  },
  data() {
    return {
      showBackTop: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroller.scrollTo(0,0);
    },
    showBackTopIfNeed(scrollY) {
      this.showBackTop = -scrollY > 1000;
    }
  },
};
