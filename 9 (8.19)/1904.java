/**
 * 01타일
 * 문제: 수의 자릿수 N이 주어졌을 때, 만들 수 있는 수열의 모든 가짓수를 구하시오. (단, 0을 낱개로 사용 불가. 한 쌍의 00만 사용 가능)
 * 입력: 첫 번째 줄에 자연수 N이 주어진다.
 * 출력: 첫 번째 줄에 지원이가 만들 수 있는 길이가 N인 모든 2진 수열의 개수를 15746으로 나눈 나머지를 출력한다.
 */

import java.util.Scanner;

public class Main {
    public static int[] dp = new int[1000001];

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();

        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;

        for(int i = 3; i < dp.length; i++) {
            dp[i] = -1;
        }

        System.out.println(Tile(N));
    }

    public static int Tile(int N) {

        if(dp[N] == -1) {
            dp[N] = (Tile(N - 1) + Tile((N - 2))) % 15746;
        }
        return dp[N];
    }
}
