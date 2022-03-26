<script>
import predict from "./solver";
import Words from "./words";

export default {
  data() {
    return {
      word1: [
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
      ],
      word2: [
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
      ],
      word3: [
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
        { letter: "", state: "" },
      ],
      currentWord: 1,
      suggestionList: [],
    };
  },
  methods: {
    swapState(letter) {
      // alert(this.word1[letter].letter);
      switch (this.currentWord) {
        case 1:
          switch (this.word1[letter].state) {
            case "":
              this.word1[letter].state = "x";
              break;
            case "x":
              this.word1[letter].state = "i";
              break;
            case "i":
              this.word1[letter].state = "m";
              break;
            case "m":
              this.word1[letter].state = "x";
              break;
          }
          break;
        case 2:
          switch (this.word2[letter].state) {
            case "":
              this.word2[letter].state = "x";
              break;
            case "x":
              this.word2[letter].state = "i";
              break;
            case "i":
              this.word2[letter].state = "m";
              break;
            case "m":
              this.word2[letter].state = "x";
              break;
          }
          break;
        case 3:
          switch (this.word3[letter].state) {
            case "":
              this.word3[letter].state = "x";
              break;
            case "x":
              this.word3[letter].state = "i";
              break;
            case "i":
              this.word3[letter].state = "m";
              break;
            case "m":
              this.word3[letter].state = "x";
              break;
          }
          break;
      }
    },
    testWord() {
      // console.log(this.word1);
      // console.log(predict(this.word1, Words));
      // this.suggestionList = predict(this.word1, Words);
      switch (this.currentWord) {
        case 1:
          this.suggestionList = predict(this.word1, Words);
          this.currentWord++;
          break;
        case 2:
          this.suggestionList = predict(this.word2, this.suggestionList);
          this.currentWord++;
          break;
        case 3:
          this.suggestionList = predict(this.word3, this.suggestionList);
          break;
      }
    },
  },
};
</script>

<template>
  <div class="intro">
    <h1>Wordle Helper</h1>
    <ol>
      <li>Enter a letter in each box</li>
      <li>Click the letter to change the color</li>
      <li>Click go to get suggestions</li>
      <li>Reload page to start over</li>
    </ol>
  </div>
  <div class="words">
    <div class="first">
      <input type="text" v-model="word1[0].letter" @click="swapState(0)" v-bind:class="word1[0].state" />
      <input type="text" v-model="word1[1].letter" @click="swapState(1)" v-bind:class="word1[1].state" />
      <input type="text" v-model="word1[2].letter" @click="swapState(2)" v-bind:class="word1[2].state" />
      <input type="text" v-model="word1[3].letter" @click="swapState(3)" v-bind:class="word1[3].state" />
      <input type="text" v-model="word1[4].letter" @click="swapState(4)" v-bind:class="word1[4].state" />
      <button @click="this.testWord">Go</button>
    </div>
    <div class="second">
      <input type="text" v-model="word2[0].letter" @click="swapState(0)" v-bind:class="word2[0].state" />
      <input type="text" v-model="word2[1].letter" @click="swapState(1)" v-bind:class="word2[1].state" />
      <input type="text" v-model="word2[2].letter" @click="swapState(2)" v-bind:class="word2[2].state" />
      <input type="text" v-model="word2[3].letter" @click="swapState(3)" v-bind:class="word2[3].state" />
      <input type="text" v-model="word2[4].letter" @click="swapState(4)" v-bind:class="word2[4].state" />
      <button @click="this.testWord">Go</button>
    </div>
    <div class="third">
      <input type="text" v-model="word3[0].letter" @click="swapState(0)" v-bind:class="word3[0].state" />
      <input type="text" v-model="word3[1].letter" @click="swapState(1)" v-bind:class="word3[1].state" />
      <input type="text" v-model="word3[2].letter" @click="swapState(2)" v-bind:class="word3[2].state" />
      <input type="text" v-model="word3[3].letter" @click="swapState(3)" v-bind:class="word3[3].state" />
      <input type="text" v-model="word3[4].letter" @click="swapState(4)" v-bind:class="word3[4].state" />
      <button @click="this.testWord">Go</button>
    </div>
  </div>
  <ul>
    <h2>Suggestions:</h2>
    <li v-for="word in suggestionList" v-bind:key="word">{{ word }}</li>
  </ul>
</template>

<style>
body {
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
}
input {
  font-size: 32px;
  width: 50px;
  height: 50px;
  border: none;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  text-align: center;
}
.first,
.second,
.third {
  display: flex;
  justify-content: center;
}
.x {
  background-color: lightgrey;
}
.i {
  background-color: rgb(255, 255, 98);
}
.m {
  background-color: rgb(82, 196, 82);
}
button {
  border: none;
  font-size: 32px;
  width: 50px;
  border: none;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ol li {
  text-align: left;
}
</style>
