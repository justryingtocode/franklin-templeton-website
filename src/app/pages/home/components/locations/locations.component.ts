import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { MediaService } from 'src/app/shared/services/media-service/media-service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  @Input() isSmall = false
  isMobileView: boolean = false;
  otpNumber: Array<number> = [];
  otpRequired: boolean = false;
  otpSubmitted: boolean = false;
  showTextArea: boolean = false;
  remainingTime: number = 0;
  countdownTimeout: any;
  filedDefaullt: boolean = false
  mediaSrc: string = '';
  mediaType: string = '';
  isMediaTypeVideo: boolean = true;
  investNowForm: FormGroup = new FormGroup({})
  isVideoPlaying = false;
  constructor(private _fb: FormBuilder, private _mediaService: MediaService) { }
  ngOnInit(): void {
    this.getMediaDetails();
    this.initForm();
    // this.delayedBlock(); // Call the function to show the delayed block

  }
  delayedBlock() {
    setTimeout(() => {
      const delayedBlock = document.getElementById('map-statistics-block-2');
      if (delayedBlock) {
        delayedBlock.style.display = 'block'; // Show the delayed block after the specified time
      }
    }, 5000); // Change the time (in milliseconds) as per your requirement
  }

  scrolled: boolean = false;
  scrolled2:boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 350) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  playPauseVideoOnHover = () => {
    const statBlock = document.getElementById('map-statistics-block')
    const statBlock1 = document.getElementById('map-statistics-block-new')
    const video: any = document.getElementById('map-video')
    // video.currentTime = video.duration;
    video?.addEventListener('canplay', () => {
      video?.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        // video.playbackRate = 1.1;
        this.ensureVideoPlays(video)
        this.isVideoPlaying = true;
        statBlock?.classList.add('d-none')
        statBlock1?.classList.add('d-none')
        setTimeout(() => {
          // console.log(video.currentTime);
          if (video.currentTime > 3) {
            video.pause();
            this.isVideoPlaying = false;
            // video.onended();
          }
        }, 3800);
      })
      video?.addEventListener('mouseleave', () => {
        video?.pause()
        this.isVideoPlaying = false;
        // statBlock?.classList.remove('d-none')
      })
      video.onended = () => {
        // if (video.currentTime > 3) {
        //   statBlock?.classList.remove('d-none')
        //   statBlock1?.classList.remove('d-none')
        // }
        this.isVideoPlaying = false;
      }
    })
  }

  ensureVideoPlays = (video: any) => {

    if (!video) return;

    const promise = video.play();
    if (promise !== undefined) {
      promise.then(() => {
        // Autoplay started
      }).catch((error: any) => {
        // Autoplay was prevented.
        video.muted = true;
        video.play();
      });
    }
  }

  initForm = () => {
    this.investNowForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      query: ['', Validators.required],
      remarks: ['', [Validators.required]],
      conditionCheckbox: ['']
    })
  }
  clearFields() {
    this.otpRequired = false;
    this.otpSubmitted = false;
  }

  blockAlphabetsAndSpecialChars(event: any) {
    const char = event.key;
    // Check if the character is a numeric digit (0-9) or Backspace
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      event.preventDefault(); // Prevent the input of non-numeric characters
    }
  }


  moveTo() {
    clearInterval(this.countdownTimeout); // Clear the previous interval
    this.remainingTime = 30; // Reset the countdown time
    this.otpRequired = !this.otpRequired;
    this.investNowForm.reset();
    this.startCountdown()
  }

  startCountdown() {
    clearTimeout(this.countdownTimeout); // Clear any existing timeout
    if (this.remainingTime > 0) {
      this.countdownTimeout = setTimeout(() => {
        this.remainingTime--;
        this.startCountdown(); // Recursively call startCountdown
      }, 1000); // Update every 1 second (1000 milliseconds)
    }
  }

  resetCountdown() {
    clearTimeout(this.countdownTimeout); // Clear the countdown timeout
    this.remainingTime = 30; // Reset the remaining time
    this.startCountdown()
  }

  checkboxCondition(event: any) {
    if (event.target.checked) {
      this.filedDefaullt = true;
    }
    else {
      this.filedDefaullt = false;
    }
  }
  onSelect() {
    this.showTextArea = true;
  }
  getMediaDetails = () => {
    this._mediaService.getMediaDetails().subscribe({
      next: (result: any) => {
        this.mediaSrc = result[0].src;
        if (result[0].mediaType == 'video/mp4') {
          this.mediaType = result[0].mediaType;
          this.handleVideoPlayback();
          this.isMediaTypeVideo = true
        }
        // Here you can add whatever image extension is required
        if(result[0].mediaType == 'image/jpeg' || result[0].mediaType == 'image/png') {  
          this.mediaType = result[0].mediaType;
          this.isMediaTypeVideo = false;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  handleVideoPlayback() {
    if (window.innerWidth < 900) {
      const statBlock = document.getElementById('map-statistics-block');
      const statBlock1 = document.getElementById('map-statistics-block-new')
      const video: any = document.getElementById('map-video-mobile');
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      // console.log(isIOS);
        this.isMobileView = true;
        // video.currentTime = 0;
        video?.addEventListener('canplaythrough', () => {
          this.isVideoPlaying = true;
          statBlock?.classList.add('d-none')
          this.ensureVideoPlays(video)
          setTimeout(() => {
            if (video.currentTime > 3) {
              // video.pause();
              video.onended();
            }
          }, 4000);
          video.onended = () => {
            this.isVideoPlaying = false;
            // if (video.currentTime > 3) {
            //   statBlock?.classList.remove('d-none');
            //   statBlock1?.classList.remove('d-none');
              setTimeout(() => {
                if (isIOS) {
                  statBlock?.classList.add('d-none')
                  statBlock1?.classList.add('d-none');
                }
                else {
                  
                }
                // isIOS ? statBlock?.classList.add('d-none') : '';
                this.ensureVideoPlays(video)
              }, 1500);
            // }
          }
        })
      // }
    }
    else {
      this.isMobileView = false;
      this.playPauseVideoOnHover()
    }
  }
  onMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const tooltip = target.closest('.tooltip') as HTMLElement;
    if (tooltip) {
      const tooltipText = tooltip.querySelector('.tooltip-box') as HTMLElement;
      const me = document.getElementById('tooltip123');
      me?.classList.add('show-tooltip')
    }
  }
  onMouseOut(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const tooltip = target.closest('.tooltip') as HTMLElement;
    if (tooltip) {
      const tooltipText = tooltip.querySelector('.tooltip-box') as HTMLElement;
      const me = document.getElementById('tooltip123');
      me?.classList.remove('show-tooltip')
    }
  }
}

