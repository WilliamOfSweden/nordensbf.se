import { component$, useStylesScoped$ } from "@builder.io/qwik";

export const Masthead = component$(() => {
  useStylesScoped$(`
    .container {
      align-items: center;
      display: flex;
      height: 100vh;
      flex-direction: column;
      font-family: Arial, sans-serif;
      justify-content: center;
      text-align: center;
    }
    
    .heading {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .paragraph {
      font-size: 1.5rem;
      max-width: 50ch;
    }
  `);

  return (
    <section class='container'>
      <h1 class='heading'>Nordens bygg och fasadteknik AB</h1>
      <p class='paragraph'>
        Vi ber om ursäkt för eventuellt olägenheter. Vår webbsida genomgår för närvarande planerat underhåll för att förbättra din upplevelse. Tack för ditt tålamod!
      </p>
    </section>
  )
});
