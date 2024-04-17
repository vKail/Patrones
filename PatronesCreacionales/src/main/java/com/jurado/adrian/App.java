package com.jurado.adrian;  
import com.jurado.adrian.singleton.Student;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Student student = Student.getSingletonInstance("Hola", "Mundo", "FISEI");
        // Student student2 = Student.getSingletonInstance("Hola", "Mundo", "FISEI");
        System.out.println("-----------------------------------------------------------------------");
        System.out.println(student.toString());
        System.out.println("-----------------------------------------------------------------------");
    }
}
