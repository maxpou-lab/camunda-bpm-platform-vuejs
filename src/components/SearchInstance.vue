<template>
  <div class="SearchInstance">
    <input type="text" v-model="searchedInstance" v-on:keyUp="$emit('search', searchedInstance)">
    <input type="submit" @click="$emit('search', searchedInstance)">
  </div>
</template>

<script>
export default {
  name: 'SearchInstance',
  data () {
    return {
      searchedInstance: '30802d71-d05a-11e7-ae60-0242ac110002'
    }
  }
}
</script>
