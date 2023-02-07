<template>
  <div id="app">
    <!-- <toList /> -->
    <!-- <slotItem>匿名插槽</slotItem> -->
    <!-- <slotItem>
      <template v-slot:juming>
        <h1>具名插槽</h1>
      </template>
    </slotItem> -->
    <!-- <slotItem>
      <template slot-scope="{arr}">
        <div v-for="(item,index) in arr" :key="index">
          <h1>{{item}}</h1>
        </div>
      </template>
    </slotItem> -->
    <Count></Count>
    <!-- <div>
      <router-link to="/about?id=22">
        <button>关于</button>
      </router-link>
      <router-link to="/home/33" replace>
        <button>我的</button>
      </router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import toList from './components/toList'
// import slotItem from './components/slotItem.vue'
import Count from './components/count/count_item.vue'
export default {
  components: {
    // toList,
    // // slotItem,
    Count
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
