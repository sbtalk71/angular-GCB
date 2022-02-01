import { AppComponent } from "../app.component"

xdescribe("component Test suite",()=>{

    let comp:AppComponent;

    beforeAll(()=>{
        comp=new AppComponent();
    })
    it("it should test title",()=>{

       expect(comp.title).toContain("testing");
    })

    it("it should test query",()=>{

        expect(comp.query).toContain("hello");
    })

    it("it should test greet()",()=>{

        expect(comp.greet()).toContain("Welcome");
    })

})