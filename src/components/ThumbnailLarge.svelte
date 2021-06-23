<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<article>
  <div class="flex flex-col xl:flex-row gap-20">
    <a href="#plupp" class="cursor-pointer hover-peek">
      <img src={src}
      alt={alt} class="max-w-screen md:max-w-screen-sm border-2 border-black object-cover object-top link" />
    </a>
    <div>
      <slot />
    </div>
  </div>
</article>
