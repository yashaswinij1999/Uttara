import java.util.List;

public interface LinkedList {

    public void add(String data);

    public void print();

    public boolean contains(String data);

    public boolean isEmpty();

    public long size();

    public void insert(int position, String data);

    public String remove(int position);

    public String get(int position);

}

class SinglyLinkedList implements LinkedList {

    private Node head;
    private Node last;
    private long size;

    public void add(String data) {

        Node n = new Node(data, size);

        if (head == null && last == null) {
            head = last = n;
        } else {
            last.setNext(n);
            last = n;
        }
        size++;

    }

    public void print() {

        if (head == null) {
            System.out.println("please add the values");
        } else {
            Node temp = head;
            while (temp != null) {
                System.out.println("data = " + temp.getData() + " " + " temp.position " + temp.getPosition());
                temp = temp.getNext();
            }

        }

    }

    public boolean isEmpty() {
        return (size == 0);
    }

}

class TestSinglyLinkedList {

    public static void main(String[] args) {

        LinkedList l = new SinglyLinkedList();
        l.add("Priya");
        l.add("varsha");
        l.add("dakshu");

        l.print();

    }
}
