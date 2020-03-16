<template>
  <div id="agenda">
    <div class="agendaHeader">
      <h2>agenda</h2>
    </div>
    <div :key="index" v-for="(rdv, index) in Limit3" class="agendaRdv">
      <div class="rdvTitle">
        <h3>
          <span>{{ rdv.date }}</span>
          <span>{{ rdv.title }}</span>
        </h3>
      </div>
      <div class="rdvDescription">
        <p>{{ rdv.description }}</p>
      </div>
    </div>
    <!-- <div class="wrapperAgendaBtn">
        <a class="agendaButton" href="#">Lire la suite</a>
    </div>-->
    <btnLireSuite msg="Lire la suite"/>
  </div>
</template>
<script>
import btnLireSuite from '@/components/BtnLireSuite.vue'

export default {
  name: 'Agenda',
  components: {
    btnLireSuite
  },
  data: function () {
    return {
      scheduler: [
        {
          date: '08/02',
          title: 'Portes Ouvertes',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident explicabo sit rerum error suscipit debitis possimus voluptas tempore cupiditate animi rem cum minus adipisci asperiores est, eos, eligendi fugiat?'
        },
        {
          date: '08/02',
          title: 'Portes Ouvertes',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident explicabo sit rerum error suscipit debitis possimus voluptas tempore cupiditate animi rem cum minus adipisci asperiores est, eos, eligendi fugiat?'
        },
        {
          date: '08/02',
          title: 'Portes Ouvertes',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident explicabo sit rerum error suscipit debitis possimus voluptas tempore cupiditate animi rem cum minus adipisci asperiores est, eos, eligendi fugiat?'
        },
        {
          date: '08/02',
          title: 'Portes Ouvertes',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident explicabo sit rerum error suscipit debitis possimus voluptas tempore cupiditate animi rem cum minus adipisci asperiores est, eos, eligendi fugiat?'
        }
      ]
    }
  },
  computed: {
    Limit3 () {
      return this.scheduler.slice(0, 3)
    }
  }
}
</script>
<style lang="scss">
</style>
