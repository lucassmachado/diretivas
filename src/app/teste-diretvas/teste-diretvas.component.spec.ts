import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDiretvasComponent } from './teste-diretvas.component';

describe('TesteDiretvasComponent', () => {
  let component: TesteDiretvasComponent;
  let fixture: ComponentFixture<TesteDiretvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteDiretvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDiretvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
