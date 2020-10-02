<template>
  <Layout navbarTitle="Projects">

    <v-layout row wrap>

    <v-card class="mx-auto mt-2 mb-0" max-width="344" outlined v-for="project in projects" :key="project.title">
      <v-list-item>
        <v-list-item-content>
          <div class="overline">{{ project.type }}</div>
          <v-list-item-title class="headline">{{ project.title }}</v-list-item-title>
          <div class="text--primary">
            <br />
            {{ project.description }}
          </div>
        </v-list-item-content>
      </v-list-item>
      <br /><br />
      <v-card-actions style="position: absolute; bottom: -4px;">
        <v-btn v-for="(url, name) in project.urls" :key="url" text :href="url" target="_blank">{{ name }}</v-btn>
      </v-card-actions>
    </v-card>

    </v-layout>
    
  </Layout>
</template>

<script>
import projects from '~/data/projects.json'

export default {
  name: "Projects",
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        name: "description",
        content: "Project Index Page"
      }
    ]
  },
  data() {
    return {
      projects        
    }
  }
};
</script>

<style>
</style>
