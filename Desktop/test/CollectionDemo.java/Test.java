import java.util.ArrayList;
import java.util.*;

public class Test {

    public static void main(String[] args) {

        LinkedList col = new ArrayList();

        // ctrl + space + o to import

        col.add("Tik Tok");
        col.add("insta reels");
        col.add("reposo");
        col.add("chingari");

        System.out.println("col = " + col);

        // if you want to add the element ot that position

        col.add(2, "yahoo");

        // using for each loop

        // for (Object o : col) {
        // System.out.println(" o = " + o);
        // }

        // using for loop

        for (int i = 0; i < col.size(); i++) {

            Object o = col.get(i);
            System.out.println("o = " + o);

        }

        // to remove

        col.remove(3);
        System.out.println("remove element= " + col);
    }

}
