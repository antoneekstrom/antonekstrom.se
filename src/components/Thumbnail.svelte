<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
  export let row = false;
</script>

<article>
  <div class="flex flex-col gap-6 {row && "xl:flex-row xl:gap-16"}">
    <a href="#plupp" class="{!row && "aspect-w-2 aspect-h-1"} cursor-auto">
      <img
        src={src}
        alt={alt}
        class="border-2 border-black link object-cover object-top w-full h-full {row && "xl:max-w-screen-md"} cursor-pointer hover-peek" />
    </a>
    <div class="flex flex-col">
      <div>
        <a href="#plupp">
          <h1 class="subtitle text-3xl link inline-block">{title}</h1>
        </a>
        <p class="paragraph text-sm md:text-base">
          <slot />
        </p>
      </div>
      <div>
        <button class="btn btn-secondary">läs mer</button>
      </div>
    </div>
  </div>
</article>
