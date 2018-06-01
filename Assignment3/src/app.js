const factorial = number => { 
  if(number <= 1)
    return number
  else 
    return number * factorial(number - 1)
}

factorial(-5)

const button = document.querySelector('#click-me')
const counter = document.querySelector('#counter')

button.addEventListener('click', () => counter.textContent = factorial(5))

class Computer {
  constructor() {
    this.hardDriveSpace = 512
  }

  installProgram(size, cb) {
    setTimeout(() => {
      if (this.hardDriveSpace > size) {
        this.hardDriveSpace -= size
      } else {
        return "No Space Left!"
      }
      cb();
    }, 1000);
  }

  format() {
    this.hardDriveSpace = 512
  }
}
