import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHeroesComponent } from './buscar-heroes.component';

describe('BuscarHeroesComponent', () => {
  let component: BuscarHeroesComponent;
  let fixture: ComponentFixture<BuscarHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
