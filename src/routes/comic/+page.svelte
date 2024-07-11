<script lang="ts">
  import type { PageServerData } from '../../../.svelte-kit/types/src/routes/$types'

  export let data: PageServerData
</script>

<head>
  <title>Comic</title>
  <meta
    name="description"
    content="This is comic to make more lough in your life!"
  />
</head>

<section id="comic">
  <h2>Comic</h2>
  {#if data.comic.safe_title}
    <div id="comic-container" class="comic-container">
      <h3>{data.comic.safe_title}</h3>
      <img src="{data.comic.img}" alt="{data.comic.alt}" />
      <p>
        Published on: {new Date(
          data.comic.year,
          data.comic.month - 1,
          data.comic.day,
        ).toLocaleDateString()}
      </p>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</section>
