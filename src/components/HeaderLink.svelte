<script lang="ts">
  export let action: () => void | string = undefined;
</script>

{#if typeof action === "string"}
  <a
    href={action}
    class="px-6 py-1 text-sm font-regular font-brand text-black uppercase hover:bg-lavendel-900 hover:text-lavendel rounded-sm transition-colors duration-100"
    ><slot /></a
  >
{:else}
  <button
    on:click={action}
    class="px-6 py-1 text-sm font-regular font-brand text-black uppercase hover:bg-lavendel-900 hover:text-lavendel rounded-sm transition-colors duration-100"
    ><slot /></button
  >
{/if}
