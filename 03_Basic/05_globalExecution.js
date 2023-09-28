/*
        ======= JavaScript Execution Context ========
        
        Three types =>
        1. Global Execution Context
        2. Function Execution Context
        3. Eval Execution Context

    === How JavaScript code execute ===
    {code} => 1. Memory Creation Phase
              2. Execution Phase

    
    {
        ===== Code =====
        let val1 = 10;
        let val2 = 5;
        function addNum(num1, num2) {
            let total = val1 + val2;
            return total
        }
        let result1 = addNum(val1, val2);
        let result2 = addNum(4, 5);
    }

    Execution Phase =>
    1. Global Execution Phase => alloted to (this)
    2. Memory Phase =>
        val1 = undefined
        val2 = undefined
        addNum = function defination
        result1 = undefined
        result2 = undefined

    3. Execution Phase
        val1 = 10
        val2 = 5
        addNum => {
            New Variable Environment + Execution thread
        } => After execution it is deleted automatically

     Memory Phase
        val1 = undefined
        val2 = undefined
        result1 = undefined

     Execution Context
        val1 = 10
        val2 = 5
        result1 = 15 => return it to Global execution Context

     When result2 call => repeat same the above

*/




/*
        ====== Call Stack ======

    => Work as a LIFO technique
    LIFO stands for Last In First Out

    function one(){
        console.log("One");
        two()
    }
    function two(){
        console.log("two");
        three()
    }
    function three(){
        console.log("three")
        // don't write one() here , otherwise it will go for infinite loop
    }
*/