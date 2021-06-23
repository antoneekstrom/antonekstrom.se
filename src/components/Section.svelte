
<script lang="ts">
  export let title: string;
  export let eyebrow: string;
</script>

<section>
  <h2 class="title-eyebrow">{eyebrow}</h2>
  <h1 class="title text-tag mt-3">{title}</h1>
  <div>
    <slot />
  </div>
</section>