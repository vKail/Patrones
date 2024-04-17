package com.jurado.adrian.factory;

public class FigureFactory {
    public static Shape getShape(String shapeName) {
        if (shapeName.equals("circle")) {
            return new Circle();

        } else if (shapeName.equals("rectangle")) {
            return new Rectangle();
        } else if (shapeName.equals("square")) {
            return new Squeare();
        } else {
            return null;
        }
    };
}
