// 정수 N개로 이루어진 수열A에서 X보다 작은 수 구하기
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int X = sc.nextInt();
        int[] A = new int[N];

        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
            if (A[i] < X) {
                System.out.print(A[i] + " ");
            }
        }
    }
}