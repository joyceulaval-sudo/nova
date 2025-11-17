import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAccordionComponent } from './nova-accordion.component';

describe('NovaAccordionComponent', () => {
  let component: NovaAccordionComponent;
  let fixture: ComponentFixture<NovaAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
