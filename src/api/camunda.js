import axios from 'axios'

// http://localhost:8080/engine-rest/process-instance/30802d71-d05a-11e7-ae60-0242ac110002
// https://docs.camunda.org/manual/latest/reference/rest/process-instance/get/
export function getProcessInstance (idProcess) {
  const url = `${process.env.CAMUNDA_URL}/process-instance/${idProcess}`
  return axios.get(url, {
    withCredentials: false
  }).then(response => response.data)
}

// https://docs.camunda.org/manual/latest/reference/rest/process-definition/get-xml/
// http://localhost:8080/engine-rest/process-definition/invoice:1:2f6ff5a5-d05a-11e7-ae60-0242ac110002/xml
export function getProcessDefinition (definitionId) {
  const url = `${process.env.CAMUNDA_URL}/process-definition/${definitionId}/xml`
  return axios.get(url, {
    withCredentials: false
  }).then(response => response.data)
}
