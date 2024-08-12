/**
 * 연산자 끼워넣기
 * 문제: N개의 수와 N-1개의 연산자가 주어졌을 때, 만들 수 있는 식의 결과가 최대인 것과 최소인 것을 구하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 수의 개수 N(2 ≤ N ≤ 11)가 주어진다. 둘째 줄에는 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 100) 셋째줄에는 합이 N-1인 4개의 정수가 주어지는데, 차례대로 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수이다.
 * 출력: 첫째 줄에 만들 수 있는 식의 결과의 최댓값을, 둘째 줄에는 최솟값을 출력한다.
 */

using System;
using System.IO;
using System.Collections.Generic;

public class Lecture
{
    static int n;
    static int[] a;
    static int[] op = new int[4];
    static int[] b;
    static int max = int.MinValue;
    static int min = int.MaxValue;
    public static void Main(string[] args) {
        // 입력
        n = int.Parse(Console.ReadLine());
        a = Array.ConvertAll(Console.ReadLine().Split(' '), s => int.Parse(s));
        b = Array.ConvertAll(Console.ReadLine().Split(' '), s => int.Parse(s));
        for(int i = 0; i < 4; i++) {
            op[i] = b[i];
        }
        // ���산자 끼워넣기
        Solve(a[0], 1);
        Console.WriteLine(max);
        Console.WriteLine(min);
    }

    public static void Solve(int sum, int index) {
        if(index == n) {
            max = Math.Max(max, sum);
            min = Math.Min(min, sum);
            return;
        }
        for(int i = 0; i < 4; i++) {
            if(op[i] > 0) {
                op[i]--;
                if(i == 0) Solve(sum + a[index], index + 1);
                else if(i == 1) Solve(sum - a[index], index + 1);
                else if(i == 2) Solve(sum * a[index], index + 1);
                else if(i == 3) Solve(sum / a[index], index + 1);
                op[i]++;
            }
        }
    }
}