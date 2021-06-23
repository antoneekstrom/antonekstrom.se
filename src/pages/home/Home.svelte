<script lang="ts">
  import Header from "../../components/Header.svelte";
  import Page from "../../components/Page.svelte";
  import Hero from "./Hero.svelte";
  import Projects from "./Projects.svelte";
  import University from "./University.svelte";
  import Skills from "./Skills.svelte";
  import Emoji from "./Emoji.svelte";
</script>

<Page>
  <Header />
  <div
    class="page-inset mt-10 flex flex-col gap-16 md:gap-32 w-full overflow-x-hidden"
  >
    <Hero />
    <University />
    <Projects />
    <Skills />
    <Emoji />
  </div>
</Page>
