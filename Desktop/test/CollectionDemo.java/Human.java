import java.util.Comparator;
import java.util.Set;
import java.util.TreeSet;

public class Human implements Comparable {

    private String name;
    private int age;

    public boolean equals(Object e) {

        if (e instanceof Human) {
            Human h = (Human) e;

            if (this.name.equals(h.name) && this.age == h.age) {
                return true;
            } else {
                return false;
            }

        }
        return false;

    }

    public int hashCode() {

        return (name + age).hashCode();

    }

    public String toString() {

        return "name = " + name + " age = " + age;
    }

    public Human(String name, int age) {

        if (name != null && !name.equals("")) {
            this.name = name;

        } else {
            throw new IllegalArgumentException("Invalid name");
        }
        if (age > 0 && age < 100) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Invalid number");
        }

        System.out.println("in parameterised Constructor in Human class");
    }

    // private void validateName(String name){}

    public void setName(String name) {

        if (name != null && !name.equals("")) {
            this.name = name;

        } else {
            throw new IllegalArgumentException("Invalid name");
        }
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {

        if (age > 0 && age < 100) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Invalid number");
        }
    }

    public int getAge() {
        return age;
    }

    public int compareTo(Object o1) {

        if (o1 instanceof Human) {

            Human h = (Human) o1;

            return this.name.compareTo(h.name);

        }
        throw new IllegalArgumentException("Invalid Object reference");
    }
}

class TestHuman {

    public static void main(String[] args) {

        Human h = new Human("Rama", 15);
        Human h1 = new Human("Ramanna", 16);
        Human h2 = new Human("Ramanuja", 17);

        // System.out.println("h.name" + h.getName());

        // System.out.println("h .equals(h1)= " + h.equals(h1));

        // System.out.println(" h.hashCode = " + h.hashCode());
        // System.out.println(" h1.hashCode = " + h1.hashCode());

        // System.out.println(h);

        Set s = new TreeSet();
        s.add(h);
        s.add(h1);
        s.add(h2);

        System.out.println("s = " + s);
        System.out.println("s = " + h.compareTo(h2));

        StringLengthComparator slc = new StringLengthComparator();

        Set s2 = new TreeSet(slc);
        s2.add("ond");
        s2.add("erad");
        s2.add("muru");
        s2.add("nalaku");

        System.out.println(" s2 = " + s2);

    }
}

class StringLengthComparator implements Comparator {

    public int compare(Object o1, Object o2) {

        if (o1 instanceof String && o2 instanceof String) {

            String s1 = (String) o1;
            String s2 = (String) o2;

            return s1.length() - s2.length();

        } else {
            throw new IllegalArgumentException("Invalid Object Reference");
        }

    }

}