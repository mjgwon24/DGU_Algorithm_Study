// N개의 수가 주어졌을 때, 이를 오름차순 정렬
// 첫재쭐 N에 수가 주어지고, 둘째 줄부터 N개의 수가 주어진다.

using System;

namespace _2750 {
    class Program {
        public static void Main(String[] args) {
            int N = int.Parse(Console.ReadLine());
            int[] arr = new int[N];
            int temp;

            for (int i = 0; i < N; i++) {
                arr[i] = int.Parse(Console.ReadLine());
            }

            // arr 배열을 오름차순 정렬
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
                Console.WriteLine(arr[i]);
            }
        }
    }
}