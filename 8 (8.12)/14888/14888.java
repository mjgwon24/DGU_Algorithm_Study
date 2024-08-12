/**
 * 연산자 끼워넣기
 * 문제: N개의 수와 N-1개의 연산자가 주어졌을 때, 만들 수 있는 식의 결과가 최대인 것과 최소인 것을 구하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 수의 개수 N(2 ≤ N ≤ 11)가 주어진다. 둘째 줄에는 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 100) 셋째줄에는 합이 N-1인 4개의 정수가 주어지는데, 차례대로 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수이다.
 * 출력: 첫째 줄에 만들 수 있는 식의 결과의 최댓값을, 둘째 줄에는 최솟값을 출력한다.
 */

import java.util.Scanner;

public class Main {
    static int N;
    static int[] numbers;
    static int[] operators;
    static int max = Integer.MIN_VALUE;
    static int min = Integer.MAX_VALUE;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        numbers = new int[N];

        for (int i = 0; i < N; i++) {
            numbers[i] = sc.nextInt();
        }

        operators = new int[4];
        for (int i = 0; i < 4; i++) {
            operators[i] = sc.nextInt();
        }

        // DFS를 이용한 모든 경우의 수 탐색
        calculate(numbers[0], 1);

        System.out.println(max);
        System.out.println(min);
    }

    static void calculate(int currentValue, int index) {
        if (index == N) {
            max = Math.max(max, currentValue);
            min = Math.min(min, currentValue);
            return;
        }

        for (int i = 0; i < 4; i++) {
            if (operators[i] > 0) {
                operators[i]--;
                int nextValue = currentValue;

                switch (i) {
                    case 0:
                        nextValue += numbers[index];
                        break;
                    case 1: // 뺄셈
                        nextValue -= numbers[index];
                        break;
                    case 2: // 곱셈
                        nextValue *= numbers[index];
                        break;
                    case 3: // 나눗셈
                        nextValue = (currentValue < 0) ? -(-currentValue / numbers[index]) : (currentValue / numbers[index]);
                        break;
                }

                calculate(nextValue, index + 1); // 다음 수로 이동
                operators[i]++; // 사용한 연산자 복구
            }
        }
    }
}
