import java.util.*;

public class TestHS {

    public static void main(String[] args) {

        Set hs = new HashSet();
        hs.add("one");
        hs.add("two");
        hs.add("three");
        hs.add("four");

        String s = new String("one");
        hs.add(s);

        System.out.println("hs = " + hs);

    }

}
