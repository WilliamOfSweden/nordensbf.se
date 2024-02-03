import { component$ } from "@builder.io/qwik";

export const Masthead = component$(() => {
  return (
    <section class='flex flex-col h-svh items-center justify-center'>
      <h1 class='mb-6 text-5xl font-extrabold'>Nordens bygg och fasadteknik AB</h1>
      <p class='text-lg max-w-5xl text-center'>
        Vi ber om ursäkt för eventuellt olägenheter. Vår webbsida genomgår för närvarande planerat underhåll för att förbättra din upplevelse. Tack för ditt tålamod!
      </p>
    </section>
  )
});
