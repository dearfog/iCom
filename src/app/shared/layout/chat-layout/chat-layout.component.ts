import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnDestroy {

    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;
  
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }  
    folders: Section[] = [
        {
          name: 'Photos',
          updated: new Date('1/1/16'),
        },
        {
          name: 'Recipes',
          updated: new Date('1/17/16'),
        },
        {
          name: 'Work',
          updated: new Date('1/28/16'),
        }
      ];
      notes: Section[] = [
        {
          name: 'Vacation Itinerary',
          updated: new Date('2/20/16'),
        },
        {
          name: 'Kitchen Remodel',
          updated: new Date('1/18/16'),
        }
      ];
}

export interface Section {
    name: string;
    updated: Date;
  }