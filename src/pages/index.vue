<template>
  <v-container>
    <img
      :src="logo"
      class="logo"
    >
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
                    href="https://joytocode.github.io/plainlogo"
                    target="_blank"
                  >PlainLogo</a>
                </div>
                <span class="grey--text text--darken-3">Logo design made plain.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                href="https://github.com/joytocode/plainlogo"
                target="_blank"
                icon
              >
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn
                href="https://joytocode.github.io/plainlogo"
                target="_blank"
                icon
              >
                <v-icon>fas fa-paper-plane</v-icon>
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
                <span class="grey--text text--darken-3">Run Google Chrome Lighthouse on AWS Lambda.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                href="https://github.com/joytocode/lighthouse-lambda"
                target="_blank"
                icon
              >
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.npmjs.com/package/lighthouse-lambda"
                target="_blank"
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
      <p class="body-2 accent--text text--lighten-1">A small team of developers who love building side projects.</p>
      <v-btn
        href="https://github.com/joytocode"
        target="_blank"
        icon
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn
        href="https://twitter.com/joytocode"
        target="_blank"
        icon
      >
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
      <v-btn
        href="mailto:team@joytocode.com"
        icon
      >
        <v-icon>fas fa-envelope</v-icon>
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
  max-width: 90%
  display: block
  margin: 0 auto
</style>
