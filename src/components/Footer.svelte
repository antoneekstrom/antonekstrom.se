<script>
  import SocialLinks from "./SocialLinks.svelte";
  import PageInset from "./PageInset.svelte";
</script>

<div class="bg-lavendel-900">
  <PageInset>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 py-12"
    >
      <section>
        <h1 class="subsubtitle my-4">Kontakt</h1>
        <a
          class="link hover:active-link"
          href="mailto:anton.e.ekstrom@gmail.com">anton.e.ekstrom@gmail.com</a
        >
      </section>
      <section class="lg:justify-self-center">
        <h1 class="subsubtitle my-4">Om</h1>
        <p class="paragaph">Den här sidan är gjord och skapad av mig.</p>
      </section>
      <section class="lg:justify-self-end">
        <h1 class="subsubtitle my-4">Länkar</h1>
        <ul>
          <li>
            <a class="link hover:active-link" href="https://antonekstrom.se/"
              >https://antonekstrom.se/</a
            >
          </li>
        </ul>
        <div class="mt-6">
          <SocialLinks />
        </div>
      </section>
    </div>
  </PageInset>
</div>
