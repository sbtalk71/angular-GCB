import { compute } from './compute'
xdescribe("compute test suite", () => {

    beforeAll(()=>{
        console.log("before All called..");
    });

    afterAll(()=>{
        console.log("after All called..");
    });

    it("should return 0 if input less than 0", () => {
        let result = compute(-1);
        expect(result).toBe(0);
    });

    it("should return 2 if input is 1", () => {
        let result = compute(1);
        expect(result).toBe(2);
    })
})