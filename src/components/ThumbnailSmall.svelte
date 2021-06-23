<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<article>
  <div class="flex flex-col gap-8">
    <a href="#plupp" class="cursor-pointer hover-peek">
      <img
        src={src}
        alt={alt}
        class="border-2 border-black link object-cover object-top h-64 w-96" />
    </a>
    <div>
      <slot />
    </div>
  </div>
</article>
