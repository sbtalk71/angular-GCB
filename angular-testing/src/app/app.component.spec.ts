import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("Angular Comopnent Tests", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();
    });

    it("should very that the component is created", () => {
        const fixture = TestBed.createComponent(AppComponent);
        let comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    });

    it("should check the title",()=>{
        const fixture = TestBed.createComponent(AppComponent);
        let comp = fixture.componentInstance;
        expect(comp.title).toContain("testing");
    });

    it("should test the content of h2 element",()=>{
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let nativeElement=fixture.debugElement.nativeElement as HTMLElement;
        expect(nativeElement.querySelector('h2').textContent).toContain("Welcome")
    });

});