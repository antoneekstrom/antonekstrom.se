<script lang="ts">
  import Header from "../components/Header.svelte";
  import Section from "../components/Section.svelte";
  import Page from "../components/Page.svelte";
  import Hero from "../components/Hero.svelte";
  import ThumbnailLarge from "../components/ThumbnailLarge.svelte";
  import ThumbnailSmall from "../components/ThumbnailSmall.svelte";
  import Speedbox from "../components/Speedbox.svelte";
</script>

<Page>
  <Header />
  <div
    class="page-inset mt-20 flex flex-col gap-52 lg:gap-80 w-full overflow-x-hidden">
    <Hero />
    <Section title="Projekt." eyebrow="jag skapar upplevelser">
      <div>
        <p class="paragraph">
          Det råkar vara så att jag har ett flertal projekt under mitt bälte.
          Dock så har jag tyvärr inte slutfört särskilt många av dem. Nedan kan
          du ta en titt på de projekt som jag är mest stolt över!
        </p>
      </div>
      <div class="mt-12">
        <ThumbnailLarge
          alt="iMatJS screenshot"
          src="/images/screenshots/imatjs_screenshot.png">
          <div class="flex flex-col justify-between h-full">
            <div>
              <a href="#plupp">
                <h1 class="subtitle link inline-block">iMatJS</h1>
              </a>
              <p class="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                iusto sunt commodi aut molestias iste placeat deleniti
                recusandae fugit obcaecati.
              </p>
            </div>
            <div class="btn-row">
              <button class="btn btn-primary">besök sidan</button>
              <button class="btn btn-secondary">läs mer</button>
            </div>
          </div>
        </ThumbnailLarge>
        <ul class="mt-24 gap-24 grid justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ThumbnailSmall
            alt="chalmers.it screenshot"
            src="/images/screenshots/chalmers-it_screenshot.png">
            <div class="flex flex-col justify-between h-full">
              <div>
                <a href="#plupp">
                  <h1 class="subtitle text-3xl link inline-block">chalmers.it</h1>
                </a>
                <p class="paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  iusto sunt commodi aut molestias iste placeat deleniti recusandae
                  fugit obcaecati.
                </p>
              </div>
              <div>
                <button class="btn btn-secondary">läs mer</button>
              </div>
            </div>
          </ThumbnailSmall>
          <ThumbnailSmall
            alt="EDI screenshot"
            src="/images/screenshots/edi_screenshot.png">
            <div>
              <div>
                <a href="#plupp">
                  <h1 class="subtitle text-3xl link inline-block">EDI</h1>
                </a>
                <p class="paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  iusto sunt commodi aut molestias iste placeat deleniti recusandae
                  fugit obcaecati.
                </p>
              </div>
              <div>
                <button class="btn btn-secondary">läs mer</button>
              </div>
            </div>
          </ThumbnailSmall>
          <ThumbnailSmall
            alt="EDI screenshot"
            src="/images/screenshots/edi_screenshot.png">
            <div>
              <div>
                <a href="#plupp">
                  <h1 class="subtitle text-3xl link inline-block">EDI</h1>
                </a>
                <p class="paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  iusto sunt commodi aut molestias iste placeat deleniti recusandae
                  fugit obcaecati.
                </p>
              </div>
              <div>
                <button class="btn btn-secondary">läs mer</button>
              </div>
            </div>
          </ThumbnailSmall>
        </ul>
      </div>
    </Section>
    <Section title="Expert-skrivare." eyebrow="jag skiver snabbt">
      <p class="paragraph">Det råkar vara så att jag skriver jättesnabbt.*</p>
      <Speedbox />
    </Section>
    <Section title="Förmågor." eyebrow="jag besitter flera förmågor">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet
        sollicitudin eget auctor. Sit quam faucibus magna ut euismod. Dolor,
        vitae nisi, scelerisque egestas molestie. Morbi semper auctor at luctus.
      </p>
    </Section>
    <Section title="HOM BRE." eyebrow="jag är it-student på chalmers">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet
        sollicitudin eget auctor. Sit quam faucibus magna ut euismod. Dolor,
        vitae nisi, scelerisque egestas molestie. Morbi semper auctor at luctus.
      </p>
    </Section>

    <Section title="Emoji-expert." eyebrow="jag professionell emoji-kritiker">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet
        sollicitudin eget auctor. Sit quam faucibus magna ut euismod. Dolor,
        vitae nisi, scelerisque egestas molestie. Morbi semper auctor at luctus.
      </p>
    </Section>
    <Section title="Goblin." eyebrow="jag är tvär disciplinär">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet
        sollicitudin eget auctor. Sit quam faucibus magna ut euismod. Dolor,
        vitae nisi, scelerisque egestas molestie. Morbi semper auctor at luctus.
      </p>
    </Section>
  </div>
</Page>
