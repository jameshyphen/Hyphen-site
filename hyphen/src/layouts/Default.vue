<template>
    <v-app>
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item v-for="item in menuItems" :key="item.title" :href="item.href" :target="item.target ? item.target : ''">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}  
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <br />
        <v-divider></v-divider>
        <v-subheader>Social</v-subheader>

        <v-list dense>
          <div v-for="item in socialEntries" :key="item.title">
          <v-list-item v-if="item.title" :href="item.href" target="_blank">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}  
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title><a href="/" style="text-decoration: none; color: inherit;">{{this.title}}</a></v-toolbar-title>

        <v-spacer />

        <div class="toolbar-icons">
        <v-btn icon class="mx-1 a-fix" v-for="entry in socialEntries" :key="entry.href" :href="entry.href" 
          target="_blank">
          <v-icon class="icon-fix"> {{ entry.icon }} </v-icon>
        </v-btn>
        </div>
        <a href="/" style="display: inline-block" class="mt-2 ml-2">
        <g-image src="~/assets/prof_sq.png" style="height: 28px; width: 28px; border-radius: 50%;" alt="Me" />
        </a>
      </v-app-bar>

      <v-main>
        <v-container fluid fill-height>
          <v-layout fill-width>
            <div class="col-10 mx-auto ">
              <slot />
            </div>
          </v-layout>
        </v-container>
      </v-main>

      <!-- <v-footer app inset>
        <span class="footer">@footer</span>
      </v-footer> -->
    </v-app>
</template>


<script>
import menuItems from "~/data/menu.json"
import socialEntries from "~/data/social.json"

export default {
  props: ['navbarTitle'],
  name: "Default",
  metaInfo: {
    meta: [
      { property: "og:title", content: "Theodoros Ntakouris" },
      { property: "og:type", content: "website" }
    ]
  },
  data() {
    return {
      title: this.navbarTitle ? this.navbarTitle : '',
      menuItems,
      socialEntries,
      drawer: null
    };
  }
};
</script>

<style>
.v-expansion-panel {
  background-color: black !important;
}

.v-expansion-panel-content {
  background-color: black;
}

a.v-btn {
  border-radius: 0;
  font-weight: bold;
}

a.v-btn:hover {
  color: black;
  background-color: white;
}

.icon-fix {
  font-weight: normal !important;
  background-color: transparent !important;
}

.a-fix:hover, .icon-fix:hover {
  background-color: transparent !important;
}

.v-toolbar__content {
  background-color: black;
}

.v-navigation-drawer__content {
  background-color: black;
}

.v-data-table, .v-card {
  background-color: black !important;
}

.v-content, footer {
  background-color: black !important;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Noto Sans', sans-serif;
}

.fill-width {
  width: 100%;
}

.footer {
  font-size: 14px;
}

@media screen and (max-width: 670px) {
  .toolbar-icons {
    display: none;
  }
  .col-10 {
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
}
</style>
