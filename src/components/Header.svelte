<script>
  import SocialLinks from "./SocialLinks.svelte";
  import PageInset from "./PageInset.svelte";
  import { contactMe, goToProjects, goToStart, showCV } from "../navigation";
  import HeaderLink from "./HeaderLink.svelte";
</script>

<div class="w-full bg-white shadow-lavendel">
  <PageInset>
    <div class="py-4 sm:py-8 flex flex-row gap-4 justify-between">
      <div class="flex flex-row gap-20 items-center">
        <button on:click={goToStart}>
          <h1
            class="flex items-center px-6 py-1 text-xs sm:text-sm font-regular leading-none sm:leading-tight font-brand bg-lavendel-900 text-lavendel uppercase whitespace-nowrap rounded-sm hover:bg-lavendel-700 transition-colors duration-100"
          >
            Anton Ekström
          </h1>
        </button>
        <nav class="hidden lg:block">
          <ul class="flex flex-row gap-8 items-center">
            <li>
              <HeaderLink action={goToProjects}>Projekt</HeaderLink>
            </li>
            <li>
              <HeaderLink action={showCV}>CV</HeaderLink>
            </li>
            <li>
              <HeaderLink action={contactMe}>Kontakt</HeaderLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  </PageInset>
</div>
