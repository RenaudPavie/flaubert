<template>
  <div class="homeTitle">
    <h1 v-html="title"></h1>
  </div>
</template>
<script>
export default {
    data: function() {
        return {
            title:'Un lycée <span>ouvert sur le monde</span> et adapté à toutes les ambitions, au coeur de la <span>Normandie.</span>'
        }
    }
};
</script>
