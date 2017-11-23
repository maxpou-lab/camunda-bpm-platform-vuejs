<template>
  <div id="bpmnViewer"></div>
</template>

<script>
import BpmnViewer from 'bpmn-js'

export default {
  name: 'BpmnViewer',
  props: ['processDefinition'],
  data () {
    return {
      viewer: {}
    }
  },
  watch: {
    processDefinition () {
      this.viewer.importXML(this.processDefinition, function (err) {
        if (err) {
          console.warn('error rendering', err)
        }
      })
    }
  },
  mounted () {
    this.viewer = new BpmnViewer()
    this.viewer.attachTo('#bpmnViewer')
  }
}
</script>

<style scoped>
#bpmnViewer {
  height: 750px;
}
</style>
