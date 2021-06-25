<script lang="ts">
  import Section from "../../components/TitledSection.svelte";
  import Thumbnail from "../../components/Thumbnail.svelte";
  import { projects } from "../../data/projects.json";
</script>

<Section title="Projekt." eyebrow="jag skapar upplevelser">
  <div>
    <p class="paragraph paragraph-padding">
      Det råkar vara så att jag har ett flertal projekt under mitt bälte. Dock
      så har jag tyvärr inte slutfört särskilt många av dem. Nedan kan du ta en
      titt på de projekt som jag är mest stolt över!
    </p>
  </div>
  <div>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-cols-fr justify-items-stretch mt-16 gap-16"
    >
      {#each projects as project, i}
        <div class={i == 0 && "col-span-1 xl:col-span-3"}>
          <Thumbnail
            title={project.title}
            tags={project.tags}
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            link={project.link}
            github={project.github}
            row={i == 0}
          >
            <div class="paragraph-padding">
              {#each project.description as line}
                <p class="paragraph paragraph-small">{line}</p>
              {/each}
            </div>
          </Thumbnail>
        </div>
      {/each}
      <div class="col-span-1 xl:col-span-3" />
    </ul>
  </div>
</Section>
