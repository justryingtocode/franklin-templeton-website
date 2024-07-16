import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {

  showTooltip: boolean = false;
  
  getData:any = [
      {
        "title": "Meri Pyaari Saheliyan",
        "tag": "Introduction",
        "description": "Not all women come together to gossip and talk about shopping sprees. Some are capable of way more than what meets the eye. Meri Pyaari Saheliyan is a weekly podcast designed for women and by women who take their financial freedom seriously.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      },
      {
        "title": "Flying High",
        "tag": "Podcast 1",
        "views": "",
        "description": "Sangeeta’s dream was to fly high. She pursued a career in a fiercely competitive industry to make a name for herself. With the support of her parents, she overcame everything that got in her way. How does she apply her career insights in life? Tune in to hear her story.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      },
      {
        "title": "Confessions of a Single Mom",
        "tag": "Podcast 2",
        "views": "",
        "description": "Prarthna, a single mother who came to Mumbai a few years ago to start a new life, talks about her roller-coaster journey in the city of dreams, the important lessons she learned, and the financial goals she has set for herself in the future.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      },
      {
        "title": "The Wo-man of the House",
        "tag": "Podcast 3",
        "views": "",
        "description": "Alpana had a different kind of plan in life, one that didn’t involve climbing up a corporate ladder but rather, one that would help her family become financially stable in the future. Tune in to hear her story.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      },
      {
        "title": "Finding Meaning",
        "tag": "Podcast 4",
        "views": "",
        "description": "Pushpa has managed to strike the perfect balance between her own personal goals and her duties as a housewife. Does she have any regrets as she looks back at her journey? Click to find out.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      },
      {
        "title": "You Always Remember Your First",
        "tag": "Podcast 5",
        "views": "",
        "description": "Nikita wanted to get out of her comfort zone and build a financially secure life. She is the first woman in her family to have studied away from home and worked in a big city. She chose an unconventional industry despite facing questions about ‘settling down’. Click to hear her story.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      },
      {
        "title": "Rock Climbing To The Top",
        "tag": "Podcast 6",
        "views": "",
        "description": "The work she has done in the Pharma sector precedes her reputation as the most sought after and influential woman in her industry. This is Kanchana’s story, a woman who made it to the list of The 50 Most Influential Women in Pharma.",
        "audioDetails": {
          "time": "0:00 / 1:58",
          "progress": {
            "value": 25,
            "label": "Basic example"
          }
        }
      }
    ]

    showIconForWishlist: boolean[] = [];
    showIconForWatchlist: boolean[] = [];

    forAllAudio1:boolean = true;
    forAllAudio2:boolean = true;

    constructor() {}

    ngOnInit(): void {
      console.log('1')
      this.getData.forEach(() => {
        this.showIconForWishlist.push(true);
        this.showIconForWatchlist.push(true);
      });
      
    }

    toggleIconForWishlist(index: number) {
      this.showIconForWishlist[index] = !this.showIconForWishlist[index];
    }
    
    toggleIconForWatchlist(index: number) {
      this.showIconForWatchlist[index] = !this.showIconForWatchlist[index];
    }

    toggleForAudio1()
    {
     this.forAllAudio1 = !this.forAllAudio1;
    }

    toggleForAudio2()
    {
     this.forAllAudio2 = !this.forAllAudio2;
    }

    toggleTooltip()
    {
      this.showTooltip = false;
    }
  

}
