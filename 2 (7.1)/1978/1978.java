// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력
// input: 4 1 3 5 7, output: 3

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        // 공백(" ")으로 구분된 N개의 수를 입력받아서 배열에 저장
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
        int count = 0;

        for (int i = 0; i < N; i++) {
            if (isPrime(arr[i])) count++;
        }

        System.out.println(count);
    }

    public static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}