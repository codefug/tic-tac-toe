# tic-tac-toe

## 주 임무 : js를 이용한 게임 로직 구현
  * ### gamehistory()
    * 게임 전체를 총괄하는 함수
    * round, draw를 제외한 round, player들의 정보, 각라운드의 정보를 담고 있다.
    * 다른 함수와 마찬가지로 화살표 함수로 scope를 함수 본문으로 맞춘 함수들을 객체로써 return함으로써 외부에서 해당 메소드를 사용할 수 있게 해주었다. 
  * ### Game()
    * 라운드 전체를 총괄하는 함수
    * draw를 설정하기 위한 laps, 게임판 정보를 담고 있다.
    * 게임을 비우는 clearGame 메소드는 gamestart와 cell을 받아서 clear해주고 dialog가 존재한다면 dialog를 처리해주는 result 함수를 리턴한다.
  * ### startscreen()
    * IIFE를 활용하여 즉시 호출되는 함수
    * 게임을 설정하고 게임판을 누르면 로직이 발생되도록 한다.
  * ### gamelogic()
    * 배열 winRule를 활용하여 게임판이 승리로직과 같은지 검사하는 함수
  * ### player()
    * sign을 받아서 {sign:sign} 객체를 반환하는 함수
  * ### result()
  *  결과 dialog를 처리하는 함수, 로직에 따라 dialog의 내용을 바꾸고 dialog를 처리한다.
  * ### 이를 통해 배운점
    * closure를 활용하여 function자체에 private variable을 놓고 이를 접근하는 get property느낌의 function 들을 return 객체에 놓아줌으로써 class처럼 구현되는 js의 특징을 잘 알 수 있었다. (factory function)
    * IIFE (Immediately Invoked Function Expression) 를 활용하여 함수의 선언과 함께 호출하는 function을 구현하면서 전역 변수 없이 구현되는 프로그래밍 방식을 알 수 있었다.
    * scope의 개념을 숙지하여야 프로젝트를 진행할 수 있었으며 난해했던 기존의 프로그래밍 방식을 많이 개선했던거 같다.