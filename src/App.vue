<template>
  <div id="app">
    <img src="./assets/logo.jpeg">
    <SearchInstance v-on:search="searchAndPrint" />
    <BpmnViewer :processDefinition="processDefinition" />
  </div>
</template>

<script>
import SearchInstance from './components/SearchInstance'
import BpmnViewer from './components/BpmnViewer'
import * as camundaApi from './api/camunda'

export default {
  name: 'app',
  data () {
    return {
      processDefinition: ''
    }
  },
  components: {
    SearchInstance,
    BpmnViewer
  },
  methods: {
    async searchAndPrint (userInput) {
      const definitionId = await camundaApi.getProcessInstance(userInput).then(data => {
        return data.definitionId
      })

      camundaApi.getProcessDefinition(definitionId).then(data => {
        this.processDefinition = data.bpmn20Xml
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
