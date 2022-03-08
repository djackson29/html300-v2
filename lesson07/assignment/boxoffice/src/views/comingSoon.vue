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

        <!-- accordion body uses v-for to grab data from week 1 object -->
        <b-card-body>
          <div v-for="week1 in week1Movies" v-bind:key="week1.id">
            <h3>{{ week1.name }}</h3>
            <b-card-text>{{ week1.genre }}</b-card-text>
            <b-card-text>{{ week1.summary }}</b-card-text>
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

        <!-- accordion body uses v-for to grab data from week 2 object -->
        <b-card-body>
          <div v-for="week2 in week2Movies" v-bind:key="week2.id">
            <h3>{{ week2.name }}</h3>
            <b-card-text>{{ week2.genre }}</b-card-text>
            <b-card-text>{{ week2.summary }}</b-card-text>
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

        <!-- accordion body uses v-for to grab data from week 3 object -->
        <b-card-body>
          <div v-for="week3 in week3Movies" v-bind:key="week3.id">
            <h3>{{ week3.name }}</h3>
            <b-card-text>{{ week3.genre }}</b-card-text>
            <b-card-text>{{ week3.summary }}</b-card-text>
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

        // week 1 object
        week1Movies: [{
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

        // week 2 object
        week2Movies: [{
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

        // week 3 object
        week3Movies: [{
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
