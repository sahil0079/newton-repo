function firstFunc() {

    console.log(10 + 20)

    function secondFunc() {
        console.log('hi there')

        function thirdFunc() {
            console.log('hello world')
        }
        thirdFunc()


    }

    secondFunc()


}

firstFunc()







