// N개의 수가 주어졌을 때, 이를 오름차순 정렬
// 첫재쭐 N에 수가 주어지고, 둘째 줄부터 N개의 수가 주어진다.

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        int temp;

        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }

        // arr배열을 오름차순 정렬
        for (int i = 0; i < N; i++) {
            for (int j = i; j < N; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        for (int i = 0; i < N; i++) {
            System.out.println(arr[i]);
        }
    }
}