<template>
    <TabBar class="tab-bar">
      <TabBarItem path="/home">
        <template v-slot:item-icon>
            <img class="item-icon" src="~@/assets/image/tabbar/home_normal.svg">
        </template>
        <template v-slot:item-icon-active>
            <img class="item-icon" src="~@/assets/image/tabbar/home_selected.svg">
        </template>
        <template v-slot:item-text>
            <div>首页</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/category">
        <template v-slot:item-icon>
            <img class="item-icon" src="~@/assets/image/tabbar/category_normal.svg">
        </template>
        <template v-slot:item-icon-active>
            <img class="item-icon" src="~@/assets/image/tabbar/category_selected.svg">
        </template>
        <template v-slot:item-text>
            <div>分类</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/cart">
        <template v-slot:item-icon>
            <img class="item-icon" src="~@/assets/image/tabbar/cart_normal.svg">
        </template>
        <template v-slot:item-icon-active>
            <img class="item-icon" src="~@/assets/image/tabbar/cart_selected.svg">
        </template>
        <template v-slot:item-text>
            <div>购物车</div>
        </template>
      </TabBarItem>

      <TabBarItem path="/profile">
        <template v-slot:item-icon>
            <img class="item-icon" src="~@/assets/image/tabbar/profile_normal.svg">
        </template>
        <template v-slot:item-icon-active>
            <img class="item-icon" src="~@/assets/image/tabbar/profile_selected.svg">
        </template>
        <template v-slot:item-text>
            <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem,
    }
}
</script>

<style scope>
  .tab-bar {
    background: white;
  }
  .item-icon {
      width: 22px;
      height: 22px;
      vertical-align: middle;
      margin-top: 3px;
      margin-bottom: 2px;
  }
</style>
