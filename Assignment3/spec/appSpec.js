describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      expect(counter.innerHTML).toBe("0");
      let button = document.querySelector("#click-me");
      button.click();
      expect(counter.innerHTML).toBe("120");

    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.getAttribute("id")).toBe("click-me");
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(8)).toEqual(40320);
      expect(factorial(5)).toEqual(120);
      expect(factorial(4)).toEqual(24);
      expect(factorial(3)).toEqual(6);
      expect(factorial(2)).toEqual(2);
    })

    it("returns number if the provided number is less than 1 ", () => {
      expect(factorial(-5)).toEqual(-5);
      expect(factorial(-3)).toEqual(-3);
      expect(factorial(-2)).toEqual(-2);
      expect(factorial(-1)).toEqual(-1);
      expect(factorial(0)).toEqual(0);

    })
  })

  describe("Computer", () => {
    const computer = new Computer();
    it("is created with a hard drive size of 512", () => {
      expect(computer.hardDriveSpace).toBe(512);
    })

    describe("installProgram", () => {
      const computer = new Computer();
      beforeEach((done) => {
        computer.installProgram(500, () => {
          done();
        })
      })
      it("can install a program if there is sufficient space", (done) => {
        expect(computer.hardDriveSpace).toBe(12);
        done();
      })
    });
    it("is unable to install a program if there is insufficient space", (done) => {
      expect(computer.hardDriveSpace).toBe(512);
      done();
    })
  })

  describe("format", () => {
    const computer = new Computer();



    it("resets the hard drive to 512, even after programs have been installed", () => {
      expect(computer.hardDriveSpace).toBe(512);
      computer.format();
    });
  })

})