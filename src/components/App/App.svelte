<script lang="ts">
import 'bootstrap';
import AppWrapper from "../AppWrapper/AppWrapper.svelte";


</script>
<AppWrapper>
  <div class="root__wrapper">
    <div class="header">
      <div class="left">
        <button>
          <i class="bi bi-list"></i>
        </button>
        <button>
          <i class="bi bi-house-door"></i>
        </button>
      </div>
      <div class="right">
        <button>
          <i class="bi bi-plus"></i>
        </button>
        <button>
          <i class="bi bi-bell-fill"></i>
        </button>
        <button>
          <i class="bi bi-house"></i>
        </button>
      </div>
    </div>
      
  </div>
</AppWrapper>

<style>
  .root__wrapper {
    width: 100%;
    text-align: center;
  }
  .header {
  display: flex;
  justify-content: space-between;
}

</style>
