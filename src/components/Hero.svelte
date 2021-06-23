<script>
  import Watermark from "./Watermark.svelte";
</script>

<section class="relative">
  <Watermark>Anton Ekström</Watermark>
  <div class="flex flex-col xl:gap-12 xl:flex-row">
    <div>
      <h1 class="title">Anton Ekström.</h1>
      <h2 class="title-eyebrow md:text-xl hidden md:block">
        IT-student | software engineer | designer
      </h2>
      <h2 class="title-eyebrow text-sm mt-2 md:hidden">
        IT-student<br />software engineer<br />designer
      </h2>
      <p class="paragraph my-8">
        Hej hej, det är jag som är Anton Ekström. Just nu studerar jag
        informationsteknik på Chalmers tekniska högskola, och har gjort det i
        ungefär ett år. Jag har programmerat sedan gymnasiet och tycker det är
        mycket kul! Allra mest har jag sysslat med att programmera och designa
        webbplatser.
      </p>
      <div class="btn-row flex-col sm:flex-row mt-2">
        <button class="btn btn-primary">kontakta mig</button>
        <button class="btn btn-secondary">se mitt cv</button>
      </div>
    </div>
    <div
      class="relative block xl:grid place-self-center sm:place-self-auto xl:place-self-center place-items-center flex-grow">
      <img
        src="/images/jag/cool@25.jpg"
        alt="Anton Ekström"
        class="border-2 border-black w-128 mt-12 xl:mt-0 xl:relative -bottom-24 hover-peek link" />
    </div>
  </div>
</section>
