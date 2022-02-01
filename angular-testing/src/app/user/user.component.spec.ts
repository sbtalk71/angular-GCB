import { TestBed } from "@angular/core/testing";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, By } from "@angular/platform-browser";
import { UserComponent } from "./user.component";

describe("Form Testing suite", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormGroup
      ],
      declarations: [
        UserComponent
      ]
    }).compileComponents();
  });
});

it("should test the title fo form", () => {
  const fixture = TestBed.createComponent(UserComponent);
  let userComp = fixture.componentInstance;
  expect(userComp.title).toBe("User Form");
});

it("should detect onSubmit call", () => {
  const fixture = TestBed.createComponent(UserComponent);
  fixture.detectChanges();
  let userComp = fixture.componentInstance;
  spyOn(userComp, 'onSubmit').call(() => console.log("Submit Button pressed"));
  let btnElement = fixture.debugElement.query(By.css('button')).nativeElement;
  btnElement.click();
  expect(userComp.onSubmit).toHaveBeenCalledTimes(1);

});

it(" should detect invalid form", () => {
  const fixture = TestBed.createComponent(UserComponent);
  let userComp = fixture.componentInstance;
  userComp.userForm.controls['name'].setValue('');
  userComp.userForm.controls['email'].setValue('');
  expect(userComp.userForm.valid).toBeFalsy();
});

it("should detect valid form", () => {
  const fixture = TestBed.createComponent(UserComponent);
  let userComp = fixture.componentInstance;
  userComp.userForm.controls['name'].setValue('Shantanu');
  userComp.userForm.controls['email'].setValue('sbtalk@gmail.com');
  expect(userComp.userForm.valid).toBeTrue();
});

