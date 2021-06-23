<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
  export let row = false;
  export let tags: string[] = [];
  export let link: string = undefined;
  // export let path: string = undefined;
</script>

<article>
  <div class="flex flex-col gap-6 {row && "xl:flex-row xl:gap-16"}">
    <a href={link} target="_blank" class="{!row && "aspect-w-2 aspect-h-1"} cursor-auto">
      <img
        src={src}
        alt={alt}
        class="border-2 border-black link object-cover object-top w-full h-full {row && "xl:max-w-screen-md"} cursor-pointer hover-peek" />
    </a>
    <div class="flex flex-col">
      <div>
        <div class="flex flex-row gap-6 items-center">
        <a href={link} target="_blank">
          <h1 class="subtitle text-3xl link inline-block">{title}</h1>
        </a>
          <ul class="flex flex-row gap-3 items-center">
            {#each tags as tag}
              <li><span class="bg-lavendel-600 text-white text-sm px-4 py-1 rounded-md font-semibold">{tag}</span></li>
            {/each}
          </ul>
        </div>
        <p class="paragraph">
          <slot />
        </p>
      </div>
      <div>
        <button class="btn btn-secondary">läs mer</button>
      </div>
    </div>
  </div>
</article>
