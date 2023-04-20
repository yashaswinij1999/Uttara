import java.util.*;

import javax.management.ObjectName;

public class TestCollections {

    public static void main(String[] args) {

        Collection c = new ArrayList();

        for (String s : args)

            c.add(s);

        c.add("maggie");
        System.out.println("col c  = " + c);

        System.out.println("Size = " + c.size());

        String s1 = "idl";

        System.out.println("search = " + c.contains(s1));

        String s3 = new String("dosa");
        System.out.println("search = " + c.contains(s3));

        c.remove("dosa");
        System.out.println("search = " + c);

        c.remove("dosa");
        System.out.println("search = " + c);

        // find the elements which as "do" in it

        for (Object x : c) {

            String s4 = (String) x;

            if (s4.contains("do")) {
                System.out.println("found match " + s4);
            }

        }

        String a1 = "pizza";
        String a2 = "burger";
        String a3 = "french fries";
        String a4 = "crossiant";

        System.out.println("c = " + c);

        Collection c2 = new LinkedList();
        c2.add(a1);
        c2.add(a2);
        c2.add(a3);
        c2.add(a4);

        System.out.println("addAll =  " + c.addAll(c2));
        System.out.println("c = " + c);

        System.out.println("removeAll =  " + c.removeAll(c2));
        System.out.println("c = " + c);

    }

}