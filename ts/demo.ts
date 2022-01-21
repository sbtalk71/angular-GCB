class B{

}

class C{

}

class A{

    public c:C;
    public b:B;

    constructor(c:C,b:B){

    }
}

const b= new B();
const c= new C();

const a=new A(b,c);


