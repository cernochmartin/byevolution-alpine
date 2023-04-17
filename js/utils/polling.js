// The polling function
function poll(fn, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    var checkCondition = function(resolve, reject) {
        // If the condition is met, we're done! 
        var result = fn();

        if(result) {
            resolve(result).then(async (value)=>{
                if(value.status == 502){
                    //connection timeout error
                    setTimeout(checkCondition, interval, resolve, reject);
                }else if (value.status != 200) {
                    // An error - let's show it
                    setTimeout(checkCondition, interval, resolve, reject);
                    return value.statusText;
                }else {
                    // Get and show the message
                    return result;
                }
            });
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out'));
            return arguments;
        }
    };

    return new Promise(checkCondition);
}