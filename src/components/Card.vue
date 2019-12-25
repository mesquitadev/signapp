<template>
    <div class="card">
        <div class="card-data">
            <div class="data">
                <span id="nome">Victor Mesquita</span>
                <span id="setor">Desenvolvimento</span>
                <span>(98) 99174-1075</span>
                <span class="telefone">(98) 99174-1075</span>
                <span>mesquitadev@gmail.com</span>
                <span>www.eyetechia.com.br</span>
            </div>
        </div>
        <div class="logo-data">
            <img :src="image" alt="Logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props:{
            image:{
                type: Image
            }
        }
    }
</script>

<style lang="stylus" scoped>
.card
    width 700px;
    border 1px solid #444;
    height 220px;
    position relative;
    .card-data
        text-align justify
        width 500px
        left 0px
        position absolute;
        .data
            padding 10px
        .data span
            display block
        #nome
            font-size 2rem
        #nome::after
            content " | "
        #setor span
            display inline-block
        .telefone
            display inline-block
    .logo-data
        position absolute
        right 0px
        border 1px solid red
        width 200px
        height 220px


</style>
