<template>
  <v-container>
    <nuxt-link to="/">
      <img
        :src="logo"
        class="logo"
      >
    </nuxt-link>
    <v-container grid-list-lg>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          lg6
        >
          <v-card raised>
            <v-card-title primary-title>
              <div>
                <div class="headline">
                  <a
                    href="https://joytocode.com/plainlogo"
                    target="_blank"
                  >PlainLogo</a>
                </div>
                <span class="grey--text text--darken-3">&#x1F3A8; Logo design made plain.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                href="https://github.com/joytocode/plainlogo"
                target="_blank"
                title="GitHub"
                icon
              >
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn
                href="https://joytocode.com/plainlogo"
                target="_blank"
                title="PlainLogo"
                icon
              >
                <v-icon>fas fa-external-link-square-alt</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          lg6
        >
          <v-card raised>
            <v-card-title primary-title>
              <div>
                <div class="headline">
                  <a
                    href="https://www.npmjs.com/package/lighthouse-lambda"
                    target="_blank"
                  >lighthouse-lambda</a>
                </div>
                <span class="grey--text text--darken-3">&#x1F6A7; Run Google Chrome Lighthouse on AWS Lambda.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                href="https://github.com/joytocode/lighthouse-lambda"
                target="_blank"
                title="GitHub"
                icon
              >
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.npmjs.com/package/lighthouse-lambda"
                target="_blank"
                title="NPM"
                icon
              >
                <v-icon>fab fa-npm</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="text-xs-center my-4">
      <p class="title accent--text text--lighten-1">A small team of developers who love building side projects.</p>
      <v-btn
        href="https://github.com/joytocode"
        target="_blank"
        title="GitHub"
        large
        icon
      >
        <v-icon
          color="primary"
          large
        >fab fa-github</v-icon>
      </v-btn>
      <v-btn
        href="https://twitter.com/joytocode"
        target="_blank"
        title="Twitter"
        large
        icon
      >
        <v-icon
          color="primary"
          large
        >fab fa-twitter</v-icon>
      </v-btn>
      <v-btn
        href="mailto:team@joytocode.com"
        title="Email"
        large
        icon
      >
        <v-icon
          color="primary"
          large
        >fas fa-envelope</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import logo from '~/assets/img/logo-with-tagline.png'

export default {
  head: {
    title: 'JoyToCode - Innovate the Next.'
  },
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  max-width: 80%
  display: block
  margin: 0 auto
</style>
