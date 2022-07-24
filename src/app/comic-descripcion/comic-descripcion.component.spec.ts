import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDescripcionComponent } from './comic-descripcion.component';

describe('ComicDescripcionComponent', () => {
  let component: ComicDescripcionComponent;
  let fixture: ComponentFixture<ComicDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
