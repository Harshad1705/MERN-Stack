class Program{

    static void Main(){

        Student s1 = new Student();
        s1.Marks = 99;
        System.Console.WriteLine(s1.Marks);
        System.Console.Read();
    }
}

class Student{

    int marks;

    // property
    public int Marks{
        get{return this.marks;}
        set{this.marks=value;}
    }
}
