import { Component } from '@angular/core';

interface Author {
  name: string;
  bio: string;
  imageUrl: string;
}

@Component({
  selector: 'app-featuredauthor',
  templateUrl: './featuredauthor.component.html',
  styleUrls: ['./featuredauthor.component.css']
})
export class FeaturedauthorComponent {
  authors: Author[] = [
    {
      name: 'J.K. Rowling',
      bio: 'J.K. Rowling is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series',
      imageUrl: 'rolli.jpeg'
    },
    {
      name: 'Stephen King',
      bio: 'Stephen King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. He is widely regarded as one of the greatest horror writers in history.',
      imageUrl: 'stef.jpeg'
    },
    {
      name: 'Agatha Christie',
      bio: 'Agatha Christie is an English writer known for her detective novels and short story collections. She is considered one of the most successful and innovative writers in the mystery genre.',
      imageUrl: 'agatha.jpeg'
    },
    {
      name: 'Jay Shetty',
      bio: 'Jay Shetty (born 6 September 1987) is a British podcaster, author, and life coach. He is also a co-founder of Sama Tea published Shettys book Think Like a Monk.The book offers advice on reducing stress and improving focus, based on Shetty experiences from living at an ashram The book was a bestseller',
      imageUrl: 'jay.jpg'
    },
    {
      name: 'Colleen Hoover',
      bio: 'Colleen Hoover (born Margaret Colleen Fennell; December 11, 1979) is an American author who primarily writes novels in the romance and young adult fiction genres.[2][1] She is best known for her 2016 romance novel, It Ends with Us.',
      imageUrl: 'Colleen.png'
    },
  ];
}
