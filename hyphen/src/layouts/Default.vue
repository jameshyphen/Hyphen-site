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

      <v-content>
        <v-container fluid fill-height>
          <v-layout fill-width>
            <div class="col-10 mx-auto ">
              <slot />
            </div>
          </v-layout>
        </v-container>
      </v-content>

      <!-- <v-footer app inset>
        <span class="footer">@footer</span>
      </v-footer> -->
    </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
