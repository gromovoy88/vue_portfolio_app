<template>
  <v-container>
    <v-layout align-center justify-space-around row>
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
        pageName: 'Design'
      }
    },
    computed: {
      designList () {
        console.log(this.$store.getters.getDesign)
        return this.$store.getters.getDesign
      }
    }
  }
</script>

<style scoped>

</style>
