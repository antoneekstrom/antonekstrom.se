<script lang="ts">
  import Header from "../../components/Header.svelte";
  import Page from "../../components/Page.svelte";
  import Footer from "../../components/Footer.svelte";
  import Hero from "./Hero.svelte";
  import Projects from "./Projects.svelte";
  import University from "./University.svelte";
  import Skills from "./Skills.svelte";
  import Emoji from "./Emoji.svelte";
  import Gifs from "./Gifs.svelte";
import Typing from "./Typing.svelte";
</script>

<Page>
  <Header />
  <div class="page-inset mt-10 overflow-x-hidden">
    <main
      class="flex flex-col gap-16 md:gap-32 w-full"
    >
      <Hero />
      <University />
      <div id="projekt">
        <Projects />
      </div>
      <Skills />
      <Typing />
      <Emoji />
      <!-- <Gifs /> -->
    </main>
  </div>
  <div id="kontakt">
    <Footer />
  </div>
</Page>
