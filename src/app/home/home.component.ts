import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-slider',
  template: `
    <div class="slider">
      <div class="slider-container" [style.transform]="'translateX(' + slideOffset + '%)'">
      <div class="slider-item" *ngFor="let book of books">
  <a [href]="'https://www.google.com/search?q=' + book.title" target="_blank">
    <img [src]="book.imageUrl" alt="book cover">
  </a>
  <h2>{{ book.title }}</h2>
  <p>{{ book.author }}</p>
  <p>{{ book.description }}</p>
</div>
      </div>
      <div class="slider-controls">
        <button class="slider-control" (click)="prevSlide()" [disabled]="currentSlide === 0">Previous</button>
        <button class="slider-control" (click)="nextSlide()" [disabled]="currentSlide === maxSlide">Next</button>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books = [
    {
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      description: 'Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker\'s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.',
      imageUrl: 'p1.jpeg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'Winston Smith is a low-ranking member of the ruling Party in London, in the nation of Oceania. Everywhere Winston goes, even his own home, the Party watches him through telescreens; everywhere he looks he sees the face of the Party’s seemingly omniscient leader, a figure known only as Big Brother.',
      imageUrl: 'download.jpeg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
      imageUrl: 'p3.jpeg'},
    {
        title: 'Think Like  Monk',
        author: 'Jay Shetty',
        description: 'Drawing on ancient wisdom and his own rich experiences in the ashram, “Think Like a Monk” reveals how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us. The lessons monks learn are profound but often abstract..',
        imageUrl: 'think.jpeg'},
        {
          title: 'It EndS With Us',
          author: 'Collen Hoover',
          description: 'It Ends With Us is the story of Lily as she navigates her way through an abusive relationship. Her boyfriend, and later husband, Ryle, can be kind and funny and enigmatic, he is successful and driven, however none of that changes the fact that at his worst she is terrified of him.',
          imageUrl: 'itends.jpeg'},
  ];
  currentSlide = 0;
  slideOffset = 0;
  slideWidth = 100;
  maxSlide = this.books.length - 1;

  ngOnInit(): void {
  }

  nextSlide(): void {
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
      this.slideOffset = -this.currentSlide * this.slideWidth;
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.slideOffset = -this.currentSlide * this.slideWidth;
    }}}