<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense v-for="path in paths" :key="path.id">
        <v-list-tile :to="path.link" v-bind:id="path.name">
          <v-list-tile-action>
            <v-icon>{{path.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{path.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{this.appName}}</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      appName: 'Portfolio by Yaroslav Hromovyi',
      paths: [
        {id: 1, name: 'Design', link: '/portfolio/design', icon: 'stars'},
        {id: 2, name: 'Sites', link: '/portfolio/sites', icon: 'code'},
        {id: 3, name: 'Other', link: '/portfolio/other', icon: 'explore'}
      ]
    }),
    props: {
      source: String
    }
  }
</script>
