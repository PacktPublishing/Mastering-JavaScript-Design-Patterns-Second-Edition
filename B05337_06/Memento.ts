module  Westeros.Mathmatics {
    export class Fibonacci{
    	public NaieveFib(n): number {
    		if(n== 0)
    			return 0;
    		if(n <= 2)
    			return 1;
    		return this.NaieveFib(n-1) + this.NaieveFib(n-2);
    	}

    	memorizedValues = [];
    	public MemetoFib(n): number {
    		if(n== 0)
    			return 0;
    		if(n <= 2)
    			return 1;
    		if(!this.memorizedValues[n])	
    			this.memorizedValues[n] = this.MemetoFib(n-1) + this.MemetoFib(n-2);	
    		return this.memorizedValues[n];
    	}
    }
}

var fib = new Westeros.Mathmatics.Fibonacci();

console.log(fib.MemetoFib(50));
