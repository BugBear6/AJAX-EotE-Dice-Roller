class Dice{
        constructor(max){
        this.max = 6;
        }
    roll(){   
        return Math.floor( (Math.random() * this.max) );
    }
}

/*
* Setback
*/
class Setback extends Dice{
        constructor(max){
        super(max);
        this.max = 6;
        }
        
        result(){
          switch( this.roll() ){
              case 0:
              case 1: 
                  return "blank";
                  break;
              case 2:
              case 3:
                  return "failure";
                  break;
              case 4:
              case 5: 
                  return "threat";
                  break;
          }
        }
}

/*
* Boost
*/
class Boost extends Dice{
        constructor(max){
        super(max);
        this.max = 6;
        }
    
    result(){
        switch( this.roll() ){
            case 0:
            case 1: 
                return "blank";
                break;
            case 2: 
                return "success";
                break;
            case 3:
                return "success,advantage";
                break;
            case 4:
                return "advantage,advantage";
                break;
            case 5: 
                return "advantage";
                break;
        }
    }
}
/*
* Ability
*/
class Ab extends Dice{
        constructor(max){
        super(max);
        this.max = 8;
        }
    
    result(){
        switch( this.roll() ){
            case 0:
                return "blank";
                break;
            case 1: 
            case 2: 
                return "success";
                break;
            case 3:
                return "success,success";
                break;
            case 4:
            case 5:
                return "advantage";
                break;
            case 6:
                return "success,advantage";
                break;
            case 7:
                return "advantage,advantage";
                break;
        }
    }
}

/*
* Dificulty
*/
class Dif extends Dice{
        constructor(max){
        super(max);
        this.max = 8;
        }
    
    result(){
        switch( this.roll() ){
            case 0:
                return "blank";
                break;
            case 1: 
                return "failure";
                break;
            case 2: 
                return "failure,failure";
                break;
            case 3:
            case 4:
            case 5:
                return "threat";
                break;
            case 6:
                return "threat,threat";
                break;
            case 7:
                return "failure,threat";
                break;
        }
    }
}

/*
* Dificulty
*/
class Prof extends Dice{
        constructor(max){
        super(max);
        this.max = 12;
        }
    
    result(){
        switch( this.roll() ){
            case 0:
                return "blank";
                break;
            case 1: 
            case 2:
                return "success";
                break;
            case 3:      
            case 4:
                return "success,success";
                break;
            case 5:
                return "advantage";
                break;
            case 6:
            case 7:
            case 8:
                return "success,advatage";
                break;
            case 9:
            case 10:
                return "advantage,advantage";
                break;
            case 11:
                return "triumph";
                break;
        }
    }
}

/*
* Challenge
*/
class Ch extends Dice{
        constructor(max){
        super(max);
        this.max = 12;
        }
    
    result(){
        switch( this.roll() ){
            case 0:
                return "blank";
                break;
            case 1: 
            case 2:
                return "failure";
                break;
            case 3:      
            case 4:
                return "failure,failure";
                break;
            case 5:
            case 6:
                return "threat";
                break;
            case 7:
            case 8:
                return "failure,threat";
                break;
            case 9:
            case 10:
                return "threat,threat";
                break;
            case 11:
                return "despair";
                break;
        }
    }
}

/*
* Force
*/
class Force extends Dice{
        constructor(max){
        super(max);
        this.max = 12;
        }
    
     result(){
        switch( this.roll() ){
            case 0:
            case 1: 
            case 2:
            case 3:      
            case 4:
            case 5:
                return "dark";
                break;
            case 6:
                return "dark,dark";
                break;
            case 7:
            case 8:
                return "light";
                break;
            case 9:
            case 10:
            case 11:
                return "light,light";
                break;
        }
    }
}

/*
* d10
*/
class D10 extends Dice{
        constructor(max){
        super(max);
        this.max = 10;
        }
    
     result(){
        return this.roll();
        }
}