<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
  export let row = false;
  export let tags: string[] = [];
  export let link: string = undefined;
  export let github: string = undefined;
  // export let path: string = undefined;
</script>

<!-- TODO gör med "named slots" -->

<article>
  <div class="flex flex-col gap-6 {row && 'xl:flex-row xl:gap-16'}">
    <a
      href={link}
      target="_blank"
      class="{!row && 'aspect-w-2 aspect-h-1'} group focus:outline-none"
    >
      <img
        {src}
        {alt}
        class="border-2 border-black link object-cover object-top w-full h-full {row &&
          'xl:max-w-screen-md'} peek group-hover:active-peek group-focus-within:active-peek link group-focus-within:active-link group-hover:active-link"
      />
    </a>
    <div class="flex flex-col">
      <div>
        <div class="flex flex-row gap-6 items-center">
          <a href={link} target="_blank" class="">
            <h1 class="subsubtitle inline-block link hover:active-link">
              {title}
            </h1>
          </a>
          <ul class="flex flex-row gap-3 items-center">
            {#each tags as tag}
              <li>
                <span
                  class="bg-lavendel-600 text-white text-sm px-4 py-1 rounded-md font-semibold"
                  >{tag}</span
                >
              </li>
            {/each}
          </ul>
        </div>
        <p class="paragraph">
          <slot />
        </p>
      </div>
      <div class="btn-row">
        <button class="btn btn-secondary">läs mer</button>
        {#if github}
          <a class="btn btn-secondary" href={github} target="_blank">
            <svg
              class="text-lavendel fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              ><path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              /></svg
            >
          </a>
        {/if}
      </div>
    </div>
  </div>
</article>
