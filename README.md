# tic-tac-toe

* Gameboard object의 gameboard는 array이다.
  * 플레이어는 object에 저장되고 object가 게임 flow를 조정해야 한다.
  * global code를 최대한 줄여서 제작, factory에 최대한 넣기.
  * 오직 하나의 instance만 필요하다면 IIFE의 factory에 넣어놓아라.
  * player혹은 gameboard object는 게임의 규칙과 일치해야 한다. logical place에 그것들을 놓아야 한다.
* 콘솔에 먼저 되는지 확인, 게임 끝났는지 확인하는 logic, tie or win, 3-in-a-rows, 
* console game하면 display/DOM logic을 움직이는 object를 제작하라. 함수 제작 (render gamboard array)
* player가 마크하는 function제작(이미 놓은 곳은 안되게), 이름 넣는 인터페이스 제작, start 혹은 restart하는 버튼, result보여주는 창 