<script lang="ts">
  import Section from "../../components/TitledSection.svelte";
</script>

<Section title="Förmågor." eyebrow="jag besitter flera förmågor">
  <div class="flex flex-row justify-between">
    <div>
      <p class="paragraph paragraph-padding">
        Jag har programmerat mycket under mina dagar och har utforskat många
        olika fält inom teknik och mjukvara. Inte bara har jag designat
        webbplatser, utan jag har även lite erfarenhet med datorgrafik,
        spel, datastrukturer, servrar och databaser!
      </p>
      <p class="paragraph paragraph-padding">
        Om du har en tillräckligt stor skärm, kan du till höger se en lista
        med benämningar på teknologier som jag har varit i kontakt med en
        eller annan gång. Det vill säga, det finns en samling ord som
        egentligen inte har någon betydelse eftersom jag inte kan bevisa att
        jag är erfaren med alla dessa saker!
      </p>
      <div>
        <div class="flex flex-row justify-center w-full my-10">
          <img
            src="/images/jaghjärtafastriktigt.svg"
            alt="jag hjärta ts & react"
            class="h-20"
          />
        </div>
        <h2 class="subtitle mt-12">Frontend</h2>
        <p class="paragraph paragraph-padding">
          Allra mest erfarenhet har jag med frontend ramverket React och
          språket Typescript. Dessa har jag använt flitigt under flera år
          och jag skulle nog säga att jag kan använda dessa verktyg rätt
          väl. Det här stycket behöver jag verkligen utveckla på! Eller hur?
        </p>
      </div>
    </div>
    <div class="hidden xl:block">
      <h2 class="subtitle mb-8">Skills</h2>
      <ul class="grid grid-cols-2 gap-6">
        <li>
          <h3 class="font-semibold mb-2">Frontend</h3>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>TailwindCSS</li>
            <li>Redux</li>
            <li>RxJS</li>
          </ul>
        </li>
        <li>
          <h3 class="font-semibold mb-2">Backend</h3>
          <ul>
            <li>Express</li>
            <li>Socket.io</li>
            <li>Node.js</li>
          </ul>
        </li>
        <li>
          <h3 class="font-semibold mb-2">Tooling</h3>
          <ul>
            <li>Git</li>
            <li>Next.js</li>
            <li>Vite</li>
            <li>Rollup</li>
          </ul>
        </li>
        <li>
          <h3 class="font-semibold mb-2">Graphics</h3>
          <ul>
            <li>Unity</li>
            <li>OpenGL</li>
            <li>p5.js</li>
          </ul>
        </li>
        <li>
          <h3 class="font-semibold mb-2">Data</h3>
          <ul>
            <li>GraphQL</li>
            <li>SQL</li>
            <li>Prisma</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Apollo</li>
          </ul>
        </li>
        <li class="">
          <h3 class="font-semibold mb-2">Languages</h3>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>C#</li>
            <li>PHP</li>
            <li>HTML, CSS</li>
            <li>C++, Assembly</li>
            <li>Swedish</li>
            <li>English</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</Section>