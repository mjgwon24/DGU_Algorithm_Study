// 정수 N개로 이루어진 수열A에서 X보다 작은 수 구하기

using System;

namespace _10871 {
    class Program {
        public static void Main(String[] args) {
            // 첫째 줄 input: N X
            string[] tokens = Console.ReadLine().Split(' ');
            int N = Convert.ToInt32(tokens[0]);
            int X = Convert.ToInt32(tokens[1]);

            // 둘째 줄 input: 수열 A
            string[] sequenceA = Console.ReadLine().Split(' ');

            for (int i = 0; i < N; i++) {

                if (Convert.ToInt32(sequenceA[i]) < X) {
                    Console.Write(sequenceA[i] + " ");
                }
            }
        }
    }
}

