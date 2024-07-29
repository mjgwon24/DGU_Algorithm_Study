/**
 * 가운데를 말해요
 * 문제: 정수가 주어질때마다 해당 수 중에서 중간값을 출력한다. 만약 중간값이 두개라면 두 수 중 작은 수를 출력한다.
 * 입력: 첫째 줄에는 수의 개수 N이 주어진다. N은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수이다. 그 다음 N줄에 걸쳐 정수가 주어진다.
 * 출력: 한 줄에 하나씩 중간값을 출력한다.
 */

using System;
using System.Collections.Generic;
using System.IO;

public class Program
{
    public static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        MinHeap minHeap = new MinHeap();
        MaxHeap maxHeap = new MaxHeap();
        for (int i = 0; i < n; i++)
        {
            int num = int.Parse(Console.ReadLine());
            if (minHeap.Count == maxHeap.Count)
            {
                maxHeap.Push(num);
            }
            else
            {
                minHeap.Push(num);
            }
            if (minHeap.Count > 0 && maxHeap.Count > 0 && minHeap.Peek() < maxHeap.Peek())
            {
                int a = maxHeap.Pop();
                int b = minHeap.Pop();
                maxHeap.Push(b);
                minHeap.Push(a);
            }
            Console.WriteLine(maxHeap.Peek());
        }
    }
}