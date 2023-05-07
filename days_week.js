function solution(D) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const result = {
        'Mon':0,
        'Tue':0,
        'Wed':0,
        'Thu':0,
        'Fri':0,
        'Sat':0,
        'Sun':0,
    };
  
    // Group the values by day of the week
    for (let key in D) {
      const date = new Date(key);
      const dayOfWeek = daysOfWeek[date.getUTCDay()];
      const value = D[key];
      result[dayOfWeek] += value
      
    }
    console.log(result);
    
    
    let prev = 0;
    let next = 0;
    let incre = 0
    
    for (let i in result){
        if(result[i] == 0){
            let loopincre = incre + 1
            while ( true ){
                if (loopincre >= 6){
                    loopincre = -1;
                }
                if (result[daysOfWeek[loopincre+1]] != 0){
                    next = result[daysOfWeek[loopincre+1]]
                    break;
                }
                loopincre += 1;
            }
            result[i] = (next + prev)/2
        }else{
            prev = result[i];
        }
        incre += 1;
    }
    return result;
  }
  
  D = {'2020-01-01':4, '2020-01-02': 4, '2020-01-05': 2, '2020-01-06': -6, '2020-01-08': -2}
  console.log(solution(D))