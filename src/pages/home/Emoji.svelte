<script lang="ts">
  import Section from "../../components/TitledSection.svelte";
</script>

<Section title="Emoji-expert." eyebrow="jag är professionell emoji-kritiker">
  <p class="paragraph paragraph-padding">
    Mina top 5 emojisar!! Stort tack till <a href="http://sort.mechaflex.ml/"
      >sort.mechaflex.ml</a
    > för hjälp med listan!!
  </p>
  <ol class="flex flex-col md:flex-row place-items-center gap-12 list-counter">
    {#each ["😎", "🥳", "🌜", "😭", "🌛"] as emoji}
      <li>
        <span
          class="list-counter-item flex flex-row md:flex-col xl:flex-row place-items-center gap-4 text-5xl md:text-7xl"
          >{emoji}</span
        >
      </li>
    {/each}
  </ol>
</Section>
