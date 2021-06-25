<script lang="ts">
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import MainContent from "../../components/MainContent.svelte";
  import Page from "../../components/Page.svelte";
  import { ID_CONTACT_ME, ID_PROJECTS, ID_START_PAGE } from "../../navigation";
  import Hero from "./Hero.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
  import Typing from "./Typing.svelte";
  import University from "./University.svelte";
  import Emoji from "./Emoji.svelte";
</script>

<Page>
  <header slot="header">
    <Header />
  </header>
  <main slot="content">
    <MainContent>
      <div id={ID_START_PAGE}>
        <Hero />
      </div>
      <University />
      <div id={ID_PROJECTS}>
        <Projects />
      </div>
      <Typing />
      <Skills />
      <Emoji />
    </MainContent>
  </main>
  <footer slot="footer" id={ID_CONTACT_ME}>
    <Footer />
  </footer>
</Page>
