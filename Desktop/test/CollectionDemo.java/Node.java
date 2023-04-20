public class Node {

    private String data;
    private long position;
    private Node next;

    public void setData(String data) {

        this.data = data;
    }

    public String getData() {
        return data;
    }

    public void setPosition(long position) {

        this.position = position;
    }

    public long getPosition() {
        return position;
    }

    public void setNext(Node next) {

        this.next = next;
    }

    public Node getNext() {
        return next;
    }

    public Node(String data, long position) {

        super();
        this.data = data;
        this.position = position;

    }

    public Node() {

    }

}