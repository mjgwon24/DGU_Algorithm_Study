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

using System;
using System.Linq;

namespace _10819 {
    class Program {
        static int N;
        static int[] A;
        static int[] P;
        static bool[] visited;
        static int max = int.MinValue;

        static void Main(String[] args) {
            N = Convert.ToInt32(Console.ReadLine());
            A = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToArray();
            P = new int[N];
            visited = new bool[N];

            Permutation(0);

            Console.WriteLine(max);
        }

        // 순열 생성
        static void Permutation(int depth) {
            if (depth == N) {
                int sum = 0;
                for (int i = 0; i < N - 1; i++) {
                    sum += Math.Abs(P[i] - P[i + 1]);
                }
                max = Math.Max(max, sum);
                return;
            }

            for (int i = 0; i < N; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    P[depth] = A[i];
                    Permutation(depth + 1);
                    visited[i] = false;
                }
            }
        }
    }
}