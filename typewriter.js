const sentence = "hello there from lighthouse labs";
let count = 0;
const animated = (str) => {
  for(let i = 0; i < str.length; i++){
  setTimeout(() => {
    process.stdout.write(str[i] + " \n")
  },count)
  count += 100;
  }
}
animated(sentence);