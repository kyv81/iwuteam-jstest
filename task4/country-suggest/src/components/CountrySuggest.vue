<template>
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col">
        <h1>{{title}}</h1>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-4 offset-md-4">
        <div class="input-group">
          <input type="text" class="form-control" :placeholder="placeholder" v-model="searchCountry">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <ul class="country-list" v-if="filteredList.length > 0">
          <li v-for="(country, index) in filteredList" :key="index" class="d-flex">
            <img class="country-flag mr-2" :src="country.flag"><span>{{country.name}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountrySuggest',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      title: 'Country Suggest',
      placeholder: 'Enter country',
      searchCountry: '',
      result: []
    }
  },
  computed: {
    filteredList () {
      return this.result.filter(el => {
        if (this.searchCountry !== '' && el.name.toLowerCase().search(this.searchCountry.toLowerCase()) !== -1) {
          return true
        }
      })
    }
  },
  methods: {
    async getData (url) {
      const response = await fetch(url)
      const result = await response.json()
      this.result = result
    }
  },
  created () {
    this.getData(this.apiUrl)
  }
}
</script>

<style scoped>
ul {
  padding: 5px 10px;
  border: 2px solid #d8d8d8;
  border-top-width: 0;
  border-radius: 0 0 0.25rem 0.25rem;
}
input[type="text"] {
  border: 2px solid #d8d8d8;
  box-shadow: none;
  outline: none;
}
input[type="text"]:focus {
  border-bottom-style: dotted;
}
.country-flag {
  width: 20px;
  height: 20px;
}
</style>
