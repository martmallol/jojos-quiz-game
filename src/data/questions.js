import imgOne from '../img/funeral.jpg';
import imgTwo from '../img/baseball.jpeg';
import imgThree from '../img/caprese.png';
import imgFour from '../img/poker.jpg';

const questions = [
  {
    title: 'Would you make a joke at a funeral?',
    image: imgOne,
    saga: 'Jojo\'s Bizarre Adventure Part II: Battle Tendency',
    show: '"The Man Who Became God": Season 1, Episode 26, Minute 17\' 09\'\'',
    options: [
      { id: 0, textAnswer: 'Absolutely yes!', jonathan: 0, joseph: 3, jotaro: 0, josuke: 1, giorno: 0, jolyne: 1 },
      { id: 1, textAnswer: 'What?! Of course not!', jonathan: 3, joseph: 0, jotaro: 1, josuke: 0, giorno: 3, jolyne: 0 },
      { id: 2, textAnswer: 'Well, if it was my enemy\'s funeral...', jonathan: 0, joseph: 0, jotaro: 1, josuke: 3, giorno: 0, jolyne: 3 },
      { id: 3, textAnswer: 'I just don\'t know', jonathan: 0, joseph: 0, jotaro: 0, josuke: 1, giorno: 0, jolyne: 1 }
    ]
  },
  {
    title: 'Which is your favorite sport?',
    image: imgTwo,
    saga: "Jojo's Bizarre Adventure Part VI: Stone Ocean",
    show: '"Darby the Gambler": Season 5, Episode 9, Minute 21\' 09\'\'',
    options: [
      { id: 0, textAnswer: 'Football', jonathan: 1, joseph: 0, jotaro: 0, josuke: 0, giorno: 3, jolyne: 0 },
      { id: 1, textAnswer: 'Baseball', jonathan: 0, joseph: 1, jotaro: 1, josuke: 0, giorno: 0, jolyne: 3 },
      { id: 2, textAnswer: 'Rugby', jonathan: 3, joseph: 0, jotaro: 0, josuke: 0, giorno: 0, jolyne: 0 },
      { id: 3, textAnswer: 'Videogames', jonathan: 0, joseph: 0, jotaro: 3, josuke: 3, giorno: 0, jolyne: 0 }
    ]
  },
  {
    title: 'What would you rather have for dinner?',
    image: imgThree,
    saga: "Jojo's Bizarre Adventure Part IV: Diamond is Unbreakable",
    show: '"Let\'s Go Eat Some Italian Food": Season 3, Episode 10, Minute 06\' 43\'\'',
    options: [
      { id: 0, textAnswer: 'Squid Ink Spaghetti', jonathan: 0, joseph: 3, jotaro: 0, josuke: 0, giorno: 1, jolyne: 0 },
      { id: 1, textAnswer: 'Cigarettes and a Mojito', jonathan: 0, joseph: 0, jotaro: 3, josuke: 0, giorno: 0, jolyne: 0 },
      { id: 2, textAnswer: 'Caprese Salad', jonathan: 0, joseph: 0, jotaro: 0, josuke: 3, giorno: 3, jolyne: 0 },
      { id: 3, textAnswer: 'Hot Dog and Coca Cola', jonathan: 0, joseph: 1, jotaro: 0, josuke: 0, giorno: 0, jolyne: 3 }
    ]
  },
  {
    title: 'What are your plans for the weekend?',
    image: imgFour,
    saga: "Jojo's Bizarre Adventure Part III: Stardust Crusaders",
    show: '"D\'Arby the Gambler": Season 2, Episode 34, Minute 05\' 38\'\'',
    options: [
      { id: 0, textAnswer: 'Look at yourself in the mirror for 8 straight hours', jonathan: 0, joseph: 3, jotaro: 0, josuke: 0, giorno: 1, jolyne: 0 },
      { id: 1, textAnswer: 'Go to a poker tournament', jonathan: 0, joseph: 1, jotaro: 3, josuke: 1, giorno: 0, jolyne: 0 },
      { id: 2, textAnswer: 'Wait eagerly until the hour of tea arrives', jonathan: 3, joseph: 0, jotaro: 0, josuke: 0, giorno: 0, jolyne: 0 },
      { id: 3, textAnswer: 'Befriend with an alien', jonathan: 0, joseph: 0, jotaro: 0, josuke: 3, giorno: 0, jolyne: 3 }
    ]
  }
];

export default questions;
