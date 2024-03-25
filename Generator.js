function* hwGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}

const hw = hwGenerator();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())