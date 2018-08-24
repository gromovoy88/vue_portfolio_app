<template>
  <v-container>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Element {{this.message}}.</v-card-title>
        <v-card-text>
          Just click for close this window.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-layout align-center justify-space-between row>
      <v-flex xs6>
        <v-form ref="form">
          <v-text-field
            v-model="id"
            label="ID"
            required
          ></v-text-field>
          <v-text-field
            v-model="title"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="description"
            label="Description"
            required
          ></v-text-field>
          <v-select
            v-model="type"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Chose type"
            required
          ></v-select>
          <v-btn
            @click="submit"
            @click.stop="dialog = true"
          >
            submit
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        message: '',
        type: null,
        items: [
          'Design',
          'Sites'
        ],
        id: '',
        title: '',
        description: ''
      }
    },
    methods: {
      submit () {
        const element = {
          id: this.id,
          title: this.title,
          description: this.description,
          type: this.type
        }
        if (this.title !== '') {
          this.$store.dispatch('addPortfolioElement', element).then(data => {
            this.message = 'adding was succesfully'
            console.log(data)
          })
        } else {
          this.message = 'adding was failed'
        }
      }
    }
  }
</script>

<style scoped>

</style>
