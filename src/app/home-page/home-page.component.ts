import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  filter: string[] = ['Alle', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular', 'Kurs-Projekt'];

  projects: Project[] = [
    {
      title: 'Kalorientracker',
      text: 'Kalorien-App, die den Locale Storage nutzt.',
      git: 'https://github.com/Mandy-Blaschke/energiebedarf',
      url: '/assets/kal-v1/',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    },
    {
      title: 'Rechne Mal',
      text: 'App, um die Malfolgen zu lernen, die ich für meine Nichte erstellt habe.',
      git: 'https://github.com/Mandy-Blaschke/malfolgen',
      url: '/assets/mathe-app/',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    },
    {
      title: 'ToDo-Liste',
      text: 'Einfache ToDo-Liste.',
      git: 'https://github.com/Mandy-Blaschke/to-do-list',
      url: '/assets/to-do-list/',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    },
    {
      title: 'Adressbuch',
      text: 'Diese Anwendung diente ausschließlich dem Lern-Effekt und ist nicht responsive.',
      git: 'https://github.com/Mandy-Blaschke/adressbuch',
      url: '/assets/adressbuch/',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    },
    {
      title: 'Kundenverwaltung',
      text: 'Diese Anwendung diente ausschließlich dem Lern-Effekt und ist nicht responsive.',
      git: 'https://github.com/Mandy-Blaschke/kund/',
      url: '/assets/kund/',
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Angular'],
    },
    {
      title: 'Hangman - Version 1',
      text: 'Hangman-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      git: 'https://github.com/Mandy-Blaschke/hangman-game',
      url: '/assets/hangman-game/sources/index.html',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'TicTacToc - Version 1',
      text: 'TicTacToe-Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      git: 'https://github.com/Mandy-Blaschke/tic-tac-toe-game',
      url: '/assets/tic-tac-toe-game/sources/index.html',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'SchereSteinPapier',
      text: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      git: 'https://github.com/Mandy-Blaschke/scissors-stone-paper-game',
      url: '/assets/Schere-Stein-Papier-Spiel/sources/index.html',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Zahlen-Raten',
      text: 'Spiel, dass ich ohne Framework erstellt habe. Diente dazu, die Grundlagen von JavaScript zu lernen.',
      git: 'https://github.com/Mandy-Blaschke/zahlen-raten-spiel',
      url: '/assets/zahlen-raten-spiel/sources/index.html',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Tribute Page',
      text: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      git: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      url: 'https://codepen.io/M-Andy89/pen/pojyJGb',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    },
    {
      title: 'Survey Form',
      text: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      git: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      url: 'https://codepen.io/M-Andy89/pen/GRpZBqb',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    },
    {
      title: 'Landing Page',
      text: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      git: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      url: 'https://codepen.io/M-Andy89/pen/LYpNKPd',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    },
    {
      title: 'Documentation Page',
      text: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      git: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      url: 'https://codepen.io/M-Andy89/pen/yLYgOWZ',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    },
    {
      title: 'Portfolio Page',
      text: 'Projekt aus meinen Kursen bei FreeCodeCamp.',
      git: 'https://github.com/Mandy-Blaschke/freecodecamp-projects',
      url: 'https://codepen.io/M-Andy89/pen/GRprbMQ',
      tags: ['FreeCodeCamp', 'Kurs-Projekt', 'HTML', 'CSS'],
    },
    {
      title: 'Blog Page',
      text: 'Projekt aus meinem Udacity Kurs.',
      git: 'https://github.com/Mandy-Blaschke/blog-page',
      url: '/assets/blog-page/sources/index.html',
      tags: ['Udacity', 'Kurs-Projekt', 'HTML', 'CSS'],
    },
  ];

  filteredArray: Project[] = [];
  activeTag = 'Alle';


  constructor() {
  }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }


  filterByTag(tag: string): void {
      this.filteredArray = this.projects.filter((project) => project.tags.includes(tag));
      this.activeTag = tag;
  }
}

export interface Project {
  title: string;
  text: string;
  git: string;
  url: string;
  tags: string[];
}
