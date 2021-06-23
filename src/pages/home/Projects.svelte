
<script lang="ts">
  import Section from "../../components/Section.svelte";
  import ThumbnailSmall from "../../components/Thumbnail.svelte";
</script>

<Section title="Projekt." eyebrow="jag skapar upplevelser">
  <div>
    <p class="paragraph">
      Det råkar vara så att jag har ett flertal projekt under mitt bälte.
      Dock så har jag tyvärr inte slutfört särskilt många av dem. Nedan kan
      du ta en titt på de projekt som jag är mest stolt över!
    </p>
  </div>
  <div>
    <ul
      class="mt-16 gap-16 grid justify-items-stretch grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-cols-fr"
    >
      <div class="col-span-1 xl:col-span-3">
        <ThumbnailSmall
          alt="iMatJS screenshot"
          src="/images/screenshots/imatjs_screenshot.png"
          title="iMatJS"
          tags={["WIP"]}
          link="https://imat.antonekstrom.se/"
          row
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          iusto sunt commodi aut molestias iste placeat deleniti recusandae
          fugit obcaecati.
        </ThumbnailSmall>
      </div>
      <ThumbnailSmall
        alt="chalmers.it screenshot"
        src="/images/screenshots/chalmers-it_screenshot.png"
        title="chalmers.it"
        tags={["WIP"]}
        link="https://chalmers.it/"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iusto
        sunt commodi aut molestias iste placeat deleniti recusandae fugit
        obcaecati.
      </ThumbnailSmall>
      <ThumbnailSmall
        alt="Bingoblin screenshot"
        src="/images/screenshots/bingoblin_screenshot.png"
        title="Bingoblin"
        link="https://bingoblin.antonekstrom.se/"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iusto
        sunt commodi aut molestias iste placeat deleniti recusandae fugit
        obcaecati.
      </ThumbnailSmall>
      <ThumbnailSmall
        alt="EDI screenshot"
        src="/images/screenshots/edi_screenshot.png"
        title="EDI"
        tags={["WIP", "plupp"]}
        link="https://edi.antonekstrom.se/"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iusto
        sunt commodi aut molestias iste placeat deleniti recusandae fugit
        obcaecati.
      </ThumbnailSmall>
    </ul>
  </div>
</Section>