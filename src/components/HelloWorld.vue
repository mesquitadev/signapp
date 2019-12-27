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
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">INSERIR INFORMACOES</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Inserir Informacoes</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Nome*" required v-model="nome"/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Setor*" required v-model="setor"/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Telefone*" required v-model="telefone"/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Celular*" required v-model="celular"/>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required v-model="email"/>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Site" required v-model="site"/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-checkbox v-model="checkbox1" label="Tem OAB ?" @click.prevent.once="checkbox1 =  !false"/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="OAB"  v-model="oab" v-if="checkbox1 === true "/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  Cor De fundo 1
                  <v-color-picker class="ma-2" hide-inputs v-model="bg1"/>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  Cor De fundo 2
                  <v-color-picker class="ma-2" hide-inputs v-model="bg2"/>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-file-input @change="uploadImage" ref="file" class="logo-img" label="Logomarca Personalizada?"/>
                </v-col>


              </v-row>
            </v-container>
            <small>*Campos Obrigatorios</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Gerar Assinatura</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
        <Card  :style="hideCard" class="card"
               :nome="this.nome"
               :setor="this.setor"
               :telefone="this.telefone"
               :celular="this.celular"
               :email="this.email"
               :site="this.site"
               :oab="this.oab"
               :bg1="this.bg1"
               :bg2="this.bg2"
               :logo="this.logo"
        />
      </v-flex>
      <v-flex xs12 md2/>
    </v-layout>

  </v-container>
</template>

<script>
import Card from './Card'
export default {
  name: 'HelloWorld',
  data() {
    return {
      checkbox1: false,
      dialog: false,
      loading: false,
      nome : "",
      setor: "",
      telefone: "",
      celular: "",
      email: "",
      site: "www.mesquitadev.me",
      oab : "",
      bg1 : "#fff",
      bg2 : "#ca2626",
      logo: null
    }
  },
  components:{
    Card
  },
  computed: {
    hideCard() {
      return {
        "display": "initial"
      }
    },
  },
  methods:{
    uploadImage: function() {
      var file = this.$refs.file.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        this.logo = e.target.result
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(file);
    }
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
