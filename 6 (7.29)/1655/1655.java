/**
 * 가운데를 말해요
 * 문제: 정수가 주어질때마다 해당 수 중에서 중간값을 출력한다. 만약 중간값이 두개라면 두 수 중 작은 수를 출력한다.
 * 입력: 첫째 줄에는 수의 개수 N이 주어진다. N은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수이다. 그 다음 N줄에 걸쳐 정수가 주어진다.
 * 출력: 한 줄에 하나씩 중간값을 출력한다.
 */

import java.util.Scanner;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        // 최대힙, 최소힙
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((o1, o2) -> o2 - o1);

        for (int i = 0; i < N; i++) {
            int num = sc.nextInt();

            // 최대힙에 넣거나 최소힙에 넣기
            if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
                maxHeap.offer(num);
            } else {
                minHeap.offer(num);
            }

            // 최대힙과 최소힙의 크기가 같아지도록 조정
            if (maxHeap.size() > minHeap.size() + 1) {
                minHeap.offer(maxHeap.poll());
            } else if (minHeap.size() > maxHeap.size()) {
                maxHeap.offer(minHeap.poll());
            }

            // 현재 중간값을 출력
            System.out.println(maxHeap.peek());
        }

        sc.close();
    }
}

/**
 * - PriorityQueue: 우선순위 큐
 * - .peek(): 큐의 맨 앞에 있는 값을 반환
 * - .offer(): 큐에 값을 추가
 * - .poll(): 큐의 맨 앞에 있는 값을 제거하고 반환
 */