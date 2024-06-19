// input: A, B (자연수)
// output: A, B 사칙연산
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();

        int sum = A + B;
        int min = A - B;
        int mul = A * B;
        int div = A / B;
        int mod = A % B;

        System.out.println(sum);
        System.out.println(min);
        System.out.println(mul);
        System.out.println(div);
        System.out.println(mod);
    }
}