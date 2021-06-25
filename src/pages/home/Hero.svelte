<script>
  import Watermark from "../../components/Watermark.svelte";
  import { contactMe, showCV } from "../../navigation";
</script>

<section class="relative">
  <Watermark>Anton Ekström</Watermark>
  <div class="flex flex-col xl:flex-row xl:gap-12">
    <div>
      <h1 class="title">Anton Ekström.</h1>
      <div>
        <h2 class="title-eyebrow-large hidden md:block">
          IT-student | software engineer | designer
        </h2>
        <h2 class="title-eyebrow-large text-sm mt-2 md:hidden">
          IT-student<br />software engineer<br />designer
        </h2>
      </div>
      <div>
        <p class="paragraph paragraph-padding">
          Hej hej, det är jag som är Anton Ekström. Just nu studerar jag
          informationsteknik på Chalmers tekniska högskola, och har gjort det i
          ungefär ett år. Jag har programmerat sedan gymnasiet och tycker det är
          mycket kul! Allra mest har jag sysslat med att programmera och designa
          webbplatser.
        </p>
        <p class="paragraph paragraph-padding">
          Den här lilla webbsidan finns till för att visa världen (men mest mig
          själv) vad jag har skapat för grejer, men också vem jag är! Det hade
          varit häftigt om någon besöker den här webbsidan och tänker "oj
          vad fin, jag tycker att vi anställer den här killen till vårat
          jättebra företag" men jag hoppas inte allt för mycket på det.
        </p>
      </div>
      <div class="btn-group-col sm:btn-group-row">
        <button class="btn btn-primary" on:click={contactMe}
          >kontakta mig</button
        >
        <button class="btn btn-secondary" on:click={showCV}>se mitt cv</button>
      </div>
    </div>
    <div
      class="relative block flex-grow xl:grid place-items-center place-self-center sm:place-self-auto xl:place-self-center"
    >
      <img
        src="/images/jag/cool@25.jpg"
        alt="En bild på Anton Ekström (jag)"
        class="w-128 mt-12 xl:relative xl:mt-0 top-bottom-24 border-2 border-black peek hover:active-peek link hover:active-link cursor-auto"
      />
    </div>
  </div>
</section>
