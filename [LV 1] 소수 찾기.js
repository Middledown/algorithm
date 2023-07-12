// # 📝 [JavaScript] 소수 찾기
// ---

// ## ▷ 문제 설명![](https://velog.velcdn.com/images/middledown12/post/748b5429-929a-42a9-9eb6-37bb8a85ea52/image.png)

// ## ▷ 제한 조건![](https://velog.velcdn.com/images/middledown12/post/821e0edf-7109-4713-a9bb-f491753728e5/image.png)

// ## ▷ 입출력 예

// ```jsx
// solution(10) // 4
// solution(5) // 3
// ```

// ## ▷ 내 풀이

// ```jsx
// function solution(n) {
//   let arr = [];
//   let cnt = 0;

//   for (let i = 0; i < n + 1; i++) {
//     arr.push(true);
//   }

//   for (let i = 2; i * i <= n; i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         arr[j] = false;
//       }
//     }
//   }

//   arr.splice(0, 2, false, false);

//   for(let i = 0; i <arr.length; i++) {
//     if(arr[i]) cnt++;
//   }

//   return cnt;
// }
// ```

// ## ▷ 접근 방식

// 소수를 구할 때에는 에라토스테네스의 체를 써야된다고 하는데 처음에는 무슨 말인지 하나도 이해가 안되었다. 그런데 밑에 gif를 보고 단번에 이해가 갔다.
// ![](https://velog.velcdn.com/images/middledown12/post/92b9255d-96b3-4678-990f-093660da7b61/image.gif)
// 에라토스테네스의 체란 n값까지 구하면서 소수를 찾으면 소수의 배수를 구하고, 그 배수를 지우면 소수만 남는다는 이야기다.
// i \* i가 n을 넘어서는 순간 의미가 없으므로 그 전에서 소수를 계속 구해주면서 소수가 나오면 n보다 커지기 전까지 계속 곱하면서 배열의 값을 0으로 만든다. for문을 다 돌린 후 배열에는 0과 0이 아닌 값만 있는데, 0이면 소수가 아니므로 0이 아닌 값만 더해주는 식으로 풀이했다.

// ---
// >
// 출처: [프로그래머스](https://programmers.co.kr/)
// >
