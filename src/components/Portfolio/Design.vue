<template>
  <v-container>
    <v-layout align-center justify-space-between row>
      <v-flex v-for="design in designList" :key="design.id" xs3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex flexbox>
                  <span class="headline">{{design.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">{{design.description}}</span><br>
              <span>{{design.title}}</span><br>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange" to="/">Home</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        designList: [
          {id: '1', title: 'Car site', description: 'this is my first job with design'},
          {id: '2', title: 'Car site', description: 'this is my first job with design'},
          {id: '3', title: 'Car site', description: 'this is my first job with design'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
