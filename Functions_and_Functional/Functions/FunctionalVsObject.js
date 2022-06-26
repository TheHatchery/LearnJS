//Function return a function based on an input
const WeatherForcastA = weather => {
  return day => {
    return `The weather on ${day} will be ${weather}`;
  }
}
//Could ask a user for a weather type:
const weatherDayA = WeatherForcastA('Sunny');
//Then return only sunny days
console.log(weatherDayA('Monday'));


//Object equivellent?
class WeatherForcastB {
  constructor(weather){
    this.weather = weather;  
  }
  daysWeather(day){
    this.day = day;
    return `The weather on ${this.day} will be ${this.weather}`;
  }
}
const weatherDayB = new WeatherForcastB('Snow');

console.log(weatherDayB.daysWeather('Wednesday'));






// //Output equivellent for this basic example but there will be cases where you want two very different functional things to happen based on an input
// const daysWeatherToo = (day, weather) => {
//       return `The weather on ${day} will be ${weather}`;

// }
// console.log(daysWeatherToo('monday', 'wet'));