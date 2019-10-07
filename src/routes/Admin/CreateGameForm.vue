<template>
  <form>
  <div class="form-group">
    <label>Odd Type:</label>
    <input type="text" class="form-control" v-model="game.oddType" name="oddType" placeholder="Game">
  </div>
  <div class="form-group">
    <label>Sport:</label>
    <input type="text" class="form-control" v-model="game.sport" name="sport" placeholder="NFL">
  </div>
  <div class="form-group">
    <label>Week:</label>
    <input type="text" class="form-control" v-model="game.week" name="week" placeholder="Week 1">
  </div>
  <div class="form-group">
    <label>Season:</label>
    <input type="text" class="form-control" v-modal="game.season" name="season" placeholder="2019-20">
  </div>
  <div class="form-group">
    <label>Match Time:</label>
    <input type="text" class="form-control" v-model="game.matchTime" name="matchTime" placeholder="2019-08-09T16:30:00">
  </div>
  <div class="form-group">
    <label>Over/Under Line:</label>
    <input type="number" class="form-control" v-model="game.overUnderLine" name="overUnderLine" placeholder="43">
  </div>
  <div class="form-group">
    <label>Money Line Away:</label>
    <input type="number" class="form-control" v-model="game.moneyLineAway" name="moneyLineAway" placeholder="100">
  </div>
  <div class="form-group">
    <label>Money Line Home:</label>
    <input type="number" class="form-control" v-model="game.moneyLineHome" name="moneyLineHome" placeholder="-120">
  </div>
  <div class="form-group">
    <label>Points Spread Away:</label>
    <input type="number" class="form-control" v-model="game.pointSpreadAwayLine" name="pointSpreadAwayLine" placeholder="-1">
  </div>
  <div class="form-group">
    <label>Points Spread Home:</label>
    <input type="number" class="form-control" v-model="game.pointSpreadHomeLine" name="pointSpreadHomeLine" placeholder="1">
  </div>
  <div class="form-group">
    <label>Points Spread Home:</label>
    <input type="number" class="form-control" v-model="game.homeTeam" name="homeTeam" placeholder="Tampa Bay Buccaners">
  </div>
  <div class="form-group">
    <label>Points Spread Home:</label>
    <input type="number" class="form-control" v-model="game.awayTeam" name="awayTeam" placeholder="San Francisco 49ers">
  </div>
  <div class="form-group">
    <label>Favorite:</label>
    <input type="text" class="form-control" v-model="game.favorite" name="favorite" placeholder="Tampa Bay Buccaners">
  </div>
    <label>Results</label>
    <div class="results-box">
    <div class="form-group">
      <label>Total Score:</label>
      <input type="text" class="form-control" v-model="game.results.totalScore" name="totalScore" placeholder="San Francisco 49ers">
    </div>
    <div class="form-group">
      <label>Over/Under Diff:</label>
      <input type="text" class="form-control" name="overUnderLineDiff" placeholder="-3">
    </div>
    <div class="form-group">
      <label>Home Points Score:</label>
      <input type="text" class="form-control" name="homePointsScored" placeholder="17">
    </div>
    <div class="form-group">
      <label>Home Win By:</label>
      <input type="text" class="form-control" name="homeWinBy" placeholder="-14">
    </div>
    <div class="form-group">
      <label>Home Cover Diff</label>
      <input type="text" class="form-control" name="homeCoverDiff" placeholder="-15">
    </div>
    <div class="form-group">
      <label>Away Cover Diff</label>
      <input type="text" class="form-control" name="awayPointsScored" placeholder="-15">
    </div>
    <div class="form-group">
      <label>Away Win By</label>
      <input type="text" class="form-control" name="awayWinBy" placeholder="31">
    </div>
    <div class="form-group">
      <label>Away Cover Diff</label>
      <input type="text" class="form-control" name="awayCoverDiff" placeholder="31">
    </div>
    <div class="form-group">
      <label>Favorite Win</label>
      <input type="text" class="form-control" name="favoriteWin" placeholder="31">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Create Game</button>
</form>
</template>

<script>
export default {
  name: "CreateGameForm",
  data() {
    return {
      game: {
        oddType: "",
        sport: "",
        week: "",
        season: "",
        matchTime: "",
        overUnderLine: 0,
        moneyLineAway: 0,
        moneyLineHome: 0,
        pointSpreadAwayLine: 0,
        pointSpreadHomeLine: 0,
        homeTeam: "",
        awayTeam: "",
        favorite: "",
        results: {
          totalScore: 0, 
          overUnderLineDiff: 0, 
          homePointsScored: 0,
          homeWinBy: 0,
          homeCoverDiff: 0, 
          awayPointsScored: 0, 
          awayWinBy: 0, 
          awayCoverDiff: 0, 
          favoriteWin: false,
        }
      }
    }
  }
}
</script>

<style scoped>
  label {
    margin-bottom: 0;
  }

  .form-group {
    margin-bottom: 5px;
  }

  .results-box {
    border: 1px solid red; 
  }
</style>