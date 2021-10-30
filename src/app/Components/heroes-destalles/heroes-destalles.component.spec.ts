import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDestallesComponent } from './heroes-destalles.component';

describe('HeroesDestallesComponent', () => {
  let component: HeroesDestallesComponent;
  let fixture: ComponentFixture<HeroesDestallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDestallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDestallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
