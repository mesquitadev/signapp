<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Bem Vindo ao Gerador de Assinaturas de Email
        </h1>
      </v-flex>
    </v-layout>

    <v-spacer></v-spacer>
    <v-row justify="center">
      <Form />
    </v-row>

<!--    <v-row align="center">-->
<!--      <v-col class="text-center" cols="1" sm="12">-->
<!--        <div class="my-2">-->
<!--          <v-btn large color="primary">Inserir Informacoes </v-btn>-->
<!--        </div>-->
<!--      </v-col>-->
<!--    </v-row>-->

    <v-spacer/>
    <v-layout row>
      <v-flex xs12 md2/>
      <v-flex xs12 md8 class="col-card">
        <Card  :style="hideCard" class="card" :nome="nome"/>
      </v-flex>
      <v-flex xs12 md2/>
    </v-layout>

  </v-container>
</template>

<script>
import Card from './Card'
import Form from './Form'
export default {
  name: 'HelloWorld',
  components:{
    Card,
    Form
  },

  computed: {
    hideCard() {
      return {
        "display": "initial"
      }
    },
  }
};
</script>
<style lang="stylus" scoped>
.col-card
  display flex
  align-items center
  justify-content center
.card
  margin-top 50px
</style>
