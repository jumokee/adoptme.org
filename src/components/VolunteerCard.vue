<template>
  <div class="card pb-4">
    <div class="card-body">
      <h5 class="card-title text-left pl-2 mb-0">VOLUNTEERS</h5>
      <img class="card-img" src="@/assets/img/girl.png" alt="Card image" />
      <p class="card-text text-left pt-5 px-3">
        Amazing people, making a difference every single day. Join
        us now and be part of a community that is changing the
        world.
      </p>
    </div>
    <div class="card-body pl-3 d-flex justify-content-start">
      <router-link
        :to="{ name: 'volunteers' }"
        tag="button"
        class="card-link btn btn-outline-primary btn-join"
      >JOIN US</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  border: none;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(133, 133, 133, 0.85);
  -moz-box-shadow: 0px 3px 5px 0px rgba(133, 133, 133, 0.85);
  box-shadow: 0px 3px 5px 0px rgba(133, 133, 133, 0.85);
  height: 100%;
}
.card-body {
  padding: 0;

  .card-title {
    height: 40px;
    line-height: 40px;
    font-family: $font-family-primary;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: $color-blue;
  }
  .card-text {
    font-size: 0.8rem;
  }
}
.card-img {
  border-radius: 0;
  width: 100%;
  object-fit: cover;
}
.btn-join {
  border: 2px solid $color-blue;
  border-radius: 0;
  line-height: 1rem;
  max-height: 2rem;

  color: $color-blue;
  font-weight: bold;
  font-size: 0.8rem;
}
.btn-outline-primary:hover {
  background-color: $color-blue;
  color: white;
}
</style>
