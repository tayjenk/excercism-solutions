public class Hamming {

    private int hammingDist = 0;

    public Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.isEmpty() && !rightStrand.isEmpty()) throw new IllegalArgumentException("left strand must not be empty.");
        if (!leftStrand.isEmpty() && rightStrand.isEmpty()) throw new IllegalArgumentException("right strand must not be empty.");
        if (leftStrand.length() != rightStrand.length()) {
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        } else {
            short i = 0;
            int length = leftStrand.length();
            while (i < length) {
                if (leftStrand.charAt(i) != rightStrand.charAt(i)) this.hammingDist += 1;
                i++;
            }
        }
    }

    public int getHammingDistance() {
        return this.hammingDist;
    }
}
