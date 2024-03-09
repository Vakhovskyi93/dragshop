import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingWindowComponent } from './shoping-window.component';

describe('ShopingWindowComponent', () => {
  let component: ShopingWindowComponent;
  let fixture: ComponentFixture<ShopingWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopingWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
