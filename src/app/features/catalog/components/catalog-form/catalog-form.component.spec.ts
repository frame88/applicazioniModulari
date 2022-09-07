import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFormComponent } from './catalog-form.component';

describe('CatalogFormComponent', () => {
  let component: CatalogFormComponent;
  let fixture: ComponentFixture<CatalogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
