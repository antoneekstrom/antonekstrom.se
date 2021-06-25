<script>
import SocialLinks from "./SocialLinks.svelte";

</script>
<header
  class="page-inset sticky top-0 z-10 bg-white shadow-lavendel">
  <div class="py-4 sm:py-8 flex flex-row gap-4 justify-between">
    <div class="flex flex-row gap-20 items-center">
      <a href="#the-title">
        <h1
          class="flex items-center px-6 py-1 text-xs sm:text-sm font-regular leading-none sm:leading-tight font-brand bg-lavendel-900 text-lavendel uppercase whitespace-nowrap rounded-sm hover:bg-lavendel-700 transition-colors duration-100">
          Anton Ekström
        </h1>
      </a>
      <nav class="hidden lg:block">
        <ul class="flex flex-row gap-8 items-center">
          <li>
            <a
              href="#projekt"
              class="px-6 py-1 text-sm font-regular font-brand text-black uppercase hover:bg-lavendel-900 hover:text-lavendel rounded-sm transition-colors duration-100"
              >Projekt</a>
          </li>
          <li>
            <a
              on:click={() => {window.alert("finns inte än :(")}}
              href="#plupp"
              class="px-6 py-1 text-sm font-regular font-brand text-black uppercase hover:bg-lavendel-900 hover:text-lavendel rounded-sm transition-colors duration-100"
              >CV</a>
          </li>
          <li>
            <a
              href="#kontakt"
              class="px-6 py-1 text-sm font-regular font-brand text-black uppercase hover:bg-lavendel-900 hover:text-lavendel rounded-sm transition-colors duration-100"
              >Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <SocialLinks />
    </div>
  </div>
</header>
