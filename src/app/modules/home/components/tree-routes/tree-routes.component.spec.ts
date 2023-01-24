import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRoutesComponent } from './tree-routes.component';

describe('TreeRoutesComponent', () => {
  let component: TreeRoutesComponent;
  let fixture: ComponentFixture<TreeRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
