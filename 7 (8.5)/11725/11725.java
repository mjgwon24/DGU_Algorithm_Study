/**
 * 트리의 부모 찾기
 * 문제: 루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
 * 출력: 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.
 */

/**
 * 1. 노드 개수 N 입력
 * 2. 그래프 표현을 위한 ArrayList배열 tree, 부모 노드 저장을 위한 parents 배열 생성 및 초기화
 * 3. 각 노드간 연결 관계를 입력받아 그래프 구성
 * 4. 깊이 우선 탐색으로 각 노드의 부모 노드 설정
 * 5. 2번 노드부터 부모 노드 출력
 */

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    static ArrayList<Integer>[] tree;
    static int[] parents;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        tree = new ArrayList[N+1]; // 트리 초기화
        parents = new int[N+1];    // 부모 노드 초기화

        // 트리 초기화
        for (int i = 1; i <= N; i++) {
            tree[i] = new ArrayList<>();
        }

        // 트리 생성
        for (int i = 0; i < N-1; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            tree[a].add(b);
            tree[b].add(a);
        }

        dfs(1, 0); // 루트 노드인 1부터 탐색 시작. 부모 노드는 없으므로 0

        for (int i = 2; i <= N; i++) {
            System.out.println(parents[i]);
        }
    }


    /**
     * 깊이 우선 탐색
     * @param node: 현재 노드
     * @param parent: 부모 노드
     */
    public static void dfs(int node, int parent) {
        // 부모 노드 저장
        parents[node] = parent;

        // 자식 노드 탐색
        for (int child : tree[node]) {
            if (child != parent) {
                dfs(child, node);
            }
        }
    }
}
