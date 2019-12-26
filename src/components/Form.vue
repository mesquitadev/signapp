<template>
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
                            <v-text-field label="OAB"  v-if="checkbox1 === true "/>
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
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            checkbox1: false,
            dialog: false,
            loading: false
        }
    },
    props:{
        nome: {
            type: String
        },
        setor: {
            type: String
        },
        telefone: {
            type: String
        },
        celular: {
            type : String
        },
        email: {
            type: String
        },
        site: {
            type: String,
            default: "www.mesquitadev.me"
        },
        logo: {
            type: Image
        }
    }
}
</script>

<style scoped>

</style>
