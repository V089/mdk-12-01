const getDivisorsCount = (number = 1) => {
    if(number < 0 || Number.isInteger(number))
        alert('number должен быть целым и числом и больше нуля')
    else{
        for(i = 0; i <= number; i++){
            if(number % i === 0) getDivisorsCount++
        }
    }
    return getDivisorsCount;
}