(() => {
    

    function isRedFruit(fruit: string): boolean {
        
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
        
    }

    type FruitColor = 'red' | 'yellow' | 'purple';

    function getFruitsByColor(color: FruitColor): string[] {
        
        const fruitsByColor = {
            red:    ['manzana', 'fresa'],
            yellow: ['pina', 'banana'],
            purple: ['moras', 'uvas'],
        };

        if (Object.keys(fruitsByColor).includes(color))
            throw Error('the color must be: red, yellow, purple');

        return fruitsByColor[color];
    }


    
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;


    function workingSteps() {
        
        if (!isFirstStepWorking) return 'First step broken';
        if(!isSecondStepWorking) return 'Second step broken';
        if(!isThirdStepWorking)  return 'Third step broken';
        if (!isFourthStepWorking) return 'forth step broken';
        
        return 'Working properly';
    }




})