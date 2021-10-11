// @Component
// @Selector
// @useState("")

// -------------- Factory -------------- //
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  };
}

@Logger("hello") class Foo {}


// -------------- Class decorator -------------- //
function setAPIVersion(apiVersion: string) {
  return(constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setAPIVersion("2.0.0") 
class API {} //decorator - anotar a versão da API

console.log(new API())

// -------------- Property decorator -------------- //
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Error: você não pode criar ${key} menor que ${length}`);
      }
      else{
        val = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  }
}

class Movie {
  // validação - se for menor que 5 - error
  @minLength(50)
  title: string;

  constructor(t: string){
    this.title = t;
  }
}

const movie = new Movie("Interstellar");
console.log(movie.title)

// -------------- Method decorator -------------- //

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  @delay(2000)
  greet(){
    console.log(`Hello! ${this.greeting}`);
  }
}

const pessoa = new Greeter("Pessoa!");
pessoa.greet();
