/**
 * 차이를 최대로
 * 문제: N개의 정수로 이루어진 배열 A가 주어진다. 이때, 배열에 들어있는 정수의 순서를 적절히 바꿔서 다음 식의 최댓값을 구하는 프로그램을 작성하시오.
 * |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|
 * 입력: 첫째 줄에 N(3 ≤ N ≤ 8)이 주어진다. 둘째 줄에는 배열 A에 들어있는 수가 주어진다. 배열에 들어있는 수는 -100보다 크거나 같고, 100보다 작거나 같다.
 * 출력: 배열 A에 들어있는 수를 적절히 섞어서 만들 수 있는 수열 S의 '차이'를 최대로 출력한다.
 *
 * [문제풀이 알고리즘]
 * 재귀함수를 통해 순열 생성 후, 순열이 완성되면 차이 계산
 * 차이를 계산해, 최대값 반환
 */

import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        int[] temp = new int[N];
        int result = 0;

        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr);                               // 오름차순 정렬
        boolean[] visited = new boolean[N];             // 순열을 만들기 위한 방문 여부 배열
        result = permutation(arr, temp, visited, N, 0);
        System.out.println(result);
    }

    // 순열 생성 함수
    public static int permutation(int[] arr, int[] temp, boolean[] visited, int N, int depth) {
        int result = 0;

        // 순열이 완성되면 차이 계산
        if (depth == N) {
            result = calculate(temp, N);
            return result;
        }

        // 순열 생성
        for (int i = 0; i < N; i++) {
            if (!visited[i]) {
                visited[i] = true;
                temp[depth] = arr[i];
                result = Math.max(result, permutation(arr, temp, visited, N, depth + 1));   // 재귀
                visited[i] = false; // 방문 해제
            }
        }
        return result;
    }

    // 차이 절댓값 반환
    public static int calculate(int[] arr, int N) {
        int result = 0;
        for (int i = 0; i < N - 1; i++) {
            result += Math.abs(arr[i] - arr[i + 1]);
        }
        return result;
    }
}
