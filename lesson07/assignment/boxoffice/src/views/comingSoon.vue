<template>
<div class="comingSoon">
  <h1>Coming Soon to Theaters</h1>

<!-- accordion -->
  <div class="accordion" role="tablist">

    <!-- accordion 1 is open by default -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">March 11</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">

        <!-- accordion body uses v-for to grab data from array -->
        <b-card-body>
          <div v-for="march11 in march11Movies" v-bind:key="march11.id">
            <h3>{{ march11.name }}</h3>
            <b-card-text>{{ march11.genre }}</b-card-text>
            <b-card-text>{{ march11.summary }}</b-card-text>
            <hr>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- accordion 2 is closed by default -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">March 18</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div v-for="march18 in march18Movies" v-bind:key="march18.id">
            <h3>{{ march18.name }}</h3>
            <b-card-text>{{ march18.genre }}</b-card-text>
            <b-card-text>{{ march18.summary }}</b-card-text>
            <hr>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- accordion 3 is closed by default -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">March 25</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div v-for="march25 in march25Movies" v-bind:key="march25.id">
            <h3>{{ march25.name }}</h3>
            <b-card-text>{{ march25.genre }}</b-card-text>
            <b-card-text>{{ march25.summary }}</b-card-text>
            <hr>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>


<!-- Add "scoped"attribute to limit CSS to this component only -->
<script scoped>

  // created object for each week, includes movie names, summaries, and genre(s)
  export default {
    name: 'comingSoon',
    data() {
      return {

        // first week
        march11Movies: [{
            name: "Tyson's Run",
            summary: 'An unathletic boy with autism strives to become an unlikely marathon champion giving his unfulfilled father purpose and a second chance at putting his family first.',
            genre: 'Drama',
          },
          {
            name: "Off Season",
            summary: 'After receiving a mysterious letter, a woman travels to a desolate island town and soon becomes trapped in a nightmare.',
            genre: 'Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller',
          }
        ],

        // second week
        march18Movies: [{
            name: "Operation Fortune: Ruse de guerre",
            summary: "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
            genre: 'Action, Comedy, Thriller',
          },
          {
            name: "X",
            summary: 'In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.',
            genre: 'Horror',
          },
          {
            name: "Umma",
            summary: 'Amanda and her daughter live a quiet life on an American farm, but when the remains of her estranged mother arrive from Korea, Amanda becomes haunted by the fear of turning into her own mother.',
            genre: 'Horror',
          }
        ],

        // third week
        march25Movies: [{
            name: "Infinite Storm",
            summary: 'When a climber gets caught in a blizzard, she encounters a stranded stranger and must get them both down the mountain before nightfall.',
            genre: 'Drama, Thriller',
          },
          {
            name: "Everything Everywhere All at Once",
            summary: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.',
            genre: 'Action, Adventure, Comedy, Family, Sci-Fi',
          },
          {
            name: "The Lost City",
            summary: 'A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.',
            genre: 'Action, Adventure, Comedy, Romance',
          }
        ]
      }
    }
  }
</script>
