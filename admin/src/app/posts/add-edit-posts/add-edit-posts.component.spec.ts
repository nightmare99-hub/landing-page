import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPostsComponent } from './add-edit-posts.component';

describe('AddEditPostsComponent', () => {
  let component: AddEditPostsComponent;
  let fixture: ComponentFixture<AddEditPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
