<template>
    <div class="wrapperAgendaBtn">
        <a class="agendaButton" href="#">{{ msg }}</a>
    </div>
</template>
<script>
export default {
  name: 'BtnLireSuite',
  props: {
    msg: String
  }
}
</script>
