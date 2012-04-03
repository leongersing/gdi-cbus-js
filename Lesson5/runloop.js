THE RUN LOOP

task 1 - 1 second
task 2 - 10 seconds
task 3 - 1 second
task 4 - 2 seconds
task 5 - 60 seconds

function sleep(seconds){
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + (seconds * 1000));
  console.log("I slept for " + seconds + " seconds");
}

function task1(whenDoneDoThis){
  sleep(1);
  whenDoneDoThis();
}

function task2(whenDoneDoThis){
  sleep(10);
  whenDoneDoThis();
}

function task3(whenDoneDoThis){
  sleep(1);
  whenDoneDoThis();
}

function task4(whenDoneDoThis){
  sleep(2);
  whenDoneDoThis();
}

function task5(whenDoneDoThis){
  sleep(60);
  whenDoneDoThis();
}

task1();
task2();
task3();
task4();
task5();

alert("1");

task1( 
  function(){
    task2(
      function(){
        task3(
          function(){
            task4(
              function(){
                task5();
              }
            )
          }
        )
      }
    )
  }

  alert("2");