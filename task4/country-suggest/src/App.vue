<template>
  <div id="app">
    <CountrySuggest :apiUrl="apiUrl"/>
  </div>
</template>

<script>
import CountrySuggest from './components/CountrySuggest'

export default {
  name: 'App',
  components: {
    CountrySuggest
  },
  data () {
    return {
      apiUrl: 'https://restcountries.eu/rest/v2/all?fields=name;flag'
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
