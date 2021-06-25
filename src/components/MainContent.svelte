<script lang="ts">
  import PageInset from "./PageInset.svelte";
</script>

<PageInset>
  <div class="w-full flex flex-col gap-16 md:gap-32 pt-12 pb-32">
    <slot />
  </div>
</PageInset>
