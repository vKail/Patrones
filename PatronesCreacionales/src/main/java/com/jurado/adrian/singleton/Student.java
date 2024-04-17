package com.jurado.adrian.singleton;

public class Student {
    private String name;
    private String lastName;
    private String faculty;
    private static Student student;

    private Student(String name, String lastName, String faculty){
        super();
        this.name =  name;
        this.lastName = lastName;
        this.faculty = faculty;
        System.out.println("Mi objeto es: "+ this.toString());
    }

    public static Student getSingletonInstance (String name, String lastName, String faculty) {
        if (student == null) {
            student = new Student(name, lastName, faculty);
        } else {
            System.err.println("No se puede crear el objeto");
        }
        return student;
    }

    @Override
    public String toString() {
        return "Student: " +
                "Nombre: '" + name + '\'' +
                ", Apellido: '" + lastName + '\'' +
                ", Facultad: '" + faculty + '\'' ;
    }
}
