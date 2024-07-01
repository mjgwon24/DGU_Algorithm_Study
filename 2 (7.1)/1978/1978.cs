// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력
// input: 4 1 3 5 7, output: 3

using System;

namespace _1978 {
    class Program {
        public static void Main(String[] args) {
            int N = int.Parse(Console.ReadLine());
            String[] tokens = Console.ReadLine().Split(' ');
            int count = 0;

            for (int i = 0; i < N; i++) {
                int num = int.Parse(tokens[i]);
                if (IsPrime(num)) count++; // 소수이면 count 증가
            }

            Console.WriteLine(count);
        }

        public static bool IsPrime(int num) {
            if (num < 2) return false;          // 2미만은 소수가 아님
            for (int i = 2; i * i <= num; i++) {
                if (num % i == 0) return false; // 소수가 아님
            }
            return true; // 소수
        }
    }
}