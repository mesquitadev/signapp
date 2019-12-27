<template>
        <v-card
            class="mx-auto"
        >
            <div class="card">
                <div class="card-data" :style="background1">
                    <div class="data">
                        <span id="nome" class="sec"> {{ nome }} </span>
                        <span id="setor" class="sec"> {{ setor }} </span>
                           <div class="telefones">
                               <span class="tel" id="tel1"> {{ telefone }} </span>
                               <span class="tel"> {{ celular }} </span>
                           </div>
                        <span >{{ email }}</span>
                        <span id="site">{{ site }}</span>
                    </div>
                </div>
                <div class="logo-data" :style="background2">
                    <img class="logo" :src="logo" alt="Logo">
                </div>
            </div>
        </v-card>

</template>

<script>
export default {
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
            type: String,
            default : require('../statics/logo.png')
        },
        oab: {
            type: String
        },
        bg1: {
            type: String
        },
        bg2: {
            type: String
        }
    },
    computed: {
        background1() {
            return {
                "background-color": this.bg2
            };
        },
        background2() {
            return {
                "background-color": this.bg1
            };
        }
    }
}
</script>

<style lang="stylus" scoped>
.card
    color white
    width 700px;
    height 220px;
    position relative;
    .card-data
        text-align justify
        width 500px
        /*background-color #ca2626*/
        height 220px
        left 0px
        position absolute;
        .data
            margin-left 20px
            margin-top 15px
        .data span
            display block
        #nome
            font-size 2rem
            margin-right 5px
        #nome::after
            vertical-align sub
            font-size 1.5rem
            content " "
        #setor::before
            font-size 1.5em
            content " | "
        .sec
            display inline-block !important
            font-size 1.2rem
            line-height 2
            vertical-align  middle
        .tel
            display inline-block !important
        #tel1::after
            content " / "
        #site
            margin-top 30px

    .logo-data
        position absolute
        right 0px
        width 200px
        height 220px
        /*background-color white*/
        display flex
        align-items center
        justify-content center
        .logo
            display flex
            justify-content center
            align-items center
            width 100px
            height 100px



</style>
